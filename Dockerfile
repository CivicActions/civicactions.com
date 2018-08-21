#
# Build web server
# This is based on https://github.com/abiosoft/caddy-docker/blob/master/Dockerfile
#
FROM abiosoft/caddy:builder as builder

ARG version="0.11.0"
ARG plugins="realip,expires,prometheus"

RUN VERSION=${version} PLUGINS=${plugins} ENABLE_TELEMETRY=false /bin/sh /usr/bin/builder.sh


#
# Build site
#
FROM node:8.11 as app
ARG GATSBY_JAZZ_URL

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
COPY . .
RUN yarn build

#
# Compress site files
#
FROM alpine:3.8 as appz
RUN apk add gzip --no-cache && \
    apk add brotli --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/testing/ --allow-untrusted
COPY --from=app /usr/src/app/public /srv
RUN find /srv -type f -a \( -name '*.html' -o -name '*.css' -o -name '*.js' \
    -o -name '*.json' -o -name '*.xml' -o -name '*.svg' -o -name '*.txt' \) \
    -exec brotli --best {} \+ -exec gzip --best -k {} \+

#
# Lossless image compression
#
FROM bardiir/auto-caesium:latest as appzz
COPY --from=appz /srv /srv
RUN ln -s /srv /caesium && /caesiumbin/entrypoint.sh

#
# Package site into web server
#
FROM alpine:3.8
ENV ENV dev
EXPOSE 80 443
VOLUME /root/.caddy /srv
WORKDIR /srv

# Ensure we have root certs available for caddy.
RUN apk add --no-cache ca-certificates && update-ca-certificates

# Install caddy from builder stage.
COPY --from=builder /install/caddy /usr/bin/caddy

# Install a default configuration file.
COPY Caddyfile /etc/Caddyfile

# Install application from appzz stage.
COPY --from=appzz /srv /srv

CMD ["caddy", "--conf", "/etc/Caddyfile", "--log", "stdout", "--agree=true"]

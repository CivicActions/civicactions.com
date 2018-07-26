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
COPY . .
RUN yarn
RUN yarn build

#
# Package site into web server
#
FROM alpine:3.8
ENV HOSTNAME 0.0.0.0
EXPOSE 80 443
VOLUME /root/.caddy /srv
WORKDIR /srv

# Install caddy from builder stage.
COPY --from=builder /install/caddy /usr/bin/caddy

# Install a default configuration file.
COPY Caddyfile /etc/Caddyfile

# Install application from app stage.
COPY --from=app /usr/src/app/public /srv

CMD ["caddy", "--conf", "/etc/Caddyfile", "--log", "stdout", "--agree=true"]

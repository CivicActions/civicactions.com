#
# Build site
#
FROM node:8.11 as app

WORKDIR /usr/src/app
COPY . .
RUN yarn
RUN yarn build

#
# Build web server
# This is based on https://github.com/abiosoft/caddy-docker/blob/master/Dockerfile
#
FROM abiosoft/caddy:builder as builder

ARG version="0.11.0"
ARG plugins="realip,expires,prometheus"

RUN VERSION=${version} PLUGINS=${plugins} ENABLE_TELEMETRY=false /bin/sh /usr/bin/builder.sh

#
# Package site into web server
#
FROM alpine:3.8
LABEL maintainer "Abiola Ibrahim <abiola89@gmail.com>"

# Install caddy
COPY --from=builder /install/caddy /usr/bin/caddy

# Validate install
RUN /usr/bin/caddy -version
RUN /usr/bin/caddy -plugins

EXPOSE 80 443
VOLUME /root/.caddy /srv
WORKDIR /srv

# Install a default configuration file (mainly for debugging - this is overriden on deploy).
COPY Caddyfile /etc/Caddyfile

# Install application
COPY --from=app /usr/src/app/public /srv

CMD ["caddy", "--conf", "/etc/Caddyfile", "--log", "stdout", "--agree=true"]

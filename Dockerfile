#
# Node environment (used for sandboxes also)
#
FROM node:12.8 as env
WORKDIR /usr/src/app
ENV PATH=/usr/src/app/node_modules/.bin/:${PATH}


#
# Build site
#
FROM env as app
ARG GATSBY_JAZZ_URL

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Temporary workaround for Medium CAPTCA issue: https://github.com/gatsbyjs/gatsby/issues/17335#issuecomment-529912619
RUN sed -i'' -e 's|/latest?format=json|?format=json|g' node_modules/gatsby-source-medium/gatsby-node.js

COPY . .
RUN yarn lint-code
# TODO: Fix warnings and add eslint-code here also.
RUN yarn lint-styles
RUN yarn build
RUN yarn test

#
# Compress site files
# TODO: When brotli is added to stable Alpine release, move back to tagged base image.
#
FROM alpine:edge as appz
RUN apk add gzip brotli --no-cache
COPY --from=app /usr/src/app/public /srv
RUN find /srv -type f -a \( -name '*.html' -o -name '*.css' -o -name '*.js' \
  -o -name '*.json' -o -name '*.xml' -o -name '*.svg' -o -name '*.txt' \) \
  -exec brotli -f --best {} \+ -exec gzip -f --best -k {} \+

#
# Lossless image compression
#
FROM bardiir/auto-caesium:latest as appzz
COPY --from=appz /srv /caesium
RUN /caesiumbin/entrypoint.sh

#
# Package site into web server
#
FROM civicactions/caddy-docker-build:v1.0.3.2

ENV ENV dev

# Install default configuration files.
COPY Caddyfile* /etc/

# Install application from appzz stage.
COPY --from=appzz /caesium /srv

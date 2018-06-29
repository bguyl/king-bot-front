FROM nginx:alpine

LABEL maintainer="Bastien Guyl <bastien@guyl.me"

COPY dist /usr/share/nginx/html

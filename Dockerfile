FROM node:14.17.5-alpine

RUN mkdir -p /usr/src/ralexclark
WORKDIR /usr/src/ralexclark

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/ralexclark/
RUN npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]
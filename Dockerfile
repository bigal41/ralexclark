FROM node:22-alpine

WORKDIR /usr/src/ralexclark

COPY . .
RUN npm ci
RUN npm run generate

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000

CMD [ "npm", "run", "preview", "--", "--host=0.0.0.0", "--port=3000" ]

FROM gliderlabs/alpine:3.4
RUN apk add --update nodejs
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
CMD node server.js
EXPOSE 3000

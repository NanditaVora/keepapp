FROM node:10.16.3-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/keepapp /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

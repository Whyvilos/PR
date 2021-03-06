FROM tiangolo/node-frontend:latest as build-stage

WORKDIR /app

COPY . /app/

RUN npm install

RUN npm run start

FROM nginx:latest

COPY --from=build-stage /app/build/  /usr/share/nginx/html

COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf
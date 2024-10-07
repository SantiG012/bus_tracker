# Stage 1
FROM node:18-slim as build

WORKDIR /usr/app

RUN npm install npm@10.1.0

COPY package*.json ./

RUN npm install --force --omit-dev

COPY . /usr/app/

RUN npm run build

# stage 2
FROM nginx
EXPOSE 3000
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html
# Stage 1
FROM node:18-slim AS build
# Workdir
WORKDIR /usr/app/
# update npm
RUN npm install npm@10.1.0
# Copy dependencies
COPY package*.json ./
# install production
RUN npm install --force --omit=dev
# Copy source code
COPY . /usr/app/
# build the app
RUN npm run build

# Stage 2
FROM nginx
EXPOSE 3000
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html

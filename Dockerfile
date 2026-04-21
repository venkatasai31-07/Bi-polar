# Stage 1: Build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:stable-alpine
# Update Nginx to listen on port 4000
RUN sed -i 's/listen\(.*\)80;/listen 4000;/' /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 4000
CMD ["nginx", "-g", "daemon off;"]

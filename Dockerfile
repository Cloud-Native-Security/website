# Pull official base image
FROM node:19-alpine as build-deps

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR /usr/src/app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

RUN ls

ENV NODE_OPTIONS=--openssl-legacy-provider
 
# Installs all node packages
RUN yarn install

COPY ./ ./

# Installs all node packages
RUN yarn build

# the base image 
FROM nginx:1.24-alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Copy static assets from builder stage
COPY --from=build-deps /usr/src/app/build .

## Expose Port
EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

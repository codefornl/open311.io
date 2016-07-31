FROM node:6

# Create open311-api directory
RUN mkdir -p /api
WORKDIR /api

# Variables
ENV NODE_ENV production


# Install
COPY package.json /api
COPY gulpfile.js /api
COPY ./src /open311/src

RUN npm install && npm run build && ./node_modules/.bin/gulp install_npm
COPY config-docker.json /api/build/config.json

# Add image configuration and scripts
ADD start.sh /start.sh
RUN chmod 755 /*.sh

EXPOSE 3000
CMD ["/start.sh"]

FROM node:10.13.0-alpine
WORKDIR /usr/src/app/world-client
# Only copy the package.json file to work directory
COPY package.json .
COPY package-lock.json .
# Install all Packages
RUN npm install -g @angular/cli
RUN npm install 
# # Start
CMD ["npm", "start"]
EXPOSE 4200
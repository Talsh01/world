FROM node:10.13.0-alpine
WORKDIR /usr/src/app/world-server
# Only copy the package.json file to work directory
COPY package.json .
COPY package-lock.json .
# Install all Packages
RUN npm install
# Copy all other source code to work directory
ADD . /usr/src/app/world-server
# Start
CMD ["npm", "run", "dev"]
EXPOSE 8080

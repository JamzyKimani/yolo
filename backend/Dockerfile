#Base image is the alpine varient of the official nodejs image. 
#Alpine is used because it is lightweight leading to a small final image
FROM node:20.18.0-alpine

#Base image comes with non-root user "node".
#app and app/node_modules directory created and ownership assiged to the node user
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#set the app directory in the node user home dir as the working directory
WORKDIR /home/node/app

# Copy the package.json and package-lock.json files to the container & Assign node user ownership
COPY --chown=node:node package*.json ./

#Non root user "node" used as security best practice
USER node

#install backend dependancies
RUN npm install

#copy application code with the appropriate permissions into the container's app directory
COPY --chown=node:node . .

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the app
CMD [ "node", "server.js" ]
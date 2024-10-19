# build environment
FROM node:20.18.0-alpine as build
WORKDIR /app

#add node_modules folder to $PATH variable
ENV PATH /app/node_modules/.bin:$PATH

# Copy the package.json and package-lock.json files to the image
COPY package*.json ./

#install frontend  dependancies
RUN npm install

#fix error: https://stackoverflow.com/questions/52196518/could-not-get-uid-gid-when-building-node-docker
#RUN npm config set unsafe-perm true 

#RUN npm install react-scripts@3.4.1 -g --silent

#copy application code into image
COPY . /app

#build production app
RUN npm run build

#STAGE 2: production environment
FROM nginx:1.16.0-alpine
#copy built application to the prod. image and into nginx public web root folder
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
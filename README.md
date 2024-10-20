# YOLO PROJECT
The application is a demo e-commerce website that doubles-up as a dashboard where you can load retail products on to the site. The purpose of the project is to implement docker containarization on a MongoDB, Express, React & Express stack app ***(MERN)***. Concepts showcased include: 
1. Implementing multi-stage docker image build to optimize final image size. 
2. Synchning multiple containers using docker-compose
3. Persisting container data using docker volumes
4. Implementing a container network 

## Requirements
Make sure that you have the following:
- [Docker](https://docs.docker.com/desktop/) installed - runs the containerized application and all it's dependancies one command.
- Ports 3000 and 5000 free on the computer (ensure no other app is using these ports)


## How to Run the Application
 1. Clone this repository by running the following command (assuming you have git installed on the computer):
    `git clone https://github.com/JamzyKimani/yolo.git`
     <br>

 2. Navigate into the cloned project folder
    `cd yolo`
    <br>

 
 3. Build the relavant docker images and run the containerized application by excecuting the command below: 
    `docker-compose up --build`
    <br>


 4. Once the above command has completed running you can access the application from your browser on the following link: 
     `http://localhost:3000`
    
    
 ### That's it! Go ahead and add a product (note that the price field only takes a numeric input)
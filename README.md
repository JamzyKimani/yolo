# YOLO PROJECT
The application is a demo e-commerce website that doubles-up as a dashboard where you can load retail products on to the site. The purpose of the project is to implement docker containarization on a MongoDB, Express, React & Express stack app ***(MERN)***. Concepts showcased include:

## Option 1: Docker Compose Showcase
1. Implementing multi-stage docker image build to optimize final image size. 
2. Synchning multiple containers using docker-compose
3. Persisting container data using docker volumes
4. Implementing a container network 

## Option 2: Vagrant + Ansible Showcase
1. Infrastructure as Code (IAC) provisioning of virtual machines using [Vagrant](https://www.vagrantup.com/)
2. Configuring provisioned machines by running plays (automated procedures) using [Ansible](https://www.ansible.com/)

<br>

## How to Run the Application
### OPTION 1: USING DOCKER COMPOSE

#### Requirements
Make sure that you have the following:
- [Docker](https://docs.docker.com/desktop/) installed - runs the containerized application and all it's dependancies one command.
- Ports 3000 and 5000 free on the computer (ensure no other app is using these ports)

#### Procedure
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
<br>

### OPTION 2: USING USING VAGRANT & ANSIBLE
This option involves using IAC to provision virtual machines on which the various microservices of the application are then deployed.  

#### Requirements: 
-[Vagrant](https://www.vagrantup.com/) - Vagrant is used to automate creation of virtual machines using a provider like Virtualbox
-[Ansible](https://www.ansible.com/) - Ansible is used to install and configure dependancies used to run the application on the virtual machines.
- Ports 3000 and 5000 free on the computer (ensure no other app is using these ports)

#### Procedure
 1. Clone this repository by running the following command (assuming you have git installed on the computer):
    `git clone https://github.com/JamzyKimani/yolo.git`
     <br>

 2. Navigate into the cloned project folder
    `cd yolo`
    <br>

 
 3. Build the relavant docker images and run the containerized application by excecuting the command below: 
    `vagrant up --provision`
    <br>


 4. Once the above command has completed running you can access the application from your browser on the following link: 
     `http://localhost:3000`


 ### That's it! Go ahead and add a product (note that the price field only takes a numeric input)
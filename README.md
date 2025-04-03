# sit323-2025-prac5p
Task 5.1P - Using Docker


Overview
This repository contains a basic Express web app that displays "Hello World" at the root URL. The app is containerised with Docker and managed using Docker Compose.

Prerequisites
Docker (with Docker Compose)

Files
index.js: The Express server code.

Dockerfile: Instructions to build the Docker image.
docker-compose.yml: Configuration for Docker Compose.

package.json & package-lock.json: App dependencies.

How to Run
Clone the Repository:
git clone https://github.com/H-Rus-so/sit323-2025-prac5p.git
cd sit323-2025-prac5p

Build the Docker Image:
docker build -t task5 .

Start the Application:
docker-compose up

Test the App:
Open http://127.0.0.1:3000/ in your browser. You should see "Hello World".

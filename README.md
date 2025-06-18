# Resource for this repository

- [Docker For Open Source Contributors - Part 1](https://www.youtube.com/watch?v=31k6AtW-b3Y)
- [Docker For Open Source Contributors - Part 2](https://www.youtube.com/watch?v=xPT8mXa-sJg)
# node-docker-app

### Create a network for the docker containers

`docker network create demo`

### Build the client 

```sh
docker build -t todo-backend .
```

### Run the client

`docker run --name=frontend --network=demo -d -p 5173:5173 todo-backend

### Verify the app is running

Open your browser and type `http://localhost:5173`

### Run the mongodb container

`docker run --network=demo --name mongodb -d -p 27017:27017 -v ~/opt/data:/data/db mongodb:latest`

### Build the server

```sh
docker build -t todo-backend .
```

### Run the server

`docker run --name=backend --network=demo -d -p 5050:5050 todo-backend`

## Using Docker Compose

`docker compose up -d`

## Node Application basic docker file structure
```
FROM node:18.9.1

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5050

CMD ["npm", "start"]

```

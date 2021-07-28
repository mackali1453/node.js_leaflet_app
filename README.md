# node.js_leaflet_app

Node.js_leaflet_app is a node.js app which includes leaflet map and calendar in it. 

## Installation

Go to app folder and use npm for installing requirements.

```bash

  npm install

```

## Usage with docker

```bash
#open a cmd and set current directory to app folder
docker build -t webapp .
docker run -d -p 3000:3000 webapp 

```
## Usage with node.js
Go to app folder and type "nodemon"

## After running app
Go to your browser and type "http://localhost:3000/login". This routes to login page. There are two button which route to map or calendar page. Just click whatever you want.

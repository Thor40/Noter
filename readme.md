# Noter
Note taking applicaiton

## Table of contents
--------------------
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Testing](#testing)

## General info
--------------------
This project was created as an exercise practicing creating a server with client and server side integration.
	
## Technologies
--------------------
Project is created with:
* Node.js verison: 12.17.0 LTS
* Express version: 4.17.1
* uuidv4 version: 8.1.0
	
## Setup
--------------------
### To run this project, make sure to install [Node.js](https://nodejs.org/en/) 

install the following locally using npm:

```
$ cd ../dir
$ npm init
$ npm install express --save
$ npm install uuid
```

## Testing
--------------------
### To test this project, run the following in the terminal:
```
$ npm start
```
While server is running, in the browser, visit:

http://localhost:3002/

--------------------

Alternatively, visit the deployed [heroku url](https://notetakrr.herokuapp.com/):
```
https://notetakrr.herokuapp.com/
```
## Features
--------------------
### Features include:
* Adding note title
* Adding note content
* Save button appears when text is entered in note title
* Save button saves notes on left column
* Saved items on left column display on click and contain a delete button
* Delete button removes note from saved list

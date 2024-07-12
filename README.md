# News-App-MERN-stack

## About

I've created responsive website for news article search, list and preview. [GNews API](https://gnews.io/) was used to search
for articles from a variety of sources, including Google News. Front-end was created with React library
using Material-UI components, back-end was created with Node.js and MongoDB Atlas Cloud Database, which
logs user actions (search queries and opened articles data) to the cloud database. The app is deployed in

<!-- [Heroku](https://www.heroku.com/home) cloud service. -->

## Live demo

<!-- https://news-app-mern-stack.herokuapp.com/ -->

## GIF

![project-gif](https://user-images.githubusercontent.com/23439837/125851039-58bfaddc-a496-4667-9229-65c3f3d3dac1.gif)

## Table of contents

- [Technologies](#technologies)
- [Setup for local development](#setup-for-local-development)
- [Instructions for deployment](#instructions-for-deployment)
- [Status](#status)
- [Contact](#contact)
- [License](#license)

## Technologies

Front-end:

- JavaScript ES6 + React + Material-UI

Back-end:

- Node.js + Express + MongoDB Atlas Cloud Database

## Setup for local development

Get your local copy of the repository by cloning or forking.

If not yet installed, get [Node JS](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm).
Install project package dependencies in the `server` directory and in the `client` directory - run `npm install`
in the terminal.

App configuration values are stored in the `.env` files. For your local build, rename `.env.sample` files to `.env` in both
`server` and `client` directories, this is where you set your custom app values (secrets).

To get `REACT_APP_API_KEY` value visit [GNews](https://gnews.io/), create an account and replace `<your_api_key>` to your API-Token (API-Key)
value in `.env` file in the `client` directory.

To get `MONGODB_CONNECTION_STRING` value visit [MongoDB](https://www.mongodb.com/), create an account and follow
[instructions](https://docs.atlas.mongodb.com/tutorial/create-atlas-account/) to create a free Atlas Cloud Database - Cluster.
Then replace `<password>` to your database password value and `<databaseName>` to your database name in `.env` file
in the `server` directory.

To start back-end development version - run `npm run server` in the terminal in the `server` directory.

To start front-end development version - run `npm start` in the terminal in the `client` directory.

If you find any bug or would like to add a new feature to the codebase, please create an issue and commit your changes.

<!--
## Instructions for deployment

1. Create an account on [Heroku](https://www.heroku.com/home) cloud service.
2. Download and install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
3. Create a new app in [Heroku dashboard](https://dashboard.heroku.com/apps), app name should be unique.
4. Follow instructions for the deployment process.
5. Add Config Vars for secrets in your `.env` files, replace your values and run these commands in the terminal:

`heroku config:set MONGODB_CONNECTION_STRING=mongodb+srv://admin:<password>@news-app.bdk3q.mongodb.net/<databaseName>`

`heroku config:set REACT_APP_API_KEY=<your_api_key>`

6. To receive and save user log values in your MongoDB Atlas Cloud Database, select your database on MongoDB dashboard, then select
   `Network Access` settings and edit `IP Address` to "allow access from anywhere". -->

## Status

The project is: _finished_.

## Contact

Created by [@Lukas Krisikaitis](https://www.linkedin.com/in/lukas-krisikaitis-44597a1b0/) - feel free to contact me on LinkedIn!

## License

MIT License - Copyright (c) 2021 Lukas Krisikaitis

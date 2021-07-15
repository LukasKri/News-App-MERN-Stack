# News-App-MERN-stack

## About

I've created responsive website for news article search, list and preview. [GNews API](https://gnews.io/) was used to search
for articles from a variety of sources, including Google News. Front-end was created with React library
and Material-UI components, back-end was created with Node.js and MongoDB Atlas Cloud Database, which
logs user actions (search queries and opened articles data) to the cloud database. The app is deployed in
[Heroku](https://www.heroku.com/home) cloud service.

## Live demo

https://news-app-mern-stack.herokuapp.com/

## GIF

![project-gif](https://user-images.githubusercontent.com/23439837/125851039-58bfaddc-a496-4667-9229-65c3f3d3dac1.gif)

## Table of contents

-   [Technologies](#technologies)
-   [Setup for local development](#setup-for-local-development)
-   [Instructions for deployment](#instructions-for-deployment)
-   [Status](#status)
-   [Contact](#contact)
-   [License](#licence)

## Technologies

Front-end:

-   JavaScript ES6 + React + Material UI

Back-end:

-   Node.js + Express + MongoDb Atlas Cloud Database

## Setup for local development

Get your local copy of the repository by cloning or forking.

If not yet installed, get [Node JS](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm).
Install project package dependencies in the `root` directory and in the `client` directory - run `npm install`
in the terminal.

App configuration values are stored in the `.env` files. For your local build, rename `.env.sample` files to `.env` in both
`root` and `client` directories, this is where you set your custom app values (secrets).

To get `REACT_APP_API_KEY` value visit [GNews](https://gnews.io/), create an account and replace `<your_api_key>` to your API-Token (API-Key)
value in `.env` file in the `client` directory.

To get `MONGODB_CONNECTION_STRING` value visit [MongoDB](https://www.mongodb.com/), create an account and follow
[instructions](https://docs.atlas.mongodb.com/tutorial/create-atlas-account/) to create a free Atlas Cloud Database - Cluster.
Then replace `<password>` to your database password value and `<databaseName>` to your database name in `.env` file
in the `root` direcotry.

To start back-end development version - run `npm run server` in the terminal in the `root` directory.

To start front-end development version - run `npm start` in the terminal in the `client` directory.

If you find any bug or would like to add a new feature to the codebase, please create an issue and commit your changes.

## Instructions for deployment

1. Create an account on [Heroku](https://www.heroku.com/home) cloud service.
2. Download and install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
3. Create new app in [Heroku dashboard](https://dashboard.heroku.com/apps), app name should be unique.
4. Follow instructions for deployment process.
5. Add Config Vars for secrets in your `.env` files, run

-   heroku config:set MONGODB_CONNECTION_STRING=mongodb+srv://admin:<password>@news-app.bdk3q.mongodb.net/<databaseName>
-   heroku config:set REACT_APP_API_KEY=<your_api_key>
    in the terminal.

6. To receive user log values to your MongoDB Atlas Cloud Database, go to your database on MongoDB dashboard, then
   `Network Access` and edit `IP Address` to "allow access from anywhere".

## Status

The project is: _finished_.

## Contact

Created by [@Lukas Krisikaitis](https://www.linkedin.com/in/lukas-krisikaitis-44597a1b0/) - feel free to contact me on LinkedIn!

## MIT License

Copyright (c) 2021 Lukas Krisikaitis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

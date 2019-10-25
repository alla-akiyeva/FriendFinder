# FriendFinder
A fullstack application that determines the compatibility of and matches potential friends based their answers to a survey.

Deployed on Heroku: https://find-afriend-app.herokuapp.com/

### Getting Started
Copy the repo and run `npm i` to install dependencies.

### Functionality
In order to determine a match, users enter their name, add a link to a photo and answer ten questions about their preferences and personality. 

![FriendFinderHome](/public/assets/FriendFinderHome.png)

Basic input validation is in place to prevent users from submitting profiles with missing information. Only after all ten questions have been answered will the answers be posted to the server via an API route, and the user will be able to see their match. 

![FriendFinderMatch](/public/assets/FriendFinderMatch.png)


#### Built With
* [Boostrap](https://getbootstrap.com/) - front-end framework
* [Node.js](https://nodejs.org/en/) - server-side JavaScript runtime environment
* [Express](https://www.npmjs.com/package/express) - Node.js module, used to handle server-side routing

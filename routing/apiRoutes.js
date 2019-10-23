// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

const friends = require("./../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        const userInput = req.body;
        
        // Convert each user's results into a simple array of numbers
        console.log(Array.from(userInput.scores).map(Number));

        // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
        // Example:
        // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
        // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
        // Total Difference: 2 + 1 + 2 = 5

        //loop through each array element, and loop through each user (two loops)
        
    
        // Create an array for differences.
        const difArray = [];
        // For each friends element...
        friends.forEach(function(element) {
            let totaldif = 0;
            // Loop through scores array. 
            for (i=0; i < userInput.scores.length; i++) {
                if (element !== userInput.scores[i]) {
                    let dif = Math.abs(element.scores[i] - userInput.scores[i]);
                    totaldif = totaldif + dif;
                }
            }
            difArray.push(totaldif);
        });
        const lowestdif = Math.min.apply(null, difArray);
        index = difArray.indexOf(lowestdif);
        console.log(friends[index].name);

        res.json(friends[index]);

        
      
        // Once you've found the current user's most compatible friend, display the result as a modal pop-up.
        // The modal should display both the name and picture of the closest match.
      
        friends.push(userInput);
    });

}
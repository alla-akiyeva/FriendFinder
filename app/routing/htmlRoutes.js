const path = require("path");

module.exports = function(app) {
    // create root route for home (res.send) - GET - 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname,"/../public/home.html"));
    });

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    })

    
}

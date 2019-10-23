const express = require("express");

//setting up server
const PORT = process.env.PORT || 3000;
const app = express();

// app.use(express.static(path.join(__dirname + '/public')));

//Serve static content for the app from the "public" directory
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
   }

app.listen(PORT, function() {
    console.log("Listening on Port", PORT);
})


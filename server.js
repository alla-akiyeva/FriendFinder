const express = require("express");


//setting up server
const PORT = 3000;
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
   }

app.listen(PORT, function() {
    console.log("Listening on Port", PORT);
})


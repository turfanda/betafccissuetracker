
var express = require('express');
var mongoose = require("mongoose");
var routes = require("./routes/routeHandler");
var app = express();

mongoose.connect(process.env.MONGO_URL, function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
});

app.use(express.static('public'));

app.get("/api/issues",routes.post);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

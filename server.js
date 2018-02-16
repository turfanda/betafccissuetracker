
var express = require('express');
const bodyparser = require('body-parser');
var mongoose = require("mongoose");
var routes = require("./routes/routeHandler");
var app = express();
const projectModel = require('./models/project');
const issueModel = require('./models/issue');

mongoose.connect(process.env.MONGO_URL, function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    } else {
        console.log('The Mongoose connection is ready');
    }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));




app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/api/",function(req,res){
    let project = new projectModel({
        project_name: req.body.projectName
    });

    project.save(function(err, data) {
        if (err) console.log(err);
        else {
            res.json({"asd":req.body.projectName, bsd: "has been created and id if this projetc is :","csd":data._id});
        }
    })

});
app.get("/api/getallproject/",routes.getAllProject);
app.post("/api/issues/:projectName",routes.createIssue);

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
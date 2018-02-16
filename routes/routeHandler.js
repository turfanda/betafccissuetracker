const mongoose = require('mongoose');
const projectModel = require('../models/project');
const issueModel = require('../models/issue');

exports.createProject = function(req, res) {
    let project = new projectModel({
        project_name: req.body.projectName
    });
    project.save(function(err, data) {
        if (err) console.log(err);
        else {
            return res.send(req.body.projectName + "has been created and id if this projetc is :" + data._id);
        }
    });
}
exports.getAllProject = function(req, res) {
    projectModel.find(function(err, data) {
        if (err)
          console.log(err);
        else {
            return res.json(data)
        }
    });
}

exports.createIssue = function(req, res) {
    
  console.log(req.params.projectName);
  console.log(req.body);

}
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
            return res.send(req.body.projectName+ "has been created and id if this projetc is :"+data._id);
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
  
      let issue = new issueModel({
  issue_title: {type: String},
	issue_text: {type: String},
	created_by: {type: String},
  assigned_to:{type: String},
	created_on: {type: Date},
  updated_on:{type:Date},
  isOpne:{type:Boolean},
  status:{type:String},
    });

}
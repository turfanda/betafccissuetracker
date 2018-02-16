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
        console.log(0)
  let projectId;
projectModel.findOne({"project_name":req.params.projectName},function(err, data) {
          console.log(1)
        if (err){
    let project = new projectModel({
        project_name: req.params.projectName
    });
    project.save(function(err, data) {
        if (err) console.log(err);
        else {
            projectId=data._id;
                          let issue = new issueModel({
  issue_title: req.body.issueName,
	issue_text: req.body.issueText,
	created_by: req.body.createdBy,
  assigned_to:req.body.assignedTo,
	created_on: Date().now,
  updated_on:Date().now,
  isOpen:true,
  status:req.body.status,
        _project:projectId
    });
  
    issue.save(function(err, data) {
        if (err) console.log(err);
        else {
            return res.json(data);
        }
    });
        }
    });
        
        }

        else {
            projectId=data._id;
                let issue = new issueModel({
  issue_title: req.body.issueName,
	issue_text: req.body.issueText,
	created_by: req.body.createdBy,
  assigned_to:req.body.assignedTo,
	created_on: Date().now,
  updated_on:Date().now,
  isOpen:true,
  status:req.body.status,
        _project:projectId
    });
  
    issue.save(function(err, data) {
        if (err) console.log(err);
        else {
            return res.json(data);
        }
    });
        }
    });

}


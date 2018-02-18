const mongoose = require('mongoose');
const projectModel = require('../models/project');
const issueModel = require('../models/issue');

exports.createProject = function(req, res) {
    let project = new projectModel({
        project_name: req.body.projectName
    });
    projectModel.createProject(project,function(err, data) {
        if (err) console.log(err);
        else {
            return res.send(req.body.projectName + "has been created and id of this projetc is :" + data._id);
        }
    });
}

exports.getAllProject = function(req, res) {
    projectModel.getAllProject(function(err, data) {
        if (err)
            console.log(err);
        else {
            return res.json(data)
        }
    });
}

exports.getAllIssue = function(req, res) {
  projectModel.getProjectByName(req.query.ProjectName,function(err,data){
    console.log(data);
    console.log(1);
  if(data===null){
  return res.status(500).send("No such project");
  }
    else{
          issueModel.getAllIssue(data._id,function(err, data) {
        if (err)
            console.log(err);
        else {
            return res.json(data)
        }
    });
    }
  
  });

}

exports.createIssue = function(req, res) {
    let projectId;
    projectModel.getProjectByName(req.params.projectName, function(err, data) {
        if (data===null) {
            let project = new projectModel({
                project_name: req.params.projectName
            });
            projectModel.createProject(project,function(err, data) {
                if (err) console.log(err);
                else {
                    projectId = data._id;
                   console.log(projectId);
                    let issue = new issueModel({
                        issue_title: req.body.issueName,
                        issue_text: req.body.issueText,
                        created_by: req.body.createdBy,
                        assigned_to: req.body.assignedTo,
                        created_on: Date().now,
                        updated_on: Date().now,
                        isOpen: true,
                        status: req.body.status,
                        _project: projectId
                    });

                    issueModel.createIssue(issue,function(err, data) {
                        if (err) console.log(err);
                        else {
                            return res.json(data);
                        }
                    });
                }
            });

        } else {
            projectId = data._id;
            let issue = new issueModel({
                issue_title: req.body.issueName,
                issue_text: req.body.issueText,
                created_by: req.body.createdBy,
                assigned_to: req.body.assignedTo,
                created_on: Date().now,
                updated_on: Date().now,
                isOpen: true,
                status: req.body.status,
                _project: projectId
            });
            issueModel.createIssue(issue,function(err, data) {
                if (err) console.log(err);
                else {
                    return res.json(data);
                }
            });
        }
    });

}

exports.deleteIssue = function (req,res){
  console.log(req.body);
if(req.body.IssueId==='')
   return res.status(400).send("No Id Send");
else
  issueModel.deleteIssueById(req.body.IssueId,function(err,data){
  if(err)
     return res.status(400).send("No such issue");
    else
      return res.status(200).send("issue deleted from project: "+req.body.ProjectName +"with ıd of :"+ req.body.IssueId);
  });
}
exports.updateIssue = function (req,res){
  console.log(req.body);
  //findByIdAndUpdate
if(req.body.IssueId==='')
   return res.status(400).send("No Id Send");
else
  issueModel.deleteIssueById(req.body.IssueId,function(err,data){
  if(err)
     return res.status(400).send("No such issue");
    else
      return res.status(200).send("issue deleted from project: "+req.body.ProjectName +"with ıd of :"+ req.body.IssueId);
  });
}
const mongoose = require('mongoose');
const projectModel = require('../models/project');
const issueModel = require('../models/issue');

exports.createProject = function(req, res) {
    let project = new projectModel({
        project_name: req.body.project_name
    });
    projectModel.createProject(project, function(err, data) {
        if (err) console.log(err);
        else {
            return res.send(req.body.project_name + "has been created and id of this projetc is :" + data._id);
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
  console.log(1);
  console.log(req.query.project_name);
console.log(req.body);
    projectModel.getProjectByName(req.query.project_name, function(err, data) {
        if (data === null) {
            return res.status(500).send("No such project");
        } else {
            issueModel.getAllIssue(data._id, function(err, data) {
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
    projectModel.getProjectByName(req.body.project_name, function(err, data) {
        if (data === null) {
            let project = new projectModel({
                project_name: req.body.project_name
            });
            projectModel.createProject(project, function(err, data) {
                if (err) console.log(err);
                else {
                    projectId = data._id;
                    let issue = new issueModel({
                        issue_title: req.body.issue_title,
                        issue_text: req.body.issue_text,
                        created_by: req.body.created_by,
                        assigned_to: req.body.assigned_to,
                        created_on: Date().now,
                        updated_on: Date().now,
                        open: true,
                        status: req.body.status,
                        _project: projectId
                    });

                    issueModel.createIssue(issue, function(err, data) {
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
                issue_title: req.body.issue_title,
                issue_text: req.body.issue_text,
                created_by: req.body.created_by,
                assigned_to: req.body.assigned_to,
                created_on: Date().now,
                updated_on: Date().now,
                open: true,
                status: req.body.status,
                _project: projectId
            });
            issueModel.createIssue(issue, function(err, data) {
                if (err) console.log(err);
                else {
                    return res.json(data);
                }
            });
        }
    });

}

exports.deleteIssue = function(req, res) {
    if (req.body.issue_Id === '')
        return res.status(400).send("No Id Send");
    else
        issueModel.deleteIssueById(req.body.issue_Id, function(err, data) {
            if (err)
                return res.status(400).send("No such issue");
            else
                return res.status(200).send("issue deleted from project: " + req.body.project_name + "with ıd of :" + req.body.issue_Id);
        });
}
exports.updateIssue = function(req, res) {
    if (req.body.issue_Id === '')
        return res.status(400).send("No Id Send");
    else {
        let updates = {}
        if (req.body.issue_title !== undefined && req.body.issue_title !== "")
            updates.issue_title = req.body.issue_title;
        if (req.body.issue_text !== undefined && req.body.issue_text !== "")
            updates.issue_text = req.body.issue_text;
        if (req.body.created_by !== undefined && req.body.created_by !== "")
            updates.created_by = req.body.created_by;
        if (req.body.assigned_to !== undefined && req.body.assigned_to !== "")
            updates.assigned_to = req.body.assigned_to;
        if (req.body.status !== undefined && req.body.status !== "")
            updates.status = req.body.status;
        if (req.body.open !== undefined && req.body.open !== "")
            updates.open = req.body.open;

        if (Object.keys(updates).length !== 0) {
            updates.updated_on = Date().now;
            issueModel.updateIssueById(req.body.issue_Id, updates, function(err, data) {
                if (err)
                    return res.status(400).send("No such issue");
                else
                    return res.status(200).send("issue updated");
            });
        }
    }
}
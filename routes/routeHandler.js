const mongoose = require('mongoose');
const projectModel = require('../models/project');
const issue = require('../models/issue');

exports.post = function(req,res){
  let project = new projectModel({project_name:req.body.projectName});
  project.save(function(err,data){if(err) console.log(err); else { console.log(data); return res.send(req.body.projectName+"has been created and id if this projetc is :"+data._id);}});
}
exports.getAllProject = function(req,res){
  projectModel.find(function(err,data){if(err) console.log(err); else {console.log(data); return res.json(data)}});
}
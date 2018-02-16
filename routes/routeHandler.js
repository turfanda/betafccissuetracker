const mongoose = require('mongoose');
const projectModel = require('../models/project');
const issue = require('../models/issue');

exports.post = function(req,res){
  let project = new projectModel({project_name:req.body.projectName});
  project.save(function(err){if(err) console.log(err); else return res.send(req.body.projectName+"has been created")});
}
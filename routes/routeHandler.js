const mongoose = require('mongoose');
const project = require('../models/project');
const issue = require('../models/issue');

exports.post = function(req,res){
return res.send("Hello World");
}
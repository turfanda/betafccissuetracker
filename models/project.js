const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var projectSchema = new Schema({
	project_name:{type:String}
});

var project = mongoose.model("project",projectSchema)

module.exports = project;

module.exports.createProject = function(newProject,callback){
  newProject.save(callback);
}

module.exports.getAllProject = function(callback){
  project.find(callback);
}

module.exports.getProjectByName = function(name,callback){
  console.log(0);console.log(name);
  let query ={project_name:name};
  project.findOne(query,callback);
}
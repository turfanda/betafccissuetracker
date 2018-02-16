const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var projectSchema = new Schema({
	project_name:{type:String}
});

var project = mongoose.model("project",projectSchema)

module.exports = project;
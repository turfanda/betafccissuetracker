const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var issueSchema = new Schema({
	title: {type: String},
	comment: {type: String},
	created_by: {type: String},
  assigned_to:{type: String},
	created_on: {type: Date},
  updated_on:{type:Date},
  open:{type:Boolean},
  status:{type:String},
    _project: { type: Schema.Types.ObjectId, ref: 'Project', required: true }
});

var issue = mongoose.model("issue",issueSchema)

module.exports = issue;

module.exports.createIssue = function(newIssue,callback){
  newIssue.save(callback);
}

module.exports.updateIssueById = function(id,updates,callback){
  issue.findByIdAndUpdate(id,updates,callback)
}

module.exports.getIssue = function(query,callback){
  issue.find(query,callback);
}
module.exports.deleteIssueById = function(id,callback){
  issue.findByIdAndRemove(id,callback);
}
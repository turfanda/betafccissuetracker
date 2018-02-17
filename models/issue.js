const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var issueSchema = new Schema({
	issue_title: {type: String},
	issue_text: {type: String},
	created_by: {type: String},
  assigned_to:{type: String},
	created_on: {type: Date},
  updated_on:{type:Date},
  isOpne:{type:Boolean},
  status:{type:String},
    _project: { type: Schema.Types.ObjectId, ref: 'Project', required: true }
});

var issue = mongoose.model("issue",issueSchema)

module.exports = issue;

module.exports.createIssue = function(newIssue,callback){
  newIssue.save(callback);
}

module.exports.updateIssue = function(id,callback){
  
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var issueSchema = new Schema({
	issue_title: {type: String},
	issue_text: {type: String},
	created_by: {type: String},
  assigned_to:{type: String},
	created_on: {type: Date},
  updated_on:{type:Date}
});

var issue = mongoose.model("userData",issueSchema)

module.exports = issue;
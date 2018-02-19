const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it

let server =  require("./server");

describe("Tests",function(){
  describe("Functionla Test",function(){
    it("createProject",function(done){ 
      chai.request(server)
        .put('/api')
         .send({project_name: "pr10"})
        .end(function(err, res){
          assert.equal(res.status, 200, 'response status should be 200');
         assert.equal(res.type, 'application/json', "Response should be json");
        console.log(res.status);
                console.log(res.body);
                console.log(res.type);
      done();});});
    it("createProject",function(done){ done();});
    it("createProject",function(done){ done();});
    it("createProject",function(done){ done();});
    it("createProject",function(done){ done();});
    it("createProject",function(done){ done();});
  });
});
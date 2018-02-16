$(function(){
$("#issueSubmit").on("click",function(){
var url ="api/issues/"+$("#pname").val();
$.post( url,$('#issueCreateForm').serialize(), function( data ) {
  console.log(data);
});

});
  
$("#projectSubmit").on("click",function(){
var url ="api/;
$.post( url,$('#issueCreateForm').serialize(), function( data ) {
  console.log(data);
});

});

});



  <div class="insideDiv">
    Create a Project
            <form method="post" action="/api/">
            <input type="text" name="projectName" placeholder="*Project Name">
            <button id="projectSubmit" type="submit">Create project</button>
        </form>
            <form method="get" action="/api/getallproject/">
            <button type="submit"> Get All Project</button>
        </form>
  </div>
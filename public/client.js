$(function(){
$("#issueSubmit").on("click",function(){

  console.log($("input[name='projectName']").val());
  var url ="/api/issues/"+$("input[name='projectName']").val()
$.ajax({url:url ,
        method: "POST",
        data
        success: function(result){
        alert(result);
    }});

});

});
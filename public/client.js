$(function(){
$("#issueSubmit").on("click",function(){

  console.log($("#pname").val());
  var url= "api/issu";
$.ajax({url:url ,
        method: "POST",
        data:{asd:"asdaaasdsd"},
        success: function(result){
        alert(result);
    }});

});

});
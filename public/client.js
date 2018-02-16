$(function(){
$("#issueSubmit").on("click",function(){

$.ajax({url: "/api/issues/"+$(""), success: function(result){
        $("#div1").html(result);
    }});

});

});
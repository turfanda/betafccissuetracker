$(function() {
   var ResultDiv = $("<div>").attr("id","resultDiv");
    $("#issueSubmit").on("click", function(e) {
          e.preventDefault();
        var url = "api/issues/" + $("#pname").val();
        $.post(url, $('#issueCreateForm').serialize(), function(data) {
            console.log(data);
        });

    });

    $("#projectSubmit").on("click", function(e) {
      e.preventDefault();
      $.ajax({
            type:"post",
            url:"api/",
            data:$('#projectCreateForm').serialize(),
            success: function(response){
              console.log(response);  
            }
        });

    });

    $("#getAllProjectSubmit").on("click", function(e) {
        e.preventDefault();
            $.ajax({
            type:"get",
            url:"/api/getallproject/",
            success: function(response){
              var ResultDiv = $("<div>");
              response.map(function(value,index){
              ResultDiv.append($("<div>").css({border:"1px solid black"}).append($("<span>").text(value.project_name)).append($("<span>").text(value._id)));
              })
              $(".resultDiv").append(ResultDiv);
            }
        });

    });

});

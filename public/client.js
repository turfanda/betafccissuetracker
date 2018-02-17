$(function() {
    $("#issueSubmit").on("click", function(e) {
          e.preventDefault();
        var url = "api/issues/" + $("#pname").val();
        $.post(url, $('#issueCreateForm').serialize(), function(data) {
            console.log(data);
           $("input").val("");
        });

    });

    $("#projectSubmit").on("click", function(e) {
      e.preventDefault();
      $.ajax({
            type:"post",
            url:"api/",
            data:$('#projectCreateForm').serialize(),
            success: function(response){
              $("input").val("");
               $(".resultDiv").empty();
              $(".resultDiv").append($("<span>").text(response));
            }
        });

    });

    $("#getAllProjectSubmit").on("click", function(e) {
        e.preventDefault();
            $.ajax({
            type:"get",
            url:"/api/getallproject/",
            success: function(response){
              console.log(response);
              $(".resultDiv").empty();
              var ResultDiv = $("<div>");
              response.map(function(value,index){
              ResultDiv.append($("<div>").css({border:"1px solid black"}).append($("<span>").text(value.project_name)).append($("<span>").text(value._id)));
              })
              $(".resultDiv").append(ResultDiv);
            }
        });

    });

});

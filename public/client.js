$(function() {
  
      $("#projectCreateForm").submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "api/",
            data: $('#projectCreateForm').serialize(),
            success: function(response) {
                $("input").val("");
                $(".resultDiv").empty();
                $(".resultDiv").append($("<span>").text(response));
            },
            error: function(err) {
                $(".resultDiv").empty();
                $(".resultDiv").append(err.responseText);
            }
        });

    });

    $("#getAllProjectSubmit").on("click",function(e) {
        e.preventDefault();
        $.ajax({
            type: "get",
            url: "/api/getallproject/",
            success: function(response) {
                console.log(response);
                $(".resultDiv").empty();
                var ResultDiv = $("<div>");
                response.map(function(value, index) {
                    ResultDiv.append($("<div>").addClass("infoDiv").append($("<p>").text("Project Name :"+value.project_name)).append($("<p>").text("Project Id :"+value._id)));
                })
                $(".resultDiv").append(ResultDiv);
            },
            error: function(err) {
                $(".resultDiv").empty();
                $(".resultDiv").append(err.responseText);
            }
        });

    });
  
    $("#issueCreateForm").submit(function(e) {
        e.preventDefault();
        var url = "api/issues/" + $("#pname").val();
        $.post(url, $('#issueCreateForm').serialize(), function(data) {
            console.log(data);
            $("input").val("");
        });
    });
      $("#issueGetForm").submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "get",
            url: "/api/issues/"+$("#issueGetForm").children().eq(0).val(),
            success: function(response) {
                console.log(response);
                $(".resultDiv").empty();
                var ResultDiv = $("<div>");
                response.map(function(value, index) {
                    ResultDiv.append($("<div>").css({
                        border: "1px solid black"
                    }).append($("<span>").text(value.project_name)).append($("<span>").text(value._id)));
                })
                $(".resultDiv").append(ResultDiv);
            },
            error: function(err) {
                $(".resultDiv").empty();
                $(".resultDiv").append(err.responseText);
            }
        });

    });


    $("#issueUpdateForm").submit(function(e) {
        e.preventDefault();
        var url = "api/issues/" + $(this).children().val();;
        $.ajax({
            type: "put",
            url: url,
            data: $('#issueUpdateForm').serialize(),
            success: function(response) {
                $("input").val("");
                $(".resultDiv").empty();
                $(".resultDiv").append($("<span>").text(response));
            },
            error: function(err) {
                $(".resultDiv").empty();
                $(".resultDiv").append(err.responseText);
            }
        });



    });
      $("#issueDeleteForm").submit(function(e) {
        e.preventDefault();
        var url = "api/issues/" + $(this).prevAll().eq(1).val();
        $.ajax({
            type: "delete",
            url: url,
            data: $('#issueDeleteForm').serialize(),
            success: function(response) {
                $("input").val("");
                $(".resultDiv").empty();
                $(".resultDiv").append($("<span>").text(response));
            },
            error: function(err) {
                $(".resultDiv").empty();
                $(".resultDiv").append(err.responseText);
            }
        });
    });




});
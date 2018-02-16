$(function() {
    $("#issueSubmit").on("click", function() {
        var url = "api/issues/" + $("#pname").val();
        $.post(url, $('#issueCreateForm').serialize(), function(data) {
            console.log(data);
        });

    });

    $("#projectSubmit").on("click", function() {
      $.ajax({
            type:"post",
            url:"api/",
            data:$('#projectCreateForm').serialize(),
            success: function(response){
              console.log(1);
              console.log(response);  
            }
        });

    });

    $("#getAllProjectSubmit").on("click", function() {
        $.get("api/", $('#projectCreateForm').serialize(), function(data) {
            console.log(data);
        });

    });

});

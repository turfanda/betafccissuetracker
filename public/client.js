$(function() {
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
              console.log(1);
              console.log(response);  
            }
        });

    });

    $("#getAllProjectSubmit").on("click", function(e) {
        e.preventDefault();
        $.get("api/", $('#projectCreateForm').serialize(), function(data) {
            console.log(data);
        });

    });

});

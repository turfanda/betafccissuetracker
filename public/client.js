$(function() {
    $("#issueSubmit").on("click", function() {
        var url = "api/issues/" + $("#pname").val();
        $.post(url, $('#issueCreateForm').serialize(), function(data) {
            console.log(data);
        });

    });

    $("#projectSubmit").on("click", function() {
        $.post("api/", $('#projectCreateForm').serialize(), function(data) {
          console.log(1);
            console.log(data);
        });

    });

    $("#getAllProjectSubmit").on("click", function() {
        $.get("api/", $('#projectCreateForm').serialize(), function(data) {
            console.log(data);
        });

    });

});

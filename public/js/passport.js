console.log("passport is working");

$(document).on("click", "#submitbutton", function () {
    alert("tried to log in");

    var username = $("#user").val().trim();
    var password = $("#pass").val().trim();

    var data = {
        username: username,
        password: password
    };
    alert(data);
    $.post("/login", data)
    alert("successful log in attempt");

})
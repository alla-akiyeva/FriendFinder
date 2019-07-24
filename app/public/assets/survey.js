$("#submit").on("click", function(event) {
    event.preventDefault();

    var userInfo = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            $("#q1").val(), 
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    }

    $.post("/api/friends", userInfo)
    .then(function(data) {
        console.log(data);
        console.log(data.name)
    })

});
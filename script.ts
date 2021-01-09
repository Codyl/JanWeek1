console.log("running");
$(document).ready(function() {
    $("#reflective").click(function() {
        $("#exampleText").removeClass();
        $("#exampleText").addClass("reflect");
    });
    $("#show").click(function() {
        $("#exampleText").removeClass();
        $("#exampleText").addClass("show");
    });
    $("#jump").click(function() {
        $("#exampleText").removeClass();
        $("#exampleText").addClass("reflect");
    });
    $("#draw").click(function() {
        $("#exampleText").removeClass();
        $("#exampleText").addClass("draw");
    });
});

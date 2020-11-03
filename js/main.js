document.getElementById("myVideo").volume = 0.2;
var vid = document.getElementById("myVideo");
$("#continueButton").click(function () {
$("#intro").fadeOut(2500);
setTimeout(function(){
$("#main").fadeIn(9000);
vid.play();vid
        }, 500)
});
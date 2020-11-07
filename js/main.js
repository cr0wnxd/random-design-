document.getElementById("myVideo").volume = 0.1;
var vid = document.getElementById("myVideo");
$("pre").click(function () {
$("#intro").fadeOut(2500);
setTimeout(function(){
$("#main").fadeIn(3000);
vid.play();vid
        }, 500)
});

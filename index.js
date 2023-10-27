var allButtons = document.querySelectorAll("button");
allButtons[0].addEventListener("click",bassDrum);
allButtons[1].addEventListener("click",crashCymbal);
allButtons[2].addEventListener("click",rideCymbal);
allButtons[3].addEventListener("click",mediumTom);
allButtons[4].addEventListener("click",smallTom);
allButtons[5].addEventListener("click",floorTom);
allButtons[6].addEventListener("click",snare);

function bassDrum() {
    var drum = new Audio("music/bass drum.mp3");
    drum.play();
}
function crashCymbal() {
    var drum = new Audio("music/crash cymbal.mp3");
    drum.play();
}
function rideCymbal() {
    var drum = new Audio("music/ride cymbal.mp3");
    drum.play();
}
function mediumTom() {
    var drum = new Audio("music/medium tom.mp3");
    drum.play();
}
function smallTom() {
    var drum = new Audio("music/small tom.mp3");
    drum.play();
}
function floorTom() {
    var drum = new Audio("music/floor tom.mp3");
    drum.play();
}
function snare() {
    var drum = new Audio("music/snare.mp3");
    drum.play();
}
document.addEventListener("keypress",function(e) {
    if (e.key == "w") {
        bassDrum();
    }else if (e.key == "a") {
        crashCymbal();
    }else if (e.key == "s") {
        rideCymbal();
    }else if (e.key == "d") {
        mediumTom();
    }else if (e.key == "j") {
        smallTom();
    }else if (e.key == "k") {
        floorTom();
    }else if (e.key == "l") {
        snare();
    }
});
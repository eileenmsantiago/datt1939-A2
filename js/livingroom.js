var cardImg = document.getElementById("card-img");

cardImg.onmouseover = function () {
    cardImg.src = "images/card-zoom.png";
}
cardImg.onmouseout = function () {
    cardImg.src = "images/card-closeup.png";
}
cardImg.onclick = function () {
    createCookie('card', true);
}

var atariImg = document.getElementById("atari_onclick");
atariImg.onclick = function () {
    if (atariImg.src.includes("images/atari_onclick.gif")) {
        atariImg.src = "images/atari.gif";
    } else {
        atariImg.src = "images/atari_onclick.gif";
    }
}

var radio = document.getElementById("radio-dial");
var rotate = 0;
radio.onclick = function () {
    rotate += 1880; //something random
    radio.style.transform = "rotate(" + rotate + "deg)";
    createCookie('radio', true);


    //wait 1.2seconds before navigating to radio-close page
    setTimeout(function() {
        window.location = 'radio-close.html';
    }, 1200);
}


// check all the cookies for the 5 items.
var completedCount = 0;

if(getCookie('tv')) {
    document.getElementById("tv").src = "images/tv_onclick.gif";
    completedCount++;
}

if(getCookie('calendar')) {
    document.getElementById("cal-img").src = "images/calendar.png";
    completedCount++;
}

if(getCookie('atari')) {
    completedCount++;
}

if(getCookie('card')) {
    completedCount++;
}

if(getCookie('radio')) {
    completedCount++;
}

// Show exit if all 5 complete
if(completedCount == 5) {
    document.getElementById('exit').style.display = 'block';
}
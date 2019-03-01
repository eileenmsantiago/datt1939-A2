var calImg = document.getElementById("cal-img");

if(getCookie('calendar')) {
    calImg.src = "images/calendar.png";
}

calImg.onclick = function () {
    if (calImg.src.includes("images/calendar.png")) {
        calImg.src = "images/calendar_onclick.png";
    } else {
        calImg.src = "images/calendar.png";
    }
    createCookie('calendar', true);
}
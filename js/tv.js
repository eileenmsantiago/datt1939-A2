var tvArray = [
    "https://www.youtube-nocookie.com/embed/ePPJaC0h1RQ?wmode=transparent&controls=0&autoplay=1",
    "https://www.youtube-nocookie.com/embed/dduvx-dEySY?wmode=transparent&controls=0&autoplay=1",
    "https://www.youtube-nocookie.com/embed/_-qZv1IsEpQ?wmode=transparent&controls=0&autoplay=1",
    "https://www.youtube-nocookie.com/embed/-usbQDfTIqE?wmode=transparent&controls=0&autoplay=1"
];

function randomGenerate(roof) {
    return Math.floor(Math.random()*(roof + 1))
}

window.onload = function(){
    var myFrame = document.getElementById('myFrame');
    var tvEl = document.getElementById('tv');

    tvEl.onclick = function() {
        myFrame.src = tvArray[randomGenerate(3)]
    }
    
    myFrame.src = tvArray[randomGenerate(3)];
    
    createCookie('tv', true);
}


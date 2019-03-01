window.onload = function () {
    removeCookie('firstname');
    removeCookie('card');
    removeCookie('calendar');
    removeCookie('atari');
    removeCookie('tv');
    removeCookie('radio');    
    
    var player = prompt('Alright. Time to visit the Nostalgia Room. Your goal is to explore the room and look for 5 objects you used to play with when you were 6 years old. Got it?! Please enter your name then hit Enter.  ');


    document.getElementById('title').style.display = 'block';
    createCookie('firstname', player)
    
}
var state = 0;
var sound1 = new Audio();
sound1.src = "./audio/radio-1.mp3";
var sound2 = new Audio();
sound2.src = "./audio/radio-2.mp3";
var sound3 = new Audio();
sound3.src = "./audio/radio-3.mp3";
function changeButton(button){
	var button1 = document.getElementById('button1');
	var button2 = document.getElementById('button2');
	var button3 = document.getElementById('button3');
	button1.style.zIndex = 1;
	button2.style.zIndex = 1;
	button3.style.zIndex = 1;
	button4.style.zIndex = 1;
	switch(button){
		case 1:
			button2.style.zIndex = 2;
			break;
		case 2:
			button3.style.zIndex = 2;
			break;
		case 3:
			button4.style.zIndex = 2;
			break;
		case 4:
			button1.style.zIndex = 2;
			break;
		default:
			break;
	}
}

var playingSong = 0;
var audioOne = new Audio();
    audioOne.src = "./audio/radio-1.mp3";
var audioTwo = new Audio();
    audioTwo.src = "./audio/radio-1.mp3";
var audioThree = new Audio();
    audioThree.src = "./audio/radio-1.mp3";

function buttonOnClick(){
		if(playingSong === 2){
				audioTwo.pause();
		}else if(playingSong === 3){
				audioThree.pause();
		}
		playingSong = 1;
		audioOne.play()
	}
function buttonTwoClick(){
		if(playingSong === 1){
				audioOne.pause();
		}else if(playingSong === 3){
				audioTwo.pause();
		}
		playingSong = 2;
		audioThree.play()
	}
function buttonThreeClick(){
		if(playingSong === 1){
				audioOne.pause();
		}else if(playingSong === 2){
				audioTwo.pause();
		}
		playingSong = 3;
		audioThree.play()
	}

createCookie('radio', true);
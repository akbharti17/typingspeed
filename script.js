const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
var timer=[0,0,0,0];
var interval;
var tRun=false;

function addZero(time){
	if(time<=9){
		time='0'+time;
	}
	return time;
}

function runTimer(){
	var currentTime=addZero(timer[0])+" : "+addZero(timer[1])+" : "+addZero(timer[2]);
	theTimer.innerHTML=currentTime;
	timer[3]++;
	timer[0]=Math.floor((timer[3]/100)/60);
	timer[1]=Math.floor(((timer[3]/100))-(timer[0]*60));
	timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
}

function spellCheck(){
	var textEnter=testArea.value;
	console.log(textEnter.length);
	console.log(originText);
	var orText=originText.substring(0,textEnter.length);

	if(textEnter==originText){
		clearInterval(interval);
		testWrapper.style.borderColor="#00cc00";
		s = textEnter;
		s = s.replace(/(^\s*)|(\s*$)/gi,"");
		s = s.replace(/[ ]{2,}/gi," ");
		s = s.replace(/\n /,"\n");
		console.log(s.split(' ').length);
		document.getElementById("wordcount").innerHTML ="Word Counts: "+s.split(' ').length;
	}else if(textEnter==orText){
		testWrapper.style.borderColor="#7300e6";
	}else{
		testWrapper.style.borderColor="#cc3300";
	}
}

function start(){
   var textEnterlength=testArea.value.length;
   console.log(textEnterlength);
   if(textEnterlength===0 && !tRun){
   	tRun=true;
   	interval=setInterval(runTimer,10);
   }
}

function reset(){
	console.log("reset");
	clearInterval(interval);
	interval=null;
	tRun=false;
	timer=[0,0,0,0];
	testArea.value="";
	theTimer.innerHTML="00:00:00";
	testWrapper.style.borderColor="grey";
	document.getElementById("wordcount").innerHTML="Word Counts:";
}


testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);
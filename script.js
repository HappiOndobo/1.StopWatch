// variables hoisting
let startEl = document.getElementById("start-el")
let stopEl = document.getElementById("stop-el")
let resetEl = document.getElementById("reset-el")
let secondEl = document.getElementById("seconds")
let millisecondEl = document.getElementById("milliseconds")

let sec= 0;
let millisec=0;
let timeInterval;

const timer=()=>{
    millisec++;

    if(millisec < 9){
        millisecondEl.innerHTML = "0" + millisec;
    }

    if(millisec > 9){
        millisecondEl.innerHTML = millisec;
    }

    if(millisec > 99){
        sec++;
        secondEl.innerHTML = "0"+sec;
        millisec=0;
        millisecondEl.innerHTML="0"+0;
    }

    if(sec>9){
        seconds.innerHTML=sec;
    }
}




//functions

startEl.addEventListener('click', function(){
    timeInterval=setInterval(timer,10);
})

stopEl.addEventListener('click', function(){
    clearInterval(timeInterval);
    console.log("functioning its okay")
})

resetEl.addEventListener('click', function(){
    clearInterval(timeInterval);
    sec="00";
    millisec="00"
    secondEl.innerHTML=sec;
    millisecondEl.innerHTML=millisec;
})








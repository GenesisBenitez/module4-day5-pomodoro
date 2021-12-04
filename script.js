var start = document.getElementById("start");
var restart = document.getElementById("restart");

var hours = document.getElementById("hour");
var minutes = document.getElementById("mins");
var seconds = document.getElementById("secs");

var startTimer = null;

function timer(){
    if(hours.value == 0 && minutes.value == 0 && seconds.value == 0){
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
    }else if(seconds.value != 0){
        seconds.value--;
    }else if(minutes.value != 0 && seconds.value == 0){
        seconds.value = 59;
        minutes.value--;
    }else if(hours.value !=0 && minutes.value == 0){
        minutes.value = 60;
        hours.value--;
    }
    return;
}

function stopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click', function(){
    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        }, 1000);
    }
    startInterval()
})

restart.addEventListener('click', function(){
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    stopTimer()
})
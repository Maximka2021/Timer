let minText = document.querySelector('.minutes');
let secText = document.querySelector('.seconds');
let btnStart = document.getElementById('btn-start');
let btnStop = document.getElementById('btn-stop');
let btnReset = document.getElementById('btn-reset');

var min = 0;
var sec = 0;
var start;

btnStart.addEventListener('click', function(){
    start = setInterval(function(){
        sec++;
        sec < 10 ? secText.textContent = `:0${sec}` : secText.textContent = `:${sec}`;
        if(sec === 59){
            sec = -1;
            min++;
        }
        min < 10 ? minText.textContent = `0${min}` : minText.textContent = `${min}`;
    }, 1000)
})

btnStop.addEventListener('click', function(){
    clearInterval(start)
})

btnReset.addEventListener('click', function(){
    sec = 0;
    min = 0;
    minText.textContent = `00`;
    secText.textContent = `:00`;
    clearInterval(start);
})


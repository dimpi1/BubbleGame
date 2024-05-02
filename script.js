var timer = 60;
var score = 0;
var hitrn = 0;

function getNewHit(){
    hitrn  = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer> 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
},1000);
}

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

function makeBubble(){
    var clutter = "";

for(let i = 1; i <= 160; i++){
    var randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent); 
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();
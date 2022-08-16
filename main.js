const p1ScoreDisplay = document.getElementById('p1Score');
const p2ScoreDispaly =document.getElementById('p2Score');
const wScoreDisplay = document.querySelector('span');
const inputScore = document.getElementById('input-score');

const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn');

let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let gameOver = false;

p1Btn.addEventListener('click',function(){
   
    if(!gameOver){
        p1Score++;
        winner(p1Score,winingScore)
    }
    p1ScoreDisplay.innerText = p1Score; 
})

p2Btn.addEventListener('click',function(){
    if(!gameOver){
        p2Score++;
     winner(p2Score,winingScore)
    }
    p2ScoreDispaly.innerText = p2Score; 
})

function winner(oldScore,winningScore){
    if(oldScore === winningScore){
        gameOver = true
         p1Btn.setAttribute('disabled','disabled');
         p2Btn.setAttribute('disabled','disabled');
    }
}

resetBtn.addEventListener('click',function(){
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1ScoreDisplay.innerText =0;
    p2ScoreDispaly.innerText = 0;
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
})


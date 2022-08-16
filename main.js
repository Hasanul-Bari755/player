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

p1Btn.addEventListener('click',function(){
    p1Score++;
    if(p1Score === winingScore){
        p1Btn.setAttribute('disabled','disabled');
        p2Btn.setAttribute('disabled','disabled');
    }
    p1ScoreDisplay.innerText = p1Score; 
})

p2Btn.addEventListener('click',function(){
    p2Score++;
    if(p2Score === winingScore){
        p1Btn.setAttribute('disabled','disabled');
        p2Btn.setAttribute('disabled','disabled');
    }
    p2ScoreDispaly.innerText = p2Score; 
})


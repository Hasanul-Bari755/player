const p1ScoreDisplay = document.getElementById('p1Score');
const p2ScoreDispaly =document.getElementById('p2Score');
const wScoreDisplay = document.querySelector('p span');
const inputScore = document.getElementById('input-score');

const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn');

let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let gameOver = false;

function winner(oldScore,winningScore){
    if(oldScore === winningScore){
        if(p1Score === winningScore){
            p1ScoreDisplay.classList.add("winner");
        }
        else{
            p2ScoreDispaly.classList.add("winner");
        }
        gameOver = true
         p1Btn.setAttribute('disabled','disabled');
         p2Btn.setAttribute('disabled','disabled');
    }
}

function reset(){
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    p1ScoreDisplay.innerText =0;
    p2ScoreDispaly.innerText = 0;
    p1ScoreDisplay.classList.remove("winner")
    p2ScoreDispaly.classList.remove("winner")
    p1Btn.removeAttribute('disabled');
    p2Btn.removeAttribute('disabled');
}

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



inputScore.addEventListener('change',function(){
  winingScore = parseFloat(inputScore.value);
  wScoreDisplay.textContent = inputScore.value;
  inputScore.value = "";
  reset()
})



resetBtn.addEventListener('click',reset)



const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winingScoreSelect = document.querySelector('#playto');


let winningScore = 3;
let isGameOver = false;


function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        player.display.textContent = player.score;
    }
    if(player.score === winningScore){
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        isGameOver = true;
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
}


p1.button.addEventListener('click', function(){
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function(){
    updateScores(p2, p1);
})

resetButton.addEventListener('click', reset)

winingScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

function reset(){
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
}


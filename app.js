const btnOpenModale = document.getElementById('open-modale')
const modale = document.getElementById('modale')

const btnReset = document.getElementById('reset-score')
const scorePlayer = document.getElementById('player-score')
const scoreComp = document.getElementById('comp-score')

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const compChoice = document.getElementById('comp-choice')
const result = document.getElementById('result')
const compImage = document.getElementById('comp-image')
const playerImage = document.getElementById('player-image')

const signs = ['rock', 'paper', 'scissors']
let compSign = ''
let playerSign = ''
let playerScoreRounds = 0
let compScoreRounds = 0

btnOpenModale.addEventListener('click', (event) => {
    event.preventDefault()
    toggleModale()
});

modale.addEventListener('click', (event) => {
    event.preventDefault()
    toggleModale()
});

btnReset.addEventListener('click', (event) => {
    event.preventDefault()
    resetScore()
})

rock.addEventListener('click', (event) => {
    event.preventDefault()
    makeMove('rock')
});

paper.addEventListener('click', (event) => {
    event.preventDefault()
    makeMove('paper')
});

scissors.addEventListener('click', (event) => {
    event.preventDefault()
    makeMove('scissors')
});

function toggleModale() {
    modale.classList.toggle('hidden')
}

function resetScore() {
    scorePlayer.innerText = '0'
    scoreComp.innerText = '0'
    compScoreRounds = 0
    playerScoreRounds = 0
    resetImages()
}

function resetImages() {
    playerImage.style.backgroundImage = ``
    compImage.style.backgroundImage = ``
    result.innerHTML = ``
    compChoice.innerHTML = ``
}

function makeMove(sign) {
    resetImages()
    playerSign = sign
    playerImage.style.backgroundImage = `url(images/${sign}.png)`
    compMove()
    getResult()
}

function compMove() {
    compSign = signs[Math.floor(Math.random()*3)]
    compChoice.innerHTML = `Computer chose ${compSign}`
    compImage.style.backgroundImage = `url(images/${compSign}.png)`
}

function getResult() {
    console.log(playerSign)
    console.log(compSign)
    if (playerSign === compSign) {
        result.innerHTML = `It's tie!`
    } else if ((playerSign === 'paper' && compSign === 'rock')||
        (playerSign === 'rock' && compSign === 'scissors')||
        (playerSign === 'scissors' && compSign === 'paper')) {
            result.innerHTML = `You won!`
            playerScoreRounds = playerScoreRounds + 1
            scorePlayer.innerHTML = playerScoreRounds 
        }
    else {
        result.innerHTML = `You lose!`
        compScoreRounds = compScoreRounds + 1
        scoreComp.innerHTML = compScoreRounds
    }
}
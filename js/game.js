'use strict'

const randomNum = function() {
    return Math.trunc(Math.random() * 20 + 1)
}

let secretNum = randomNum()
let score = 20

console.log(secretNum)
document.querySelector('.check').addEventListener('click',
    function() {
        const guess = Number(document.querySelector('.guess').value);

        if (!guess) {
            message('No Number!')
        } else if (guess == secretNum) {
            message('🎉Correct Number!')
            document.querySelector('.number').textContent = guess;
            displayHighScore(score);

        } else if (guess === secretNum + 1 || guess === secretNum - 1) {
            message('🤏Very Close')
            score--
            displayScore(score)
        } else if (guess !== secretNum) {
            if (score > 1) {
                message(guess > secretNum ? '📈Too High' : '👇Too Low')
                score--
                displayScore(score)
            } else {
                message('😭You Lost the Game!')
                displayScore(0)
            }
        }
    })

document.querySelector('.again').addEventListener('click', function() {
    secretNum = randomNum()
    displayScore(20)
    displayHighScore(0)
    message('Start guess Now')
    guessInput('')
})

const message = function(classes) {
    document.querySelector('.message').textContent = classes
}
const displayScore = function(score) {
    document.querySelector('.score').textContent = score
}

const displayHighScore = function(highScore) {
    document.querySelector('.high-score').textContent = highScore
}

const guessInput = function(guess) {
    document.querySelector('.guess').value = guess
}
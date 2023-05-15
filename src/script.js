const body = document.querySelector('body');
const checkBtn = document.getElementById('checkBtn');
const againBtn = document.getElementById('againBtn');
const userGuess = document.getElementById('userGuess');
const compGuess = document.getElementById('compGuess');
const score = document.getElementById('score');
const highscore = document.getElementById('highscore');
const message = document.getElementById('message');

const calcRandomNumber = () =>{
    let number = Math.floor(Math.random() * 21);
    console.log(number);
    return number;
}
const checkUserAnswer = (compVal) =>{
    let convUserGuess = +userGuess.value;

    if(compVal === convUserGuess){
        body.style.background = 'green';
        compGuess.innerHTML = compVal;
        message.innerHTML = 'correct number!'
        highscore.innerHTML = score.innerHTML;

    } else {
        body.style.background = '#333';
        score.innerHTML = Number(score.innerHTML) - 1;
        (compVal > convUserGuess) ? message.innerHTML = 'too low!' : message.innerHTML = 'too high!'
    }
}
const geussAgain = () => {
    body.style.background = '#333';
    compGuess.innerHTML = '?';
    userGuess.value = '';
    message.innerHTML = 'start guessing...';
    score.innerHTML = '20';
}

let compVal = calcRandomNumber();
checkBtn.addEventListener('click', () => {
    checkUserAnswer(compVal);
})
againBtn.addEventListener('click', () => {
    geussAgain();
})
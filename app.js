let randomNumber = parseInt(Math.random()*100  + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultpart')
const p = document.createElement('p');
let pevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const guess = parseInt( userInput.value);
       //console.log(guess);
       validateGuess(guess);
      
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please Enter a Valid Number!");
    }else if(guess < 1){
       alert("Please Enter a  Number More Than 1!");
    }
    else if(guess > 100){
       alert("Please Enter a Number Less than 100!");
    }else{
        pevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You gussed it Right`);
    endGame();
  } else if (guess < randomNumber){
   displayMessage('Number is TOO Low!');
  }else if (guess > randomNumber){
    displayMessage('Number is TOO High!');
  }
}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber(e) = parseInt(Math.random() * 100 + 1);
        pevGuess = []
       
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
   }






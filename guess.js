let letters = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
let wins = 0;
let losses = 0;
let guessLeft = 9;
let guessed = [];

function getRandomInteger(min,max) {
    let rand = Math.random();
    let rand_integer = rand * (max - min) + min;
    rand_integer = Math.round(rand_integer);
    return rand_integer;
}


function userInput(e) {
    let userChoise = e.key;
    let compChoise = letters[getRandomInteger(0,letters.length-1)];
    if(userChoise == compChoise){
        document.getElementById('wins').innerHTML = "Wins : " + " " + ++wins;
        guessed = [];
    }
    else {
        guessed.push(compChoise);
        document.getElementById('guess-left').innerHTML = "Guessleft : " + guessLeft --;
        document.getElementById('guessed').innerHTML = "Guessed : " + " " + guessed;
        if(guessLeft == 0){
            guessed = [];
            guessLeft = 9;
            document.getElementById('losses').innerHTML = "Losses " + " " + ++losses;
        }
    }
}

window.onkeypress = userInput;
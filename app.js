let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") { return "Rock"; }   
    if (letter == "p") { return "Paper"; }
    return "Scissors";
}


getComputerChoice();

function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    })
    
    
    paper_div.addEventListener('click', function() {
        game('p');
    })
    
    scissors_div.addEventListener('click', function() {
        game('s');
    })
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!🔥`;
    
    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add('green-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('green-glow')
    }, 400);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lost...`;

    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add('red-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow')
    }, 400);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} equal ${convertToWord(userChoice)}${smallUserWord}. You tie...`;

    const userChoice_div = document.getElementById(userChoice)
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('gray-glow')
    }, 400);

}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log(userChoice + "   " + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;        
    }
}

main();
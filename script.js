function computerPlay() {
    // Choose a random option and return it 
    let options = ["rock", "paper", "scissors"]

    let randomIndex = Math.floor(Math.random() * options.length) // It returns an index from the options array
    let choosedOption = options[randomIndex] // choose the option in the randomIndex

    return choosedOption
}

function playRound(playerSelection, computerSelection) {
    // Returns the winner of the round

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    
    // If player chooses rock
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") { // If he wins
            return "You win! Rock beats Scissors"
            
        } else if (computerSelection === "paper") { // If he loses  
            return "You lose! Paper beats Rock"

        } else if (computerSelection === playerSelection) {
            return "It's a tie!"
        }
    }

    // If player chooses paper
    else if (playerSelection === "paper") {
        
        if (computerSelection === "rock") { // If he wins  
            return "You win! Paper beats Rock"

        } else if (computerSelection === "scissors") { // If he loses
            return "You lose! Scissors beats Paper"

        } else if (computerSelection === playerSelection) {
            return "It's a tie!"
        }
    }

    // If player chooses scissors
    else if (playerSelection === "scissors") {
        
        if (computerSelection === "paper") { // If he wins  
            return "You win! Scissors beats Paper"

        } else if (computerSelection === "rock") { // If he loses
            return "You lose! Rock beats Scissors"

        } else if (computerSelection === playerSelection) {
            return "It's a tie!"
        }
    }

    else {
        return alert("Invalid answer! Try again")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let player = prompt("Choose rock, paper or scissors")
        let cpu = computerPlay()
        console.log(playRound(player, cpu))
    }
}

game()
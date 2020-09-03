function computerPlay() {
    // Choose a random option and return it 
    let options = ["rock", "paper", "scissors"]

    let randomIndex = Math.floor(Math.random() * options.length) // It returns an index from the options array
    let choosedOption = options[randomIndex] // choose the option in the randomIndex

    return choosedOption
}

console.log(computerPlay())


function playRound(playerSelection, computerSelection) {
    // Return the winner of the round


    conditions = {
        "rock": [""]
    }
    // If player chooses rock


    // If player chooses paper

    // If player chooses scissors
}
const rulesBtn = document.getElementById("rules-btn")
const htmlBody = document.getElementById("body");
const mainEl = document.getElementById("main")
const html = document.getElementById("html");
const rulesDisplay = document.getElementById('rules-display')
const initialBackground = html.style.background;
const screenSize = window.matchMedia("(min-width: 1024px)")


// to get rules buttton to display rules for screen sizes
    rulesBtn.addEventListener("click", function(){
        if (screenSize.matches) { // If media query matches
            rulesDisplay.style.display = "grid"
        } else{
            htmlBody.style.background = "none";
            mainEl.style.display = "none"
            html.style.background = "none"
            rulesDisplay.style.display = "flex"
            rulesBtn.style.display = "none"
        } 
    
            const closeBtn = document.getElementById('close-btn');
            closeBtn.addEventListener("click", function(){
            html.style.background = initialBackground;
            mainEl.style.display = "block"
            rulesDisplay.style.display = "none"
            rulesBtn.style.display = "block"
       
    })

})

const choicesArr = ["rock", "paper", "scissors", "spock", "lizard"]
let choicesContainer = document.getElementById("choices-container")
let playerScore = document.getElementById("player-score")
const btns = document.querySelectorAll('.background-img')
let playerChoice = ""
let computerChoice = generateComputerChoice()
let fromLocalStorage = (localStorage.getItem("Score")) 
 
if (localStorage.getItem("Score")){
    fromLocalStorage = JSON.parse(localStorage.getItem("Score")) 
} else{
    fromLocalStorage = JSON.parse("0")
}
let playerScorePoint = fromLocalStorage

playerScore.textContent =  fromLocalStorage 

const playAgainBtn = document.getElementById("play-again-btn")
const playAgain = document.getElementById("play-again")


function updateScoreBoard(){
    if(result==="WIN"){
        playerScorePoint ++
        playerScore.textContent = playerScorePoint
        document.getElementById("win-or-lose").textContent = "YOU WIN" 
    } else if(result==="LOSE") {
        if(playerScorePoint > 0){
            playerScorePoint --
            playerScore.textContent = playerScorePoint
            document.getElementById("win-or-lose").textContent = "YOU LOSE"
        } else{
            document.getElementById("win-or-lose").textContent = "YOU LOSE"
        }
   
    } else {
        playerScorePoint === playerScorePoint
           playerScore.textContent = playerScorePoint
           document.getElementById("win-or-lose").textContent = "TIE"
           } 
    playAgainBtn.style.display = "block"
    localStorage.setItem("Score", JSON.stringify(playerScorePoint))
}



// setting game rules to determine winner
function generateComputerChoice(){
     const randomIndex = Math.floor(Math.random() * choicesArr.length);
     return choicesArr[randomIndex];
}

// To determine winner
    let result = ""

function determineWinnner(playerChoice, computerChoice){

    if (playerChoice === computerChoice){
        result = "TIE"
    } else if((playerChoice=== "rock" && (computerChoice===  "scissors" || computerChoice === "lizard"))||
      (playerChoice=== "paper" && (computerChoice=== "rock" || computerChoice === "spock")) ||
      (playerChoice=== "scissors" && (computerChoice=== "paper" || computerChoice === "lizard")) ||
      (playerChoice=== "lizard" && (computerChoice=== "spock" || computerChoice === "paper")) ||
      (playerChoice=== "spock" && (computerChoice=== "rock" || computerChoice === "scissors"))){
          result = "WIN"
      }   else {
        result = "LOSE"
      } 
      return result
    }


// updating score


const myDiv = document.getElementById("my-div")
const comDiv = document.getElementById("com-div")
const playerText =  document.getElementById("player-text")
const comText = document.getElementById("com-text")
const computersCompleteDiv = document.getElementById("computers-complete-div")
const playersCompleteDiv = document.getElementById("players-complete-div")
const comsBtn = document.getElementById("coms-btn")
const playersBtn = document.getElementById("players-btn")
    // To show the results when player selects a button
const displayContainer = document.getElementById("display-container")
    function display(){
        determineWinnner(playerChoice, computerChoice)
        choicesContainer.style.display = "none"
        displayContainer.style.display = "flex"
        if(screenSize.matches){
            rulesBtn.style.marginTop = "8.5em"
            }
        playersBtn.classList.add(`${playerChoice}`)
        setTimeout(function(){
            comsBtn.classList.remove("space")
            comsBtn.classList.add(`${computerChoice}`)
        }, 1500)
            if (result === "WIN"){
                setTimeout(function(){
                    myDiv.classList.add("shadow")
                    playerText.classList.add("player-text")
                    comText.classList.add("margin")
                    computersCompleteDiv.classList.add("margin-left")
                    playersCompleteDiv.classList.add("shadow1")
                    if (screenSize.matches){
                        playersBtn.classList.add("margin-btn")
                    }
                    updateScoreBoard()
                }, 2000)
                    
            } else if(result === "LOSE"){
                setTimeout(function(){
                    comDiv.classList.add("shadow")
                    playerText.classList.add("margin")
                    comText.classList.add("player-text")
                    playersCompleteDiv.classList.add("margin-right")
                    computersCompleteDiv.classList.add("shadow2")
                    if (screenSize.matches){
                        comsBtn.classList.add("margin-btn")
                    }
                    updateScoreBoard()
                }, 2000)

            } else if(result==="TIE"){
                setTimeout(function(){
                 updateScoreBoard()
                 if(screenSize.matches){
                    playersCompleteDiv.classList.add("margin-right"); 
                    computersCompleteDiv.classList.add("margin-left")
                     rulesBtn.classList.add("margin-top")
                 }else{
                     playersCompleteDiv.classList.add("margin-left"); 
                     computersCompleteDiv.classList.add("margin-right")
                 }
                 
            }, 2000)
       
    }
}


btns.forEach(btn => {

   btn.addEventListener('click', event => {
       playerChoice = event.target.value 
       computerChoice = generateComputerChoice()
        display()
       
       
   })

})

function resetGame(){
           displayContainer.style.display = "none"
           choicesContainer.style.display = "flex"            
            document.getElementById("win-or-lose").innerHTML = " "
            if (choicesContainer.style.display==="flex"){
                playAgainBtn.style.display = "none"
            }
            
            playersBtn.classList.remove(`${playerChoice}`)
            comsBtn.classList.remove(`${computerChoice}`)
            comsBtn.classList.add("space")
            
            if(screenSize.matches){
                myDiv.classList.remove("shadow")
                comDiv.classList.remove("shadow")
                playerText.classList.remove("player-text")
                playerText.classList.remove("margin")
                comText.classList.remove("margin")  
                comText.classList.remove("player-text")  
                computersCompleteDiv.classList.remove("margin-left")
                playersCompleteDiv.classList.remove("shadow1")
                playersCompleteDiv.classList.remove("margin-right")
                computersCompleteDiv.classList.remove("shadow2")
                comsBtn.classList.remove("margin-btn")
                playersBtn.classList.remove("margin-btn")
                rulesBtn.style.marginTop = "-20em"
         
            } else if(!screenSize.matches){
                myDiv.classList.remove("shadow")
                playerText.classList.remove("player-text")
                playerText.classList.remove("margin")
                computersCompleteDiv.classList.remove("margin-left")
                playersCompleteDiv.classList.remove("shadow1")
                comDiv.classList.remove("shadow")
                comText.classList.remove("margin")
                comText.classList.remove("player-text")
                playersCompleteDiv.classList.remove("margin-right"); 
                computersCompleteDiv.classList.remove("shadow2")
                playersCompleteDiv.classList.remove("margin-left"); 
                computersCompleteDiv.classList.remove("margin-right")
            }
            
}

playAgainBtn.addEventListener("click", function(){
    resetGame()
    
              
})






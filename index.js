
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
        } 
    
            const closeBtn = document.getElementById('close-btn');
            closeBtn.addEventListener("click", function(){
            html.style.background = initialBackground;
            mainEl.style.display = "block"
            rulesDisplay.style.display = "none"
    
       
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
    rulesBtn.style.marginTop = "56px"
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



    // To show the results when player selects a button
const displayContainer = document.getElementById("display-container")

if (screenSize.matches) { // If media query matches
    function display(){
    determineWinnner(playerChoice, computerChoice)
    choicesContainer.style.display = "none"
    
    displayContainer.innerHTML = `
        <div id="players-div"> 
          <p class="text" id="text-one">YOU PICKED</p>
          <div id="my-div"> 
             <button id="${playerChoice}"></button>
          </div>
        </div>
        <div id="space">
            <p class="text">THE HOUSE PICKED</p>
            <button></button>
        </div>
    `
    const myDiv = document.getElementById("my-div")
    const one = document.getElementById("text-one")
    setTimeout(function(){
        determineWinnner(playerChoice, computerChoice)
        if(result==="WIN"){
            myDiv.classList.add("shadow")
            document.getElementById(`${playerChoice}`).style.marginTop = "-8px"
            document.getElementById("space").style.display = "none"
            displayContainer.innerHTML += `
            <div id="com-div">
                <p class="text" id="text-two">THE HOUSE PICKED</p>
                <div id="your-div">
                    <button id="${computerChoice}"></button>
                </div>
            </div>
            `
            document.getElementById(`${computerChoice}`).style.marginTop = "-8px"
            document.getElementById("text-one").style.marginBottom = "-50px" 
            document.getElementById("text-two").style.paddingBottom = "50px" 
            document.getElementById("com-div").style.marginTop = "-134px"
            displayContainer.marginLeft = "-50px"   
            rulesBtn.style.marginBottom = "-2em"       
        } else if(result==="LOSE"){
            document.getElementById(`${playerChoice}`).style.marginTop = "-8px"
            document.getElementById("space").style.display = "none"
            displayContainer.innerHTML += `
            <div id="com-div">
                <p class="text" id="text-three">THE HOUSE PICKED</p>
                <div id="your-div">
                    <button id="${computerChoice}"></button>
                </div>
            </div>
            `
            document.getElementById("your-div").classList.add("shadow")
            document.getElementById(`${computerChoice}`).style.marginTop = "-8px"
            document.getElementById("text-three").style.marginBottom = "-50px" 
            document.getElementById("text-one").style.paddingBottom = "50px" 
            document.getElementById("players-div").style.marginTop = "-134px"
            displayContainer.marginRight= "-50px" 
            rulesBtn.style.marginBottom = "-2em"
        }else{
            document.getElementById("space").style.display = "none"
            displayContainer.innerHTML += `
            <div id="com-div">
                <p class="text">THE HOUSE PICKED</p>
                <div id="your-div">
                    <button id="${computerChoice}"></button>
                </div>
            </div>
            `
            rulesBtn.style.marginBottom = "-4em"
        }
        
        
        setTimeout(function(){
            updateScoreBoard()
             determineWinnner(playerChoice, computerChoice)
            if (result==="WIN"){
                // playAgain.style.marginLeft = "150px"
                playAgain.style.marginTop = "-400px"
                document.getElementById("players-div").style.marginLeft = "-120px"
            } else if(result==="LOSE"){
                document.getElementById("com-div").style.marginRight = "-120px"
                playAgain.style.marginTop = "-400px"
            }else{
                playAgain.style.marginTop = "-300px"
            }
            rulesBtn.style.marginTop = "8.5em"
            displayContainer.style.gap = "352px"
            rulesBtn.style.marginRight = "2em"
            
        }, 2500)
            

    },3000)
    }
        } else{   //phone layout
        function display(){
        determineWinnner(playerChoice, computerChoice)
        choicesContainer.style.display = "none"
        displayContainer.innerHTML = `
        <div id="players-div">
            <div id= "my-div">
                <button id="${playerChoice}"></button>
            </div>
            <p class="text" id="text-one">YOU PICKED</p>
        </div> 

        <div id="space">
            <button></button>
            <p class="text">THE HOUSE PICKED</p>
        </div>
      
    `
    const myDiv = document.getElementById("my-div")
    const one = document.getElementById("text-one")
        
    setTimeout(function(){
        determineWinnner(playerChoice, computerChoice)
        if (result==="WIN"){
         myDiv.classList.add("shadow")
        one.style.marginTop = "-40px"
        one.style.marginLeft = "-50px"
        displayContainer.style.gap = "0"
        displayContainer.style.paddingTop = "40px"
        myDiv.style.marginLeft = "-50px" 
        
        document.getElementById("space").style.display = "none"
        displayContainer.innerHTML += `
        <div id="com-div">
            <div id="your-div">
            <button id="${computerChoice}"></button>
            </div>
            <p class="text" id="three">THE HOUSE PICKED</p>
        </div>
        `
        document.getElementById("com-div").style.marginTop ="60px"
  
        } else if(result==="LOSE"){
        document.getElementById("space").style.display = "none"
        displayContainer.innerHTML += `
        <div id="com-div">
            <div id="your-div">
            <button id="${computerChoice}"></button>
            </div>
            <p class="text" id="three">THE HOUSE PICKED</p>
        </div>
        ` 
        document.getElementById("your-div").classList.add("shadow")
        document.getElementById("three").style.marginTop = "-40px"
        document.getElementById("three").style.marginLeft = "50px"
        displayContainer.style.gap = "0"
        displayContainer.style.paddingTop = "40px"
        document.getElementById("your-div").style.marginRight = "-50px"
        document.getElementById("players-div").style.marginTop ="60px"
        } else{
            document.getElementById("space").style.display = "none"
        displayContainer.innerHTML += `
        <div id="com-div">
            <div id="your-div">
            <button id="${computerChoice}"></button>
            </div>
            <p class="text" id="three">THE HOUSE PICKED</p>
        </div>
        ` 
        }
        
        // document.getElementById(`${playerChoice}`).style
        
        setTimeout(function(){
            updateScoreBoard()
            if(determineWinnner(playerChoice, computerChoice)&&result==="LOSE"){
            }
            
        }, 2500)
    },3000)
    
    
        } 
        
    }



btns.forEach(btn => {

   btn.addEventListener('click', event => {
    //    play()
       playerChoice = event.target.value 
       computerChoice = generateComputerChoice()
       if (display() && reult === "WIN"){
           document.getElementById(`${playerChoice}`).classList.add("shadow")
       }
        
       
   })

})

function resetGame(){
           choicesContainer.style.display = "flex"
            displayContainer.innerHTML = " "
            document.getElementById("win-or-lose").innerHTML = " "
            
            if (choicesContainer.style.display==="flex"){
                playAgainBtn.style.display = "none"
                displayContainer.style.gap = "71px"
            }
            if (screenSize.matches){
                
                rulesBtn.style.margin = "30em 2em 2em auto"
            } else {
                rulesBtn.style.marginTop = "150px"
                
            }
}

playAgainBtn.addEventListener("click", function(){
    resetGame()
               
})

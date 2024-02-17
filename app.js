let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Computer-score");

const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};
const drawGame = () => {
    console.log("Game Is Draw.");
    msg.innerText = "OOOHO, SO CLOSE. The Game Is Draw!"
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `HURREEYY! Congratulation You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose")
        msg.innerText = `OOOPS, You lose. Try Again! ${compChoice} beats your ${userChoice}`;  
        msg.style.backgroundColor = "red";
        //msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("userChoice = " ,userChoice);
    //generating computer choice
    const compChoice = genCompChoice();
    console.log("compChoice", compChoice);
    
    
    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , papar
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            // rock , scissors
            userWin = compChoice === "scissors" ? false: true;
        }else{
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }


};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});

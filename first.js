let userScore= 0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genComChoice = () =>{
    const options=["rock","paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =() =>{
    msg.innerText = "Draw..😑";
    msg.style.backgroundColor="rgb(204, 113, 253)";
}

const showWinner = (userwin,userChoice,comChoice) => {
    if(userwin) {
        userScore++;
        userScorePara.innerText =userScore;
        msg.innerText = `You win! 🤩 ${userChoice} Beats ${comChoice}`;
        msg.style.backgroundColor="rgb(83, 249, 169)";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You Loss! 😒${comChoice}  Beats  ${userChoice}`;
        msg.style.backgroundColor="rgb(249, 112, 142)";
    }
}

const playGame =(userChoice) =>{
    const comChoice = genComChoice();

    if(userChoice === comChoice){
        drawGame();
    }else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = comChoice === "Scissors"? true: false;
        }else if (userChoice === "Scissors"){
            userwin = comChoice === "paper"? true:false;
        } else{
            userwin = comChoice === "rock"? true:false;
        }
        showWinner(userwin,userChoice,comChoice);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice );
    })
});
let userScore=0;
let comScore=0;

//access the all the choice
const choice=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');//winning board

const UserScorePara=document.querySelector('#user-score');
const CompScorePara=document.querySelector('#comp-score');

const genCompChoice=()=>{
    //rock,paper,scissor
    const option=["rock","paper","scissor"];
     const ranIdx=Math.floor(Math.random()*3);//genrate random choice integer
     return option[ranIdx];// computer choice random choices of index
}

const showWiner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;//user is win then Score is increase
        UserScorePara.innerText=userScore++;

        console.log('you win');
        //msg.innerText=`you win! ${userChoice} breats ${compChoice}`;
        msg.innerText='you win!';
        msg.style.backgroundColor ='green';
       
    }else{
        console.log('you lost');
        //msg.innerText=`you lost! ${compChoice} breats ${userChoice}`;
        msg.innerText='you lose!';
        msg.style.backgroundColor ='red';
        //computer score
        comScore++;
        CompScorePara.innerText=comScore;
    }
};

const Gamedrow=()=>{
   console.log('game was grow');
   msg.innerText='geme was grow play again';
   msg.style.backgroundColor =' #081b31';
}

//GAME PLAYING CODE
const playgeme=(userChoice)=>{
    console.log('user choice =' ,userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log('computer choice =',compChoice);

    if(userChoice==compChoice){
        // game are drow 
        Gamedrow();
    }else{
        let UserWin=true;
        //rock, paper, scissor
        if(userChoice=="rock"){//comp Choice paper ,Scissor because com choice rock then game is grow.
         UserWin=compChoice=='paper'?false:true;

        }else if(userChoice=='paper'){//rock,scissor
            UserWin=compChoice=='scissor'?true:false;

        }else{//rock ,paper
            UserWin=compChoice=='rock'?true:false;
        }
        showWiner(UserWin);
    }
}

choice.forEach((choice)=>{
console.log(choice);
choice.addEventListener("click",()=>{
    //here accessing the user Choice ,clicking of user
    const userChoice=choice.getAttribute('id');
     //call the playing function
    playgeme(userChoice);
    //call the playing function
});
})
let input=document.getElementById('input');
let btn=document.getElementById('btn');
let wrng=document.querySelector('.wrng');
let guesses=document.getElementById('guess');

let answer=Math.floor(Math.random()*100+1);
console.log(answer);
let numguess=0;

btn.addEventListener('click',()=>{
    guessNumber();
});

input.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
        event.preventDefault();
        guessNumber();
    }
});

guessNumber=()=>{
    if(input.value<1 || input.value>100|| isNaN(input.value)){
        wrng.innerHTML="Enter Number between 1 to 100."

    }
    else{
        numguess++;
        guesses.innerHTML="No. of guess: " + numguess;
        if(input.value>answer){
            wrng.innerHTML="You guessed too high!"
            input.value="";

        }
        else if(input.value<answer){
            wrng.innerHTML="You guessed too low."
            input.value="";
        }
        else{
            wrng.innerHTML="Congratulations! You guessed the correct number in " + numguess +" guesses!";

            btn.disabled=true;
            setTimeout(()=>{
                resetGame();
            },5000)
        }
    }

}

resetGame=()=>{
    numguess=0;
    answer=Math.floor(Math.random()*100)+1;
    input.value="";
    wrng.innerHTML="";
    btn.disabled=false;
    guesses.innerHTML='No. of Guess: 0';
}
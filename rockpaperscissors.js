const computerchoicedisplay =document.getElementById('computerchoice')
const userchoicedisplay =document.getElementById('userchoice')
const resultdisplay = document.getElementById('result')
const possible = document.querySelectorAll('button')
const computerpic = document.getElementById('computerpic')
const rock1 = document.createElement("img");
rock1.src = "pics/rock.png";
const paper1 = document.createElement("img")
paper1.src = "pics/paper.png";
const scissors1 = document.createElement("img")
scissors1.src = "pics/scissors.png";
const greyrock1 = document.createElement("img");
greyrock1.src = "pics/greyrock.png";
const greypaper1 = document.createElement("img");
greypaper1.src = "pics/greypaper.png";
const greyscissors1 = document.createElement("img");
greyscissors1.src = "pics/greyscissors.png";
const rock = document.createElement("img");
rock.src = "pics/rock.png";
const paper = document.createElement("img")
paper.src = "pics/paper.png";
const scissors = document.createElement("img")
scissors.src = "pics/scissors.png";
const greyrock = document.createElement("img");
greyrock.src = "pics/greyrock.png";
const greypaper = document.createElement("img");
greypaper.src = "pics/greypaper.png";
const greyscissors = document.createElement("img");
greyscissors.src = "pics/greyscissors.png";

let userchoice
let computerchoice
let result

const wincountdisplay =document.getElementById('wincount')
const drawcountdisplay =document.getElementById('drawcount')
const losecountdisplay =document.getElementById('losecount')
let moneydisplay =document.getElementById('money')
let money = 0
let wincount = 0
let drawcount = 0
let losecount= 0

function pickme(pick){
//possible.forEach(possible => possible.addEventListener('click', (e) =>{
userchoice = pick
//userchoicedisplay.innerHTML = userchoice
if(userchoice === 'rock'){
    //document.getElementById('comppics').()
    document.getElementById('rockbbt').replaceChildren()
    document.getElementById('rockbbt').appendChild(rock1)
    document.getElementById('paperbbt').replaceChildren()
    document.getElementById('paperbbt').appendChild(greypaper1)
    document.getElementById("scissorsbbt").replaceChildren()
    document.getElementById("scissorsbbt").appendChild(greyscissors1)
}
else if(userchoice === 'paper'){
    //document.getElementById('comppics').()
    document.getElementById('rockbbt').replaceChildren()
    document.getElementById('rockbbt').appendChild(greyrock1)
    document.getElementById('paperbbt').replaceChildren()
    document.getElementById('paperbbt').appendChild(paper1)
    document.getElementById("scissorsbbt").replaceChildren()
    document.getElementById("scissorsbbt").appendChild(greyscissors1)

}
else if(userchoice === 'scissors'){
    //document.getElementById('comppics').replaceChildren()
    document.getElementById('rockbbt').replaceChildren()
    document.getElementById('rockbbt').appendChild(greyrock1)
    document.getElementById('paperbbt').replaceChildren()
    document.getElementById('paperbbt').appendChild(greypaper1)
    document.getElementById("scissorsbbt").replaceChildren()
    document.getElementById("scissorsbbt").appendChild(scissors1)
}

gencompchoice()
getresult()
counter()
//}))
}

function gencompchoice(){
    const randomnumber =Math.floor(Math.random() * possible.length)
   if(randomnumber === 0){ computerchoice ='rock'}
   else if(randomnumber === 1){ computerchoice='paper'}
   else if(randomnumber === 2){ computerchoice='scissors'}
   computerchoicedisplay.innerHTML = computerchoice
    if(computerchoice === 'rock'){
        //document.getElementById('comppics').()
        document.getElementById('comprock').replaceChildren()
        document.getElementById('comprock').appendChild(rock)
        document.getElementById('comppaper').replaceChildren()
        document.getElementById('comppaper').appendChild(greypaper)
        document.getElementById("compscissors").replaceChildren()
        document.getElementById("compscissors").appendChild(greyscissors)
    }
    else if(computerchoice === 'paper'){
        //document.getElementById('comppics').()
        document.getElementById('comprock').replaceChildren()
        document.getElementById('comprock').appendChild(greyrock)
        document.getElementById('comppaper').replaceChildren()
        document.getElementById('comppaper').appendChild(paper)
        document.getElementById("compscissors").replaceChildren()
        document.getElementById("compscissors").appendChild(greyscissors)

    }
    else if(computerchoice === 'scissors'){
        //document.getElementById('comppics').replaceChildren()
        document.getElementById('comprock').replaceChildren()
        document.getElementById('comprock').appendChild(greyrock)
        document.getElementById('comppaper').replaceChildren()
        document.getElementById('comppaper').appendChild(greypaper)
        document.getElementById("compscissors").replaceChildren()
        document.getElementById("compscissors").appendChild(scissors)
    }
}//model the user buttons to look and act like the computer buttons so it feels more fair
function getresult(){
    if (computerchoice === userchoice){ result ='a draw!'}
    if (computerchoice === 'rock' && userchoice === 'paper'){result= 'you win!'}
    if (computerchoice === 'rock' && userchoice === 'scissors'){result='failed'}
    if (computerchoice === 'paper' && userchoice === 'rock'){result= 'failed'}
    if (computerchoice === 'paper' && userchoice === 'scissors'){result='you win!'}
    if (computerchoice === 'scissors' && userchoice === 'rock'){result='you win!'}
    if (computerchoice === 'scissors' && userchoice === 'paper'){result='failed'}
    resultdisplay.innerHTML= result
}
function counter(){
if (result === 'you win!'){wincount= wincount+= 1; wincountdisplay.innerHTML=wincount}
if (result === 'a draw!'){drawcount= drawcount += 1; drawcountdisplay.innerHTML=drawcount}
if (result === 'failed'){losecount= losecount +=1; losecountdisplay.innerHTML=losecount}
if (result === 'you win!'){money= money+= 5}
if (result === 'a draw!'){money= money+=1}
if (result === 'failed'){money-= 4}
moneydisplay.innerHTML=money
} /* omg i wanna cry i can't believe it works <3333 */


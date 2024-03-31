const computerchoicedisplay =document.getElementById('computerchoice')
const userchoicedisplay =document.getElementById('userchoice')
const resultdisplay = document.getElementById('result')
const possible = document.querySelectorAll('button')
const computerpic = document.getElementById('computerpic')
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
/* freehanding */
const wincountdisplay =document.getElementById('wincount')
const drawcountdisplay =document.getElementById('drawcount')
const losecountdisplay =document.getElementById('losecount')
let moneydisplay =document.getElementById('money')
let money = 0
let wincount = 0
let drawcount = 0
let losecount= 0

possible.forEach(possible => possible.addEventListener('click', (e) =>{
userchoice = e.target.id
userchoicedisplay.innerHTML = userchoice
gencompchoice()
getresult()
counter()
}))

function gencompchoice(){
    const randomnumber =Math.floor(Math.random() * possible.length)
   if(randomnumber === 0){ computerchoice ='rock'}
   if(randomnumber === 1){ computerchoice='paper'}
   if(randomnumber === 2){ computerchoice='scissors'}
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
}
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


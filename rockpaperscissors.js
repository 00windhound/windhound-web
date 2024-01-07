const computerchoicedisplay =document.getElementById('computerchoice')
const userchoicedisplay =document.getElementById('userchoice')
const resultdisplay = document.getElementById('result')
const possible = document.querySelectorAll('button')
let userchoice
let computerchoice
let result
/* freehanding */
const wincountdisplay =document.getElementById('wincount')
const drawcountdisplay =document.getElementById('drawcount')
const losecountdisplay =document.getElementById('losecount')
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
} /* omg i wanna cry i can't believe it works <3333 */

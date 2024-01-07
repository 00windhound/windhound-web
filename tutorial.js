const computerchoicedisplay =document.getElementById('computerchoice')
const userchoicedisplay =document.getElementById('userchoice')
const resultdisplay = document.getElementById('result')
const possible = document.querySelectorAll('button')
let userchoice
let computerchoice
let result

possible.forEach(possible => possible.addEventListener('click', (e) =>{
userchoice = e.target.id
userchoicedisplay.innerHTML = userchoice
gencompchoice()
getresult()
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
resultdisplay.innerHTML= result
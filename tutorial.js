const computerchoicedisplay =document.getElementById('computerchoice')
const userchoicedisplay =document.getElementById('userchoice')
const result = document.getElementById('result')
const possible = document.querySelectorAll('button')
let userchoice
let computerchoice

possible.forEach(possible => possible.addEventListener('click', (e) =>{
userchoice = e.target.id
userchoicedisplay.innerHTML = userchoice
gencompchoice()
}))

function gencompchoice(){
    const randomnumber =Math.floor(Math.random() * possible.length)
   if(randomnumber === 0){ computerchoice ='rock'}
   if(randomnumber === 1){ computerchoice='paper'}
   if(randomnumber === 2){ computerchoice='scissors'}
   computerchoicedisplay.innerHTML = computerchoice
}
function getresult(){}
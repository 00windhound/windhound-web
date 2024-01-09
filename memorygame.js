const cardarray=[
    {name:'elephant', img:'pics/lilelephant.png'},
    {name:'giraffe', img:'pics/lilgiraffe.png'},
    {name:'flamingo', img:'pics/lilflamingo.png'},
    {name:'bunny', img:'pics/lilbunny.png'},
    {name:'lion', img:'pics/lillion.png'},
    {name:'snake', img:'pics/lilsnake.png'},
    {name:'elephant', img:'pics/lilelephant.png'},
    {name:'giraffe', img:'pics/lilgiraffe.png'},
    {name:'flamingo', img:'pics/lilflamingo.png'},
    {name:'bunny', img:'pics/lilbunny.png'},
    {name:'lion', img:'pics/lillion.png'},
    {name:'snake', img:'pics/lilsnake.png'}]

    cardarray.sort(() => 0.5 - Math.random())
    let j = 0

   const grid = document.querySelector('#grid')
   const resultdisplay = document.querySelector('#result')
    let cardschosen =[]
    let cardschosenids =[]
    const cardswon = []


   function makeboard (){
    for(let i=0; i< 12; i++){
      const card =  document.createElement('img')
      card.setAttribute('src','pics/lilcard.png' )
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipcard)
    grid.appendChild(card) }
   }
   makeboard()


 function flipcard(){
   const cardid = this.getAttribute('data-id')
   cardschosen.push(cardarray[cardid].name)
   cardschosenids.push(cardid)
   this.setAttribute('src', cardarray[cardid].img)
   if(cardschosen.length === 2){
    setTimeout(checkmatch, 500) }
   }


   function checkmatch(){
  const cards =  document.querySelectorAll('img')
    const optiononeid = cardschosenids[0]
    const optiontwoid = cardschosenids[1]

if(optiononeid == optiontwoid){alert('dont click the same card')
cards[optiononeid].setAttribute('src', 'pics/lilcard.png')
cards[optiontwoid].setAttribute('src', 'pics/lilcard.png')}

   if (cardschosen[0] == cardschosen[1]){
    cards[optiononeid].setAttribute('src', 'pics/lilswoosh.png')
    cards[optiontwoid].setAttribute('src', 'pics/lilswoosh.png')
    cards[optiononeid].removeEventListener('click', flipcard)
    cards[optiontwoid].removeEventListener('click', flipcard)
    cardswon.push(cardschosen)
}
else{
    cards[optiononeid].setAttribute('src', 'pics/lilcard.png')
    cards[optiontwoid].setAttribute('src', 'pics/lilcard.png')
}
   cardschosen = []
   cardschosenids=[]
   resultdisplay.innerHTML = (j += 1)

   if(cardswon.length == cardarray.length/2){resultdisplay.innerHTML= j +' you win'}
   } /* i want to make somewhere that i can display this */


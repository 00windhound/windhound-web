const cardarray=[
    {name:'elephant', img:'pics/lilelephant.png'},
    {name:'giraffe', img:'pics.lilgiraffe.png'},
    {name:'flamingo', img:'pics/lilflamingo.png'},
    {name:'bunny', img:'pics/lilbunny.png'},
    {name:'lion', img:'pics/lillion.png'},
    {name:'snake', img:'pics/lilsnake.png'},
    {name:'elephant', img:'pics/lilelephant.png'},
    {name:'giraffe', img:'pics.lilgiraffe.png'},
    {name:'flamingo', img:'pics/lilflamingo.png'},
    {name:'bunny', img:'pics/lilbunny.png'},
    {name:'lion', img:'pics/lillion.png'},
    {name:'snake', img:'pics/lilsnake.png'}]

    cardarray.sort(() => 0.5 - Math.random())

   const grid = document.querySelector('#grid')


   function makeboard (){
    for(let i=0; i< 12; i++){
      const card =  document.createElement('img')
      card.setAttribute('src','pics/lilcard.png' )
      card.setAttribute('data-id', i)
    grid.appendChild(card)
    }
   }
   makeboard()
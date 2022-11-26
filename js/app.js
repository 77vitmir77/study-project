const cards = [
   {price: '$14.00', title: 'Breakfast', img: './img/breakfast_1.png', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum excepturi esse'},

   {price: '$12.00',title: 'Lunch', img: './img/lunch_1.jpg', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum excepturi esse'},

   {price: '$28.00', title: 'Dinner', img: './img/dinner_1.jpg', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum excepturi esse'},

   {price: '$6.00', title: 'Shakes', img: './img/shakes_1.jpg', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum excepturi esse'},

   {price: '$14.00', title: 'Breakfast', img: './img/breakfast_2.png', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum excepturi esse'},

   {price: '$12.00',title: 'Lunch', img: './img/lunch_2.jpg', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum excepturi esse'},

   {price: '$28.00', title: 'Dinner', img: './img/dinner_2.jpg', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum excepturi esse'},

   {price: '$6.00', title: 'Shakes', img: './img/shakes_3.jpg', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nostrum excepturi esse'}
]
const content = document.querySelector('.content')
const buttons = document.querySelectorAll('li')
function classCard(card) {
   return `
      <div class="${'card ' + card.title}">
         <img src="${card.img}" alt="">
         <div class="card__body">
               <div class="card__top">
                  <span class="name">${card.title}</span>
                  <span class="prise">${card.price}</span>
               </div>
               <div class="discription__text">
                  <span>${card.discription}</span>
               </div>
         </div>  
      </div>
   `
}
function goToHtml(arr) {
   arr.forEach(card => {
      let html = classCard(card)
         content.insertAdjacentHTML('beforeend', html)
   })
}
goToHtml(cards)
buttons.forEach(button => button.addEventListener('click', () => {
   const category = button.dataset.btn
   let newCards = cards.filter(card => card.title === category)
   content.innerHTML = '' 
   if(category !== 'all') {
      goToHtml(newCards)
   } else {
      goToHtml(cards)
   }
}
))

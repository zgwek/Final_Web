const cards = [
{
    name: 'Chichen-Itza',
    img:'images/Chichen-Itza.png',
},
{
    name: 'Christ-Redeemer',
    img:'images/Christ-Redeemer.png',
},
{
    name: 'Colosseum',
    img:'images/Colosseum.png',
},
{
    name: 'Great-Wall',
    img:'images/Great-Wall.png',
},
{
    name: 'Machu-Picchu',
    img:'images/Machu-Picchu.png',
},
{
    name: 'Petra',
    img:'images/Petra.png',
},
{
    name: 'Taj-Mahal',
    img:'images/Taj-Mahal.png',
},
{
    name: 'Chichen-Itza',
    img:'images/Chichen-Fact.png',
},
{
    name: 'Christ-Redeemer',
    img:'images/Christ-Fact.png',
},
{
    name: 'Colosseum',
    img:'images/Col-Fact.png',
},
{
    name: 'Great-Wall',
    img:'images/China-Fact.png',
},
{
    name: 'Machu-Picchu',
    img:'images/Machu-Fact.png',
},
{
    name: 'Petra',
    img:'images/Petra-Fact.png',
},
{
    name: 'Taj-Mahal',
    img:'images/Taj-Fact.png',
},


]

cards.sort( () => 0.5 - Math.random())

const cardDisplay = document.querySelector('#grid')
const scoreDisplay = document.querySelector('#result')
let selectedCards = []
let matchedCardId = []
let matchedCards = []

console.log(cardDisplay)

function createBoard () {
    let data = 0;
    cards.forEach(element => {
       const card =  document.createElement('img')
       card.setAttribute('src','images/card-design.png')
       card.setAttribute('data-id',data)
       card.addEventListener('click',flip)
       cardDisplay.appendChild(card)
       data++;

    });
    
}

createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('#grid img')
    console.log("check")
    const firstPickId = matchedCardId[0];
    const secondPickId = matchedCardId[1];
    if (selectedCards[0] == selectedCards[1]){
    alert('Match!')
    //cards[firstPickId].setAttribute('src','images/blank.png')
    //cards[secondPickId].setAttribute('src','images/blank.png')
    cards[firstPickId].removeEventListener('click',flip)
    cards[secondPickId].removeEventListener('click',flip)
    matchedCards.push(selectedCards)
    } else {
        cards[firstPickId].setAttribute('src','images/card-design.png')
        cards[secondPickId].setAttribute('src','images/card-design.png')
        alert('sorry, try again')
    }
    scoreDisplay.innerHTML = matchedCards.length
    selectedCards = []
    matchedCardId = []
    //matchedCards.length = 7;
    if (matchedCards.length == cards.length/2){
        scoreDisplay.innerHTML = 'You WON'
        cardDisplay.replaceChildren();
        newGameButton()
    }
}

function flip(){
    const cardId = this.getAttribute('data-id')
    selectedCards.push(cards[cardId].name)
    matchedCardId.push(cardId)
    console.log(matchedCardId)
    //console.log('clicked',cardId)
    //console.log(selectedCard)
    this.setAttribute('src',cards[cardId].img)
    if (selectedCards.length === 2){
    setTimeout(checkMatch,100)
    }
    
}

function newGameButton() {
    const newButton = document.createElement("button")
    newButton.setAttribute("id", "tryAgain");
    const newContent = document.createTextNode("Play Again?")
    newButton.appendChild(newContent)
    document.body.appendChild(newButton)
    newButton.addEventListener('click',() => {    
        newGame()
        newButton.remove()  
   });
  }

  function newGame(){
    scoreDisplay.innerHTML = ''
    createBoard()
    matchedCards = []
  }
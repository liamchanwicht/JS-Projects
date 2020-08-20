const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard ='';

//pick a card until spade is drawn
while (currentCard !== 'spade'){
  //randomly indexing the card array, creating different results each run of the loop
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

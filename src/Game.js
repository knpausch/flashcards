const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(round) {
    this.currentRound = {};
    this.round = round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  createCards(){
    const cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer); 
    });    
    
    return cards;
  }

  putsCardsInDeck(cards){
    const deck = new Deck(cards);
    return deck;
  }

  newRound(deck){
    const round = new Round(deck);
    this.currentRound = round;


    return round;
  }

  start(){
    const cards = this.createCards();

    const deck = this.putsCardsInDeck(cards);

    const round = this.newRound(deck);

    this.printMessage(deck, round);

    this.printQuestion(round);
  }
}

module.exports = Game;
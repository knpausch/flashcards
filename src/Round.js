class Round {
    constructor(deck){
        this.deck = deck;
        this.currentCard = deck.cards[0];
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard(){
        return this.currentCard;
    }

    takeTurn(turn){
       this.turns++;
       let result = turn.evaluateGuess();
       if(result === false){
        this.incorrectGuesses.push(turn.card.id);
       }
       return turn.giveFeedback();
    }
}

module.exports = Round;
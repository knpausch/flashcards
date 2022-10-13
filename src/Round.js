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
       
       this.deck.cards.shift();
       this.currentCard = this.deck.cards[0];

       return turn.giveFeedback();
    }

    calculatePercentCorrect(){
        let incorrectAnswers = this.incorrectGuesses.length;
        let correctAnswers = this.turns - incorrectAnswers;
        let result = parseInt(((correctAnswers/this.turns)*100).toFixed(), 10);
        
        return result;
    }

    endRound(){
        const score = this.calculatePercentCorrect();
        return `** Round over! ** You answered ${score}% of the questions correctly!`;
    }
}

module.exports = Round;
class Turn {
    constructor(guess, card){
        this.guess = guess;
        this.card = card;
    }

    returnGuess(){
        return this.guess;
    }

    returnCard(){
        return this.card;
    }

    evaluateGuess(){
        if(this.guess === this.card.correctAnswer){
            return true;
        }
        else{
            return false;
        }
    }

    giveFeedback(){
        var result = this.evaluateGuess();
        if (result){
            return "correct!";
        }
        else if (!result){
            return "incorrect!";
        }
    }
}

module.exports = Turn;
class Card {
    constructor(index, question, answers, answer){
        this.index = index;
        this.question = question;
        this.answers = answers;
        this.correctAnswer = answer;
    }

}

module.exports = Card;
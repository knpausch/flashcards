class Deck {
    constructor(cards){
        //issues? Replace w/ this: this.cards = cards || [];
        this.cards = cards;
    }

    countCards(){
        return this.cards.length;
    }
}

module.exports = Deck;
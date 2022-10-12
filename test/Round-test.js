const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');


describe('Round', function() {
    it('should be a function', function() {
        expect(Round).to.be.a('function');
    });

    it('should initialize with a Deck object which contains array of Cards', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);

        expect(round.deck).to.be.a('object');
        expect(round.deck).to.deep.equal(deck);
    });
    
    it('should have property currentCard which is a Card object', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);

        expect(round.currentCard).to.deep.equal(cards[0]);
    });

    it('turns property should be 0 at start of Round', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);

        expect(round.turns).to.equal(0);
    });

    it('returnCurrentCard should return the current card being played', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);

        expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
    });

    it('incorrectGuesses should be an empty array at start of Round', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);

        expect(round.incorrectGuesses).to.deep.equal([]);
    });

    it('takeTurn should update turn count', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);
        const turn = new Turn("array", card1);

        round.takeTurn(turn);
        round.takeTurn(turn);

        expect(round.turns).to.equal(2);
    });

    it('takeTurn should evaluate guess and return "correct!" or "incorrect!"', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);
        const turn = new Turn("array", card1);

        expect(round.takeTurn(turn)).to.equal("incorrect!");
    });

    it('takeTurn should add index of card incorrecly answered in incorrectGuesses array', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);
        const turn1 = new Turn("array", card1);
        round.takeTurn(turn1);
        expect(round.incorrectGuesses).to.deep.equal([1]);

        const turn2 = new Turn("object", card1);
        round.takeTurn(turn2);
        expect(round.incorrectGuesses).to.deep.equal([1]);
    });
});
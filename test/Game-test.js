const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

describe('Game', function() {
    it('should have a currentRound property to track number of rounds', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);
        const game = new Game(round);
       
        expect(game.currentRound).to.equal(0);
    });

    it('start should be a function', function() {
        const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        const cards = [card1, card2, card3];
        const deck = new Deck(cards);
        const round = new Round(deck);
        const game = new Game(round);
       
        expect(game.start).to.be.a("function");
    });

    it('createsCards should create an array of Cards', function() {
        const testCard1 = {
            id: 1,
            question: 'What allows you to define a set of related information using key-value pairs?',
            answers: [ 'object', 'array', 'function' ],
            correctAnswer: 'object'
          };
        const testCard30 = {
            id: 30,
            question: 'What type of methods are functions that allow you to manipulate the value of a particular data type or class?',
            answers: [ 'prototype method', 'object', 'callback function' ],
            correctAnswer: 'prototype method'
          };
        const game = new Game();
        game.createCards();

        expect(game.createCards()[0]).to.deep.equal(testCard1);
        expect(game.createCards()[29]).to.deep.equal(testCard30);
    });

    it('putsCardsInDeck should initialize Deck with an array of Cards', function() {
        const testCard1 = {
            id: 1,
            question: 'What allows you to define a set of related information using key-value pairs?',
            answers: [ 'object', 'array', 'function' ],
            correctAnswer: 'object'
          };
        const testCard30 = {
            id: 30,
            question: 'What type of methods are functions that allow you to manipulate the value of a particular data type or class?',
            answers: [ 'prototype method', 'object', 'callback function' ],
            correctAnswer: 'prototype method'
          };
          const game = new Game();
          const cards = game.createCards();

          expect(game.putsCardsInDeck(cards).cards[0]).to.deep.equal(testCard1);
        expect(game.putsCardsInDeck(cards).cards[29]).to.deep.equal(testCard30);

    });

    it('newRound should increment currentRound', function() {
        const game = new Game();
        const cards = game.createCards();
        const deck = new Deck(cards);
        game.newRound(deck);

        expect(game.currentRound).to.equal(1);
    });

    it('newRound should initialize Round with Deck', function() {
        const testCard1 = {
            id: 1,
            question: 'What allows you to define a set of related information using key-value pairs?',
            answers: [ 'object', 'array', 'function' ],
            correctAnswer: 'object'
          };
        const game = new Game();
        const cards = game.createCards();
        const deck = new Deck(cards);
        const result = game.newRound(deck);

        expect(result.returnCurrentCard()).to.deep.equal(testCard1);
    });
});


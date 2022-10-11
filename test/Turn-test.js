const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('guess property should be a string', function() {
    const turn = new Turn('penguin');
    expect(turn.guess).to.be.a('string');
  });

  it('card property should be a card object', function() {
    const card = new Card(31, "What is the number on the Heinz Ketchup bottle?", ["40", "27", "57", "80"], "57");
    const turn = new Turn('penguin', card);
    expect(turn.card).to.be.a('object');
  });

  it('returnGuess should return guess', function() {
    const turn = new Turn('penguin');
    expect(turn.returnGuess()).to.equal('penguin');
  });

  it('returnCard should return a Card object', function() {
    const card = new Card();
    const turn = new Turn("penguin", card);
    const myCard = turn.returnCard();
    expect(myCard).to.be.a('object');
  });

  it('evaluateGuess should return a boolean if guess equals the correct answer', function() {
    const card = new Card(31, "What is the number on the Heinz Ketchup bottle?", ["40", "27", "57", "80"], "57");
    const firstTurn = new Turn("57", card);
    const answerResult1 = firstTurn.evaluateGuess();
    expect(answerResult1).to.equal(true);

    const secondTurn = new Turn("40", card);
    const answerResult2 = secondTurn.evaluateGuess();
    expect(answerResult2).to.equal(false);
  });

  it('giveFeedback should return "correct!" or "incorrect!" based on the outcome of their guess', function() {
    const card = new Card(31, "What is the number on the Heinz Ketchup bottle?", ["40", "27", "57", "80"], "57");
    const firstTurn = new Turn("57", card);
    const feedback1 = firstTurn.giveFeedback();
    expect(feedback1).to.equal("correct!");

    const secondTurn = new Turn("40", card);
    const feedback2 = secondTurn.giveFeedback();
    expect(feedback2).to.equal("incorrect!");
  });
});
module.exports = {
  generate : function ( n ) {
    var result = [];
    var randomResult = [];

    for (i = 0; i < n; i++) {
      result.push(i);
    }
    // gets n numbers in order and pushes it to the result array.

    while (result.length > 0) {
      var randomCard = (Math.floor( Math.random() * result.length));
      var pulledCard = result.splice(randomCard, 1);
      randomResult.push(pulledCard);
    // randomCard: picks a random card, pulledCard: grabs 1 card, 
    // randomResult.push pushes to the second array.
    }
    return randomResult;
  }
};
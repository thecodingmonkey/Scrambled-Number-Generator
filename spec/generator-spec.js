var generator  = require('../generator');

describe("generate", function() {
  it("generate() function must exist", function() {
    expect( generator.generate ).toBeDefined();
  });

  it("generate(1000) should return 1000 values", function() {
    expect( generator.generate(1000).length).toBe(1000);   
  });

  it("generate(1000) should return different arrays on multiple calls", function() {
    var firstCall = generator.generate(1000);
    var secondCall = generator.generate(1000);
    expect(firstCall).not.toEqual(secondCall);
  });

  it("should be a unique array", function() {
    var output = generator.generate(1000);
    output = output.sort();
    // output array and sorting it back into output: duplicates are side by side (n - 1).
    for (i=0; i < 1000 - 1; i++){
      expect(output[i]).not.toEqual(i+1);
    }
  });
});
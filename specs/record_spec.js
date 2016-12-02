var Record = require('../record');
var assert = require('assert');

describe( "record", function() {

  var record1;

  beforeEach(function() {
  record1 = new Record("Queen", "A Day At The Races", 9.99); 
  });

  it("record has artist", function() {
    assert.equal("Queen", record1.artist);
  });

  it("record has artist", function() {
    assert.equal("A Day At The Races", record1.album);
  });

  it("record has price", function() {
    assert.equal(9.99, record1.price);
  });

});
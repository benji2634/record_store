var Record = require('../record');
var RecordStore = require('../recordStore');
var assert = require('assert');

describe( "record", function() {

  var recordStore;
  var record1;
  var record2;
  var record3;

  beforeEach(function() {
    recordStore = new RecordStore("Smelly Cat", "New York", []);
    record1 = new Record("Queen", "A Day At The Races", 9.99); 
    record2 = new Record("Muse", "Origin Of Symmetry", 9.99); 
    record3 = new Record("Radiohead", "OK Computer", 9.99); 
  });

  it("record store has name", function() {
    assert.equal("Smelly Cat", recordStore.name);
  });

  it("record store has city", function() {
    assert.equal("New York", recordStore.city);
  });

  it("record store has starting balance", function() {
    assert.equal(2000, recordStore.balance);
  });

  it("record store inventory starts at 0", function() {
    assert.equal(0, recordStore.recordCount());
  });

  it("record store has records in inventory", function() {
    recordStore.addRecord(record1);
    assert.equal(1, recordStore.recordCount());
  });

  it("can list all records in store", function() {
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    console.log(recordStore.listRecords());
    var listExpected = "Artist: Queen - Album: A Day At The Races\nArtist: Muse - Album: Origin Of Symmetry\nArtist: Radiohead - Album: OK Computer";
    assert.equal(listExpected, recordStore.listRecords());
  });

});
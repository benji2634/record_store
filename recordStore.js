var RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 2000;
}

RecordStore.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },

  recordCount: function() {
    return this.inventory.length;
  }

};
module.exports = RecordStore;

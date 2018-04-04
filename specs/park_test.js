var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js')
var dinosaur1
var dinosaur2
var dinosaur3
var dinosaur4
var park

describe('dinosaur', function(){
  beforeEach(function(){
    dinosaur1 = new Dinosaur("raptor", 3);
    dinosaur2 = new Dinosaur("rex", 2);
    dinosaur3 = new Dinosaur("raptor", 1);
    dinosaur4 = new Dinosaur("bird", 3);
  })


  it('dino can have type', function(){
    assert.strictEqual(dinosaur1.type, "raptor");
  });

  it('dino can have number of offspring', function(){
    assert.strictEqual(dinosaur2.offspring, 2);
  });


});

describe('park', function(){
  beforeEach(function(){
    dinosaur1 = new Dinosaur("raptor", 3);
    dinosaur2 = new Dinosaur("rex", 2);
    dinosaur3 = new Dinosaur("raptor", 1);
    dinosaur4 = new Dinosaur("bird", 3);
    park =  new Park();
    this.enclosure = [];
    this.dinoKillList = []
  })

  it('enclosure start empty', function(){
    assert.strictEqual(this.enclosure.length, 0);
  })

  it('can add dino to enclosure', function(){
    park.addDino(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('can remove dinosaur from enclosure', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    assert.strictEqual(park.enclosure.length, 4)
    park.killDino(dinosaur4);
    assert.strictEqual(park.enclosure.length, 3)
  });

  it('can remove dinos of certain type from enclosure', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    assert.strictEqual(park.enclosure.length, 4)
    park.removeSpecificType("raptor")
    assert.strictEqual(park.enclosure.length, 2)
  });

  it('can remove dinos with offspring count > 2', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    assert.strictEqual(park.enclosure.length, 4)
    park.removeBigDinoLovers();
    assert.strictEqual(park.enclosure.length, 2)
  });

  it('total dinos after 1 year starting with 1 dino', function(){
    park.addDino(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1)
    park.calcTotalDino(dinosaur1);
    assert.strictEqual(park.enclosure.length, 4)
  })

  it('total dinos after 2 years starting with 1 dino', function(){
    park.addDino(dinosaur1);
    assert.strictEqual(park.enclosure.length, 1)
    park.calcTotalDino(dinosaur1);
    assert.strictEqual(park.enclosure.length, 4)
    park.yearTwoTotalDinos(park.enclosure.length);
    assert.strictEqual(park.enclosure.length, 16)
  })

});

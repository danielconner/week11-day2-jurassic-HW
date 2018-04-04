
var Park = function(){
  this.enclosure =[];
}

Park.prototype.addDino = function (Dino) {
  this.enclosure.push(Dino)
};

Park.prototype.killDino = function (Dino) {
  this.enclosure.pop(Dino);
};

Park.prototype.removeSpecificType = function (type) {
  let dinoKillList = []
  for(let dinos of this.enclosure){
    if(dinos.type == type){
      this.enclosure.pop(dinos);
    }
  //     for(let deadies of dinoKillList){
  //       dinoKillList.pop(deadies);
  //     }
  }
};

Park.prototype.removeBigDinoLovers = function () {
  for(dinos of this.enclosure){
    if(dinos.offspring > 2){
    }
    this.enclosure.pop(dinos);
  }
};

Park.prototype.calcTotalDino = function (dino) {
    this.enclosure.length += dino.offspring;
};

Park.prototype.yearTwoTotalDinos = function (dinos) {
  for(let dino in dinos){
    dinos += (dino + dino.offspring) * dinos
  }

};


module.exports = Park;

const threeDimension = require("./threeDimension");

class Beam extends threeDimension {
  constructor(length, width, height) {
    super("Beam");
    this.length = length;
    this.width = width;
    this.height = height;
  }
  
  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }
  calculateVolume() {
    super.calculateVolume();
    let volume = this.length * this.width * this.height;
    console.log("=============================")
    console.log(`This volume is ${volume} cm3 \n`);
  }

  calculateArea() {
    super.calculateArea();
    let area = (2*this.length*this.width) + (2*this.length*this.height) + (2*this.width*this.length);
    console.log("=============================")
    console.log(`This area is ${area} cm2 \n`);
  }

}

module.exports = Beam;
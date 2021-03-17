const threeDimension = require("./threeDimension");

class Cube extends threeDimension {
  constructor(length) {
    super("Cube");
    this.length = length;
  }

  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }

  calculateVolume() {
    super.calculateVolume();
    let volume = this.length ** 3;
    console.log("=============================")
    console.log(`This volume is ${volume} cm3 \n`);
  }

  calculateArea() {
    super.calculateArea();
    let area = 6 * this.length**2;
    console.log("=============================")
    console.log(`This area is ${area} cm2 \n`);
  }


}

module.exports = Cube;

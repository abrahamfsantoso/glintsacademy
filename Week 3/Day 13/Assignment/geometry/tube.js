const threeDimension = require("./threeDimension");

class Tube extends threeDimension {
  constructor(radius, height) {
    super("Tube");
    this.radius = radius;
    this.height = height;
  }

  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }

  calculateVolume() {
    super.calculateVolume();
    let circleArea = Math.PI * this.radius ** 2;
    let volume = circleArea * this.height;
    console.log("=============================")
    console.log(`This volume is ${volume} cm3 \n`);
  }

  calculateArea() {
    super.calculateArea();
    let sum = this.height + this.radius;
    let area = 2* Math.PI *this.radius* sum;
    console.log("=============================")
    console.log(`This area is ${area} cm2 \n`);
  }

}

module.exports = Tube;
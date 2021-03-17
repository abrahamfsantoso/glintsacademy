const threeDimension = require("./threeDimension");

class Cone extends threeDimension {
  constructor(radius, height) {
    super("Cone");
    this.radius = radius;
    this.height = height;
  }

  introduce(who) {
    super.introduce();
    console.log(`${who}, this is ${this.name} \n`);
  }
  calculateVolume() {
    super.calculateVolume();
    let volume = 0.333 * Math.PI * this.radius**2 *this.height;
    console.log("=============================")
    console.log(`This volume is ${volume} cm3 \n`);
  }

  calculateArea() {
    super.calculateArea();
    let slantHeight = Math.sqrt(this.radius**2 + this.height**2);
    let area = Math.PI*this.radius*(slantHeight+this.radius);
    console.log("=============================")
    console.log(`This area is ${area} cm2 \n`);
  }

}

module.exports = Cone;

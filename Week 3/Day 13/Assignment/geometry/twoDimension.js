const Geometry = require("./geometry");

class TwoDimension extends Geometry {
  constructor(name) {
    super(name, "2D");

    // Make abstract class
    if (this.constructor == TwoDimension) {
      throw new Error("Can not make object!");
    }
  }

  // Overridding method
  introduce() {
    super.introduce();
    console.log(`This is ${this.type}`);
  }

  calculateArea() {
    console.log(`${this.name} Area!`);
  }

  calculateCircumference() {
    console.log(`${this.name} Circumference!`);
  }
}

module.exports = TwoDimension;

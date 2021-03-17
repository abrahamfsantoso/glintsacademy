const Geometry = require("./geometry");

class threeDimension extends Geometry {
  constructor(name) {
    super(name, "3D");

    // Make abstract class
    if (this.constructor == threeDimension) {
      throw new Error("Can not make object!");
    }
  }

  // Overridding method
  introduce() {
    super.introduce();
    console.log(`This is ${this.type}`);
  }

  calculateVolume() {
    console.log(`${this.name} Volume`);
  }

  calculateArea() {
    console.log(`${this.name} Area`);
  }

}

module.exports = threeDimension;
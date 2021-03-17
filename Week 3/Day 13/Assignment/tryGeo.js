const { Square, Rectangle, Triangle, Cone, Cube, Tube, Beam} = require("./geometry");

// let trySquare = new Square(17);
// trySquare.calculateArea();

// let tryRectangle = new Rectangle(11, 12);
// tryRectangle.calculateArea();

// let tryTriangle = new Triangle(5, 10);
// tryTriangle.calculateArea();

let tryCube = new Cube(5);
tryCube.introduce("tryCube");
tryCube.calculateVolume();
tryCube.calculateArea();

let tryTube = new Tube(5,10);
tryTube.introduce("tryTube");
tryTube.calculateVolume();
tryTube.calculateArea();

let tryCone = new Cone(5,10);
tryCone.introduce("tryCone");
tryCone.calculateVolume();
tryCone.calculateArea();

let tryBeam = new Beam(5,7,10);
tryBeam.introduce("tryBeam");
tryBeam.calculateVolume();
tryBeam.calculateArea();
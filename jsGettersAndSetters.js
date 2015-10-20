//getters and settings done easy
var Circle = function(radius) {
  this._radius = radius;
};

Circle.prototype = {
  set radius(radius) {this._radius = radius;},
  get radius() { return this._radius;},
  get area() { return Math.PI * (this._radius * this._radius);}
};

var circ = new Circle(10);

//set prop
circ.radius = 15;

console.log("A circle with a radius of " + circ.radius + " has an area of " + circ.area.toFixed(2));
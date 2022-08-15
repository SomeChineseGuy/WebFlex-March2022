// function sayHello() {}
// const sayHello = () =>{}

// const Shape = class {

// }

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.width * this.length;
  }
}

const myRectangle = new Rectangle(10, 2);

console.log(myRectangle);
console.log(myRectangle.area());

class Prism extends Rectangle {
  constructor(length, width, height) {
    super(length, width);
    this.height = height;
  }

  volume() {
    return this.area() * this.length;
  }
}

const myPrism = new Prism(10, 15, 18);

console.log(myPrism.volume());

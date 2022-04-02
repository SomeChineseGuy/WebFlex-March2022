// const obj = {
//   name: "alvin"
// }


// console.log(name + ", How are you?")
// const number = 12;

// console.log(number + 8);

// sayHello("Alvin")

// function sayHello(name) {
//   console.log("Hello: " + name)
// }

// console.log(name)
// var name = "Alvin";

const sayHello = function(name) {
  // console.log(`Hello ${name}`);
  return `Hello ${name}`
}

const sum = function(num) {
  return num + num;
}

// const name = "Alvin";
// let helloAlvin = sayHello("Alvin")
// let number = sum(5);
// let num2 = 2 + 2;

let hello2 = sayHello;

// console.log(hello2 + "Hello");

// console.log("100" + 100);

const arr = [sayHello];
console.log(arr[0]("Tom"));

// console.log(sum(10) + 10);

// console.log(sayHello("Steve") + " How are you?");

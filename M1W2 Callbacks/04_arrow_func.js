// ES6 7 years ago
// Stolen from CoffeeScript

// const sayHello = function(name) {
//   console.log(`Hello: ${name}`)
// }


const sayHello = name => console.log(`Hello ${name}`);
// 1. If there is only one arg, you can omit parens
// 2. if only one line of code you don't need curly braces
// 3. if only one line implicit return

// con 
// `this`

const obj = {
  count: 0,
  next: () => {
    return this.count ++
  }
}

obj.next()
console.log(obj.count)


// if(3 > 2) {
//   console.log("Numbers are good")
// } else {
//   console.log("numbers are bad")
// }

// 3 > 2 ? console.log("numbers are good") : console.log("numbers are bad");
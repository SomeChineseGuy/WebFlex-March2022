const sayHello = function(name) {
  console.log(`hello ${name}`)
}

const addTen = function(num) {
  console.log(num + 10)
}

const runFunc = function(anotherFunction, val) {
  console.log(anotherFunction(val));
}

runFunc(sayHello, "Joe");

// sayHello("Joe")
runFunc(addTen, 30);
// addTen(30)
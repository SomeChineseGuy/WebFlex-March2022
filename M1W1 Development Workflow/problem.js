// const something = process.argv;

// console.log(something)

const commandLineArguments = process.argv;

// commandLineArguments.shift();
// commandLineArguments.shift();

// commandLineArguments.splice(0, 2)

// console.log(commandLineArguments);

// const num = [1, 2, 3, 4];

// console.log(num.push(5))

// num.shift()
// num.shift()

// console.log(num)

const slice = commandLineArguments.slice(2);


console.log(slice)

// for..of
// for (const element of slice) {
//   console.log('elements', element)
// }

// let i = 0;

// while(slice.length > i) {
//  console.log(slice[i])
//  i++
// }

// for(let i = 0; i < slice.length; i++) {
//   console.log(slice[i])
// }

// let i = 0;

// do {
//   i++
//   console.log(slice[i])
// } while(i < slice.length);

// let newArr = [];

let total = 0;

for(let elements of slice) {
  elements = Number(elements)
  let converted = Number(elements);

  if(Number.isInteger(elements) && elements > 0) {  
    total += elements;
  }
}

console.log(total)
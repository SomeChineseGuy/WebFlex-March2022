const futuramaCharacters = ['Fry', 'Leela', 'Bender', 'Professor Fransworth'];

const numArr = [77, 123, 6432, 21]

// futuramaCharacters.forEach((character) => {
//   console.log(`Good News ${character}`);
// })

// for (let element of futuramaCharacters) {
// }

const ourForEach = (arr, callback) => {
  // iterate through a given array
  for(const element of arr) {
    callback(element)
    // console.log(`Good News ${element} `)
  }
}

ourForEach(futuramaCharacters, (character) => {
  console.log(`Good News ${character}`)
})

ourForEach(numArr, num => {
  console.log(num + 10)
  console.log("This new number is")
})
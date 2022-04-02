const futuramaCharacters = ['Fry', 'Leela', 'Bender', 'Professor Fransworth'];

const numArr = [77, 123, 6432, 21];

const changed = futuramaCharacters.map(newNames => `${newNames} new verison`);

console.log(changed)

const ourMap = (arr, callback) => {
  const output = [];
  for(const element of arr) {
    const returnVal = callback(element);
    output.push(returnVal);
  }
  return output
}

const map2 = ourMap(futuramaCharacters, (name)=> `${name} new verison`);

console.log(map2);

// const a = 1;
// let b = a;
// b = 3;

let user = {
  username: 'Steve',
  age: 90,
  isCool: true,
  favFood: ['taco'],
};

let copy = {
  ...user,
  favFood: [...user.favFood, 'ham', 'cheese'],
};

// This doesn't work because it's an object
// console.log(...user);

// copy.favFood.push('ham');
// copy.favFood.push('cheese');
copy.username = 'Ryan';

const arr = [1, 2, 3];
const copyArr = [...arr];

console.log(...arr);
console.log(copyArr);

const addThreeNum = (a, b, c) => {
  console.log(a + b + c);
};
addThreeNum(...arr);

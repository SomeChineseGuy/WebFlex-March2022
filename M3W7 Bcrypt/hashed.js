const bcrypt = require('bcryptjs');

const plainTextPassword = "yolo420";

// const salt = bcrypt.genSalt();
const salt = bcrypt.genSaltSync(10);

console.log('salt--', salt);
const hashed = bcrypt.hashSync(plainTextPassword, salt);
console.log('hashed', hashed)

const hashedPassword = '$2a$10$XIkLCpquCddN/9zHNaKQYezU6dyzN56R99ZaTNMVkaXFoP2fRixwi';
console.log('hashedPassword', hashedPassword);

const result = bcrypt.compareSync('yolo420', hashed);
const result2 = bcrypt.compareSync('yolo420', hashedPassword);

console.log(result)
console.log(result2)
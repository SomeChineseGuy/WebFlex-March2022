// Refactor Challenge

// const checkForm = (username, password) => {
//   if(username === "" || username === null || username === undefined) {
//     return 'Username is not valid'
//   }

//   if(password === "" || password === null || password === undefined) {
//     return 'Password is not valid'
//   }

//   return `You've just created your account`
// }


const checkForm = (username, password) => {
  if(!username) return 'Username is not valid';
  if(!password) return 'Password is not valid';

  return `You've just created your account`
}


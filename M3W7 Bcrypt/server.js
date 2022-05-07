const express = require('express');
const morgan = require('morgan');
const port = 9002;

const app = express();
app.use(morgan('dev'));
app.set('view engine', 'ejs');

const cookieSession = require('cookie-session');

app.use(cookieSession({
  name: 'potato',
  keys: ['my', 'secret', 'keys']
}));

app.use(express.urlencoded({extended: true}));

// helper functions
const genRandomId = () => {
  return Math.random().toString(36).substring(2, 6);
};

const getUserByEmail = (email, users) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user;
    }
  }

  return null;
};

// database
const users = {
  abcd: {
    id: 'abcd',
    email: 'alice@gmail.com',
    password: '1234'
  },
  defg: {
    id: 'defg',
    email: 'jstamos@gmail.com',
    password: '5678'
  }
};

const combos = {
  1: {
    main: "Burger",
    side: "Fries",
    drink: "Coke"
  }, 
  2: {
    main: "Club Sandwich",
    side: "Side Salad",
    drink: "Coffee"
  },
  3: {
    main: "Steak",
    side: "Break Poutine",
    drink: "Apple Juice"
  }
}

// for (const items in combos) {
  
// }

app.get('/', (req, res) => {
  res.send("<h1> Welcome! </h1>");
})

// Browse
app.get('/menu', (req, res) => {
  const userId = req.session.userId;
  let user;
  userId ?  user = users[userId] : user = null;
  
  const templateVars  = {combos, user};
  res.render('menu', templateVars);
});

app.get('/menu/new', (req, res) => {
  const userId = req.session.userId;
  let user;
  userId ?  user = users[userId] : user = null;
  
  const templateVars  = {combos, user};
  res.render('new', templateVars);
})

// Add new
app.post('/menu/new', (req, res) => {
  const combo = req.body;
  const comboNumber = Object.keys(combos).length + 1;
  combos[comboNumber] = combo;
  res.redirect('/menu');
});

// Read
app.get('/menu/:id', (req, res) => {
  console.log(req.params.id);
  const userInput = req.params.id;
  const combo = combos[userInput];
  const userId = req.session.userId;
  let user;
  userId ?  user = users[userId] : user = null;
  const templateVars  = {combos, user};
  !combo ? res.redirect('/menu') : res.render('combo', templateVars);
});

// Delete 
app.post('/menu/:id/delete', (req, res) => {
  const comboId = req.params.id;
  delete combos[comboId];
  res.redirect('/menu');
});

// Edit
app.post('/menu/:id/edit', (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  const id = req.params.id;
  const single = req.body;
  combos[id] = single;
  res.redirect('/menu');
})

// User
app.get('/login', (req, res) => {
  const userId = req.session.userId;
  let user;
  userId ?  user = users[userId] : user = null;
  
  const templateVars  = {combos, user};
  res.render('login');
});

app.get('/register', (req, res) => {
  const userId = req.session.userId;
  let user;
  userId ?  user = users[userId] : user = null;
  
  const templateVars  = {combos, user};
  res.render('register');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = getUserByEmail(email, users);

  if (!user) {
    return res.send('Error: User does not exist');
  }

  if (!result) {
    return res.send('Error: Passwords do not match');
  }

  res.cookie('userId', user.id);
  req.session.userId = user.id;

  res.redirect('/menu');
});

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const id = genRandomId();

  const currentUser = getUserByEmail(email, users);

  if (currentUser) {
    return res.send('Error: A user with that email already exists');
  }


  const newUser = {
    id: id,
    email: email,
    password: password
  };

  users[id] = newUser;
  console.log(users);

  // res.cookie('userId', newUser.id);
  req.session.userId = newUser.id;

  res.redirect('/menu');
});

app.post('/logout', (req, res) => {
  // res.clearCookie('userId');
  req.session = null;

  res.redirect('/menu');
});


app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
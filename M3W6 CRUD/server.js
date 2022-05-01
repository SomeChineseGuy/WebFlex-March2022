const express = require('express');
const morgan = require('morgan');
const port = 9001;

const app = express();
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

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
  const templateVars  = {combos, user};
  res.render('menu', templateVars);
});

app.get('/menu/new', (req, res) => {
  res.render('new');
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
  templateVars = { combo };
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



app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
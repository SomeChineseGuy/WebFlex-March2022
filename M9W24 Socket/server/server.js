const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
const random = require('random-name');

const port = 9001;

// Step 1 Require Socket io
const socketio = require('socket.io');
// Step 2 Require HTTPS
const http = require('http');
// Step 3 wrap the app in the HTTP
const server = http.createServer(app);
// Step 4 make sure you have io wrap over the server
const io = socketio(server);

app.get('/', (req, res) => {
  res.send('Welcome!');
});

let users = [];

io.on('connection', (socket) => {
  const name = random();
  users.push(name);
  console.log('Someone Has connected!');
  socket.emit('name', { name, users });
  socket.broadcast.emit('userNumbers', users.length);
  socket.broadcast.emit('NEW_USER', name);
  // socket.emit('firstMessage', 'Welcome, Everyone!');
  socket.name = name;

  socket.on('USER_MESSAGE', (data) => {
    socket.broadcast.emit('NEW_MESSAGE', data);
  });

  // socket.on('NEW_USER', (data) => {
  //   socket.broadcast.emit('NEW_USER_VALUE', data);
  // });

  socket.on('disconnect', () => {
    console.log('Someone has disconnected', socket.name);
    users = users.filter((name) => name !== socket.name);
    socket.broadcast.emit('DISCONNECT', {
      name: socket.name,
      length: users.length,
    });
  });
});

server.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// app.listen(port, () => {
//   console.log(`app is listening on port ${port}`);
// });

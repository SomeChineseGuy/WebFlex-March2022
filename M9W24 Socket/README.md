### Advance Lecture! Sockets

- [x] HTTPS Review
- [x] Sockets
- [x] Server
- [x] Client
- [x] Message connection

Hello and welcome to our advanced high level lecture. I know some of you are very interested in a real time connections and were thinking about finals in doing it.

#### Review: APIs

An API server is a server lives with no visualizations ( such as no front-end ). As long as we know the endpoints, we can recieve, and manipulate data using GET or POST methods. A way we communicate with an `api` server is that we send out `requests` ( GET/POST/PUT/PATCH/DELETE) which then the server might do some logic, and then return back a `response`.

![http](https://www.w3schools.in/wp-content/uploads/2019/08/http-protocol.jpg)

#### Web Sockets

However a web socket connection is quite different. Infact it acts alittle more of `tcp`. Once a connection starts, both server and client, can send messages to each other, however unlike `HTTP` once a response has been made, the connection does not die. Until someone actually disconnects ( closes the app, or presses a disconnect ) than both server and client are connected and are listening to events.

![websockets](https://images.techhive.com/images/article/2016/06/websockets-100668229-primary.idge.jpg)

#### Demo

For our demo we will be going back to `React` and `NodeJS`. We will be using `socket.io`, which is a great implementation of web sockets. Some may say that going baremetal `wss` is a better suggestion, but in my opinion `socket.io` is quite robust and has alot of things "fixed" for you out of the gate.

[Read Here](https://stackoverflow.com/questions/10112178/differences-between-socket-io-and-websockets)

First we start with out server

```js
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

server.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
```

Now our client

```js
useEffect(() => {
  // connection.on('firstMessage', (data) => {
  //   setMessage((prev) => [...prev, data]);
  // });
  connection.on('name', (data) => {
    setUsers((prev) => [...prev, data.users]);
    setName(data.name);
    setNumUsers(data.users.length);
  });
}, []);
```

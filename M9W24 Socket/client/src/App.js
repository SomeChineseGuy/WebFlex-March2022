import './App.css';
// Step 1 install client socket io
// Step 2 import socket io
// Step 3 delcare your backend
// Step 4 connnect

import socketToClient from 'socket.io-client';
import { useEffect, useState } from 'react';
const ENDPOINT = 'http://localhost:9001/';
const connection = socketToClient(ENDPOINT);

function App() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [messageContainer, setMessageContainer] = useState([]);
  // const [usersContainer, setUsersContainer] = useState([]);
  const [numUsers, setNumUsers] = useState(1);
  useEffect(() => {
    // connection.on('firstMessage', (data) => {
    //   setMessage((prev) => [...prev, data]);
    // });
    connection.on('name', (data) => {
      setUsers((prev) => [...prev, data.users]);
      setName(data.name);
      setNumUsers(data.users.length);
    });

    connection.on('userNumbers', (data) => {
      setNumUsers(data);
    });

    connection.on('NEW_USER', (data) => {
      setUsers((prev) => [...prev, data]);
    });

    connection.on('DISCONNECT', (data) => {
      setUsers((prev) => prev.filter((name) => name !== data.name));
      setNumUsers(data.length);
    });

    connection.on('NEW_MESSAGE', (data) => {
      setMessageContainer((prev) => [...prev, data]);
    });

    // connection.on('NEW_USER_VALUE', (data) => {
    //   setUsersContainer((prev) => [...prev, data]);
    // });
  }, [connection]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = `${name}: ${message}`;
    // connection.emit('NEW_USER', text);

    connection.emit('USER_MESSAGE', text);
    setMessageContainer((prev) => [...prev, text]);
    setMessage('');
  };

  return (
    <div className='App'>
      <p style={{ position: 'absolute', left: '0', top: '0' }}>
        Users online:{numUsers}
      </p>
      <h1>Hello Everyone! I'm {name}</h1>
      {messageContainer.map((items, key) => {
        return (
          <p style={{ margin: '0' }} key={key}>
            {items}
          </p>
        );
      })}

      <form onSubmit={handleSubmit}>
        <input
          className='input'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
      {users.map((user, key) => {
        return <li key={key}>{user}</li>;
      })}
    </div>
  );
}

export default App;

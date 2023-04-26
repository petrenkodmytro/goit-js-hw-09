const express = require('express');
const app = express(); // instance
const port = 3000;

const users = [
  { name: 'Bob', age: 35 },
  { name: 'Ted', age: 15 },
];
// що слухати і що віддавати у відповідь
app.get('/', (req, res) => {
  res.send('<h1>This is my server!</h1>');
});
// що слухати і що віддавати у відповідь
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// //   res.send('<h1>Hello world</h1>');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

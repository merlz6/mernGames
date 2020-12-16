const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));

let numUsers = 0;


io.on('connection', (socket) => {
  let addedUser = false;

  socket.on('new message', (data) => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  })

  // when the client emits 'add user', this listens and executes
socket.on('add user', (username) => {
  if (addedUser) return;

  // we store the username in the socket session for this client
  socket.username = username;
  ++numUsers;
  addedUser = true;
  socket.emit('login', {
    numUsers: numUsers
  });
  // echo globally (all clients) that a person has connected
  socket.broadcast.emit('user joined', {
    username: socket.username,
    numUsers: numUsers
  });
});
//END OF socket.on('add User')

socket.on('disconnect', () => {
if (addedUser) {
  --numUsers;

  // echo globally that this client has left
  socket.broadcast.emit('user left', {
    username: socket.username,
    numUsers: numUsers
  });
}
})
//end of socket disconnect



//end of socket connection
})

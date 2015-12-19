// Express initializes app to be a function handler that 
// you can supply to an HTTP server.
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var onlineUser=0;
app.get('/', function(req, res){
  res.sendfile('index.html');
});
  

io.on('connection', function(socket)
{
 onlineUser++;
 
 socket.emit('qwe2');
    socket.on('disconnect', function(){
    onlineUser--;
    console.log(onlineUser+'人still connected :3---')
});
  
  console.log(onlineUser+'人 connected :3---');
});






io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});








// We make the http server listen on port 3000
http.listen(3000, function(){
  console.log('listening on *:3000');
});


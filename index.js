var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('connected to socket');
  socket.on('chat message', function(msg){
    console.log('emitting message');
    io.emit('chat message', msg);
    console.log('message emitted to socket')
  });
});

http.listen(process.env.PORT, function(){
  console.log('listening on :'+process.env.PORT);
});



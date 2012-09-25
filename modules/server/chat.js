socket.on('sendmessage', function(data){
 socket.broadcast.emit('message',socket.clientname,data);
 });
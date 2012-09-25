

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
 

app.listen(8080);

function include(file_) {
    with (global) {
        eval(fs.readFileSync(file_) + '');
    };
}

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}


 var playerlist = [];
  var clientids = [];
  
io.sockets.on('connection', function (socket) {
  
//##############################create player on server and add to Array##########
 socket.on('initializeplayer', function (newplayername) {
 
 

 //################################################################## 
    socket.clientname = newplayername;
     playerlist.push(newplayername);
      clientids.push(socket.id);
 io.sockets.emit('addplayer',newplayername);
 io.sockets.emit('getusers');
     
  });
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
 /////////////////////////////////////////////////delete player when disconnect//// 
   socket.on('disconnect', function(){
    //###############any additional code to run when client disconnects goes here########################
   io.sockets.emit('removeplayer',socket.clientname);
  io.sockets.emit('getusers');
  
  //#####################################################################
  delete playerlist[socket.clientname];
  delete clientids[socket.id];
 for(var i in playerlist)
 {
  if(playerlist[i] == socket.clientname)
  {
    playerlist.splice(i, 1);
  }
 }
 for(var i in clientids)
 {
  if(clientids[i] == socket.id)
  {
    clientids.splice(i, 1);
  }
 }
});      
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 socket.on('getserverusers', function(){
    socket.emit('playerlist',playerlist);
 
}); 
 
 
 /////////////////////////////////////////////Add Functions////////////////
socket.on('sendmessage', function(data){
 socket.broadcast.emit('message',socket.clientname,data);
 });

////////////////////////////////////////////////////////////////////////////////////



});


 
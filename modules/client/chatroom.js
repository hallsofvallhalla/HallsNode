   function roomclicked(newroom)
		{
		  var roomsplit = newroom.split("?");
		  
		  var oldroom = player.roomid;
		 player.roomid = roomsplit[0];
		  player.room = roomsplit[1];
                  socket.emit('changeroom',roomsplit[0],oldroom);
                 }
                 
                 
    socket.on('message', function (user,message,inroom) {
		  if(inroom == player.room)
		  {
		   messagelist = messagelist + user + ": " + message + "<br>";
		   document.getElementById('chatwindow').innerHTML=messagelist;
		  }
  });
    
     socket.on('getusers', function () {
	socket.emit('getroomusers');	  
  });
     
     socket.on('roomlist', function (roomlist) {
		  newroomlist = "<b><u>Open Rooms</u></b><br>";
		  for(var i in roomlist)
 {
	 if(roomlist[i].name == player.room)
	 {
	 newroomlist = newroomlist + "<font color='#FFCC66'>" + roomlist[i].name + "</font><br>";	  
	 }
	 else
	 {
		  var newroom = roomlist[i].id + "?" + roomlist[i].name;
		  
		 
	 newroomlist = newroomlist + "<a onclick='javascript:roomclicked(\"" + newroom + "\")' >" + roomlist[i].name + "</a><br>";
	 }
 }
		   document.getElementById('roomlist').innerHTML=newroomlist;
    
  });
     
     
      socket.on('connectplayermessage', function (user,inroom,outroom) {
		if(inroom == player.room)
		  {messagelist = messagelist + "<font color='#33AA22'>" + user + " has joined the room.</font><br>";}
		if(outroom == player.room)
		  {messagelist = messagelist + "<font color='#FF4422'>" + user + " has left the room.</font><br>";}
		
		  
		 
		 
		   document.getElementById('chatwindow').innerHTML=messagelist;
    
  });
      
       socket.on('playerlist', function (playerlist) {
	  newplayerlist = "<b><u>Players in Room</b></u></br>";
		  for(var i in playerlist)
 {
	 
	 newplayerlist = newplayerlist + playerlist[i] + "<br>";
 }
 
	   document.getElementById('playerlist').innerHTML=newplayerlist;
    
  });
       
        function chatsubmitted(message)
		{
		  if(message.charAt(0) == "*")
		  {
		    
		    var thiscommand = message.split('*');
		    checkcommand(thiscommand[1]);
		    
		  }
		  else{
		  messagelist = messagelist + "You: " + message + "<br>";
		  
                   document.getElementById('submittedchat').message.value = "";
		   document.getElementById('chatwindow').innerHTML=messagelist;
                   socket.emit('sendmessage',player.name,message);
		  }
		}
		
	 function checkcommand(command)
{
 thecommand = command.split(" ");
      if(thecommand.length == 1)
    {
        messagelist = messagelist + "<font color='#CC9900'> You are missing arguments!</font><br>"; 
      document.getElementById('submittedchat').message.value = "";
	document.getElementById('chatwindow').innerHTML=messagelist;
       }
    ////////////////////////////////////////////////attack/////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    else if(thecommand[0] == "attack")
    {
      message = "<font color='#FFCC66'>Attacks " + thecommand[1] + "!</font>";
      messagelist = messagelist + "<font color='#FFCC66'> You Attack " + thecommand[1] + "!</font><br>"; 
      document.getElementById('submittedchat').message.value = "";
	document.getElementById('chatwindow').innerHTML=messagelist;
	socket.emit('sendmessage',message);
    }
  //////////////////////////////////////////////add more commands here with a else if//////////////////
  
  ////////////////////////////////////////////////////////
 }
 
 var messagelist = [];
 
 /*
  player = new player();	
 socket.emit('initializeplayer',player.name);
 
 
 <div id="roomlist">
	 
	</div>


        
#playerlist {
       float: left;
   	width:150px;
	height:400px;
	border: 2px solid #555;
        border-right: none;
	}
 
#roomlist {
  float: left;
   	width:125px;
	height:583px;
	padding-left: 10px;
       border: 2px solid #555;
       border-left: none;
	} 


*/
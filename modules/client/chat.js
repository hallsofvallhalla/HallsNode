///////////////////////////////Messaging//////////////////////
	  
//////////////////////////////////////////////Socket Functions////////////////////////////////////	  
		
 socket.emit('initializeplayer',playername);		
/////////////////////////////////////////////////////////////////////////////////////////////  
/////////////////////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////////Add a player when new client connects//////////////
   socket.on('addplayer', function (otherplayername) {
	 
	//#################code to run when another player joins connects(creating a new player)
	messagelist = messagelist + "\n<font color='#33AA22'>" + otherplayername + " joined</font> <br>";
	 document.getElementById('chatwindow').innerHTML= messagelist;
	
	
	//########################################################
	});
////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
  
//////////////////////////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////////////////////////  
//////////////////////////////////////////remove player from client when client disconnects//////////////
  socket.on('removeplayer', function (otherplayername) {
	
	//###########################code to run when player disconnects
	messagelist = messagelist + "\n<font color='#DF0101'>" + otherplayername + " disconnected</font> <br>";
		 document.getElementById('chatwindow').innerHTML=messagelist;
	
	
		 
	//####################################################
		  
	 	
	
      });	  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Get user list everytime a player connects or disconnects/////////
 socket.on('getusers', function () {
	socket.emit('getserverusers');	  
  });
socket.on('playerlist', function (playerlist) {
	  newplayerlist = "<b><u>Players Online</b></u></br>";
	  for(var i in playerlist)
		{
	 
		 newplayerlist = newplayerlist + playerlist[i] + "<br>";
		 }
		   document.getElementById('playerlist').innerHTML=newplayerlist;
    
  });



var messagelist = [];
///    This Chat system includes MUD style commands using the * //// So *attack would call the attack function.


 /*  paste the below for your chat box, most ikely in your index page
   <div id="chatwindow">
	 
	</div>
    <div id="chatbox">
   <form name="submitchat" id="submittedchat" ><br>
		  <input type="text" name="message" size="60" value"" >
		  <input type="button" onclick="javascript:chatsubmitted(message.value)" value="Say" >
	 </form>
  </div>
  
  
  ////This will go in your CSS, style 
  
  #chatwindow {
     
     
  	width:450px;
	height:400px;
	border: double;
       border: 2px solid #555;
	}
  #chatbox {
     
    
  	width:450px;
	height:50px;
	border: double;
       border: 2px solid #555;
	}
  
 */
 // or if you have your own already built just use the below line to send message. 
 //socket.emit('message',message);
  
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
                   socket.emit('sendmessage',message);
		  }
		} 
  
  socket.on('message', function (otherplayername,data) {
	
	       messagelist = messagelist + otherplayername + ": " + data + "<br>";
		   document.getElementById('chatwindow').innerHTML=messagelist;
		  
	 	
	
      });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Example Commands/////////////////////////////////////////////////////////////////////////	
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
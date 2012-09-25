


function checkcommand(command)
{
    thecommand = command.split(" ");
      if(thecommand.length == 1)
    {
       
       }
    ////////////////////////////////////////////////travel/////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////
    if(thecommand[0] == "north" || thecommand[0] == "south" || thecommand[0] == "east" || thecommand[0] == "west")
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
       
    if(thecommand[0] == 'west')
    {player.posx = player.posx - 16;drawplayer();}
    if(thecommand[0] == 'east')
    {player.posx = player.posx + 16; drawplayer();} 
    if(thecommand[0] == 'north')
    {player.posy = player.posy - 16; drawplayer();}
    if(thecommand[0] == 'south')
    {player.posy = player.posy + 16; drawplayer();} 
    
      var templocalx = player.posx / 16;
        templocalx = Math.floor(templocalx);
        var templocaly = player.posy / 16;
        templocaly = Math.floor(templocaly);
        player.location = (templocaly * 12) + templocalx;
         socket.emit('getmap',"A1",player.location);
         
    }
   /////////////////////////////////////////////////////////////////////////
   if(thecommand[0] == "lumber")
   {
     socket.emit('lumber',"A1",player.location,player.lumber);
    
    
   }
}

 function argumenterror()
 {
    messagelist = messagelist + "<font color='#CC9900'> You are missing arguments!</font><br>"; 
      document.getElementById('submittedchat').message.value = "";
	document.getElementById('chatwindow').innerHTML=messagelist;
 }
		player = new player();
		var map = [];
		socket.emit('getmap',player.map,player.location);
		 var img = new Image(); 
		img.src = 'media/overland.png';	
		 var playerimg = new Image();
		playerimg.src = 'media/player.png';
		var messagelist = "";
		 var ctx = document.getElementById('canvas').getContext('2d');
		
     
           
       socket.on('acceptmap', function (themap,lumber,mining,harvest,hunting,fishing) {
	
	var xlocal = 0;
	var ylocal = 0;
	var counter = 0;
	var cut = 0;
      for (var i=0;i<144;i++){
	mapimg = themap[i];
	cut = mapimg * 16;
	xcut = cut / 128;
	xcut = Math.floor(xcut);
	xcut = cut - (xcut * 128);
	
	ycut = (cut / 128);
	ycut = Math.floor(ycut);
	ycut = ycut * 16;
	//alert("test");
	//alert(xcut + " " + ycut);
	  ctx.drawImage(img,xcut,ycut,16,16,xlocal,ylocal,16,16);
	  xlocal = xlocal + 16;
	   counter = counter + 1;
	  if(xlocal > 176)
	  {
	  ylocal = ylocal + 16;
	  //alert(counter);
	 
	  xlocal = 0;
        }
	
    };
    
    drawplayer();
    
     document.getElementById('mapstats').innerHTML="<center><b><u>Map Stats</b></u></center><br>Lumber: " + lumber + "<br>Mining: " + mining + "<br>Harvesting: " + harvest + "<br>Hunting: " + hunting + "<br>Fishing: " + fishing;	
	});
        
        
     
     
      function drawplayer()
    {
      ctx.drawImage(playerimg,player.posx,player.posy);  
    }
                
   

 /*  Build maps easily
		var counter = 1;
var text = "";
for(i=0;i<144;i++)
{
var randnum = Math.floor((Math.random()*70)+30);
text = text + randnum + ",";
if(i > (counter * 12))
{
counter = counter +1;
text = text + "<br>";
}

}	
  document.getElementById('chatwindow').innerHTML=text;		
/////////////////////////////////////////////////////////////////

<canvas id="canvas" height=192px width=192px></canvas>

<script type="text/javascript" src="modules/client/chat.js"></script>
<script type="text/javascript" src="modules/client/classes.js"></script>
<script type="text/javascript" src="modules/client/commands.js"></script>
<script type="text/javascript" src="modules/client/mudmap1.js"></script>


  <div id="mapstats">
			
		
		</div>


////////////////////////////////////CSS

#canvas {
			
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			border: 2px solid #555;
		}
                
                
#mapstats {
             text-align: left;
             padding-left: 5px;
            width:490px;
            height:192px;
           border: 2px solid #555;
            float: left;
           
	
	}
/*/
		
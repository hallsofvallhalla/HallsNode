
Room = function(name,id,level) {
    this.name = name;
    this.users = [];
    this.id = id;
    this.level = level;
 /////////////////////////////////////   
		this.addUser = function(user) {
	       this.users.push(user);
		 };
  
  //////////////////////////////////
    this.removeUser = function(user) {
      if(user != undefined)
      {
        for(var i in this.users)
      
 {
  if(this.users[i] == user)
  {
    this.users.splice(i, 1);
  }
 }}
    };
    //////////////////////////////////  
     this.getUser = function() {
        return this.users;
    };
};

var roomlist = [];
roomlist[0] = new Room('Lobby',0,0);
roomlist[1] = new Room('Arena',1,1);
roomlist[2] = new Room('Outside',1,1);
var newroomlist = [];
var roomusers = [];



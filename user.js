class User{
    constructor(){
      this.index = null;
      this.name = null;
      this.type = null
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        type:this.type 
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }

 
}
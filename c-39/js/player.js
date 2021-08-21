class Player{
  constructor(){
      this.name = null
      this.distance = 0
      this.index = null
      this.rank = null
    }
  getCount(){
     var databaseRef = database.ref('playerCount')
     databaseRef.on("value",(data)=>{
      playerCount = data.val() 
     })
  } 
  updateCount(count){
     database.ref ('/').update({
      playerCount : count
    }) 
  }
  update(){
     var playerIndex = 'players/player' + player.index   
     database.ref(playerIndex).set({
       name : this.name, 
       distance : this.distance,
       rank : this.rank
     })
   

  }
   
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val()
    })
  }
  
  getfinishedPlayers(){
    var finishedPlayerInfo = database.ref('finishedPlayers')
    finishedPlayerInfo.on("value",(data)=>{
      this.rank= data.val()
    })
  }

  static updatefinishedPlayers(rank){
      database.ref('/').update({
        finishedPlayers:rank
      })
  }

}
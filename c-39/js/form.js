class Form{
    constructor(){
        this.title = createElement('h2')
        this.input = createInput('NAME')
        this.button = createButton('PLAY')
        this.greeting = createElement('h3')
        this.reset = createButton('RESET')
    }
    
    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display(){
     this.title.html(' CAR RACING GAME ')
     this.title.position(displayWidth/2,0)
     this.input.position(displayWidth/2-100,displayHeight/2-50)
     this.button.position(displayWidth/2-100,displayHeight/2)
     this.reset.position(displayWidth-100,20)

     this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount += 1
        player.index = playerCount
        player.updateCount(playerCount)
        player.update()
        this.greeting.html("HELLO" + player.name)
        this.greeting.position(displayWidth/2-100,displayHeight/2+50)
      }
     )
      this.reset.mousePressed(()=>{
        game.update(0)
        player.updateCount(0)
        database.ref("players").remove()
        database.ref("/").update({
          finishedPlayers:0
        })
      }
    )
     
    }


}
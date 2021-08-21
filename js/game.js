class Game{
    constructor(){}


    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
          gameState = data.val()  
        })
    }

    update(state){
        database.ref('/').update({
          gameState : state  
        })
    }

    async start(){
      if(gameState===0){
        player = new Player()
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
            playerCount = playerCountRef.val()
            player.getCount()
        }
        form = new Form()
        form.display()
      }
      
      car1 = createSprite(100,200)
      car1.addImage("car1",car1IMG)
      car2 = createSprite(300,200)
      car2.addImage("car2",car2IMG)
      car3 = createSprite(500,200)
      car3.addImage("car3",car3IMG)
      car4 = createSprite(700,200)
      car4.addImage("car4",car4IMG)
      cars = [car1,car2,car3,car4]
    }
   

    play(){
      form.hide()

      //textSize(30)
      //text("GAME START",130,100);

      Player.getPlayerInfo()
      player.getfinishedPlayers() 

      if(allPlayers !== undefined){
        background(ground)
        image(track,0,-displayHeight * 4,displayWidth,displayHeight * 5)
        var index = 0 ;
        var  x = 225 ;
        var y ;

        for(var plr in allPlayers){
          index++
          x = x+225
          y = displayHeight - allPlayers[plr].distance;

          cars[index - 1].x = x;
          cars[index - 1].y = y;
           
          if(index === player.index){
            //cars[index - 1].shapeColor = 'yellow';
            fill("yellow")
            stroke("White")
            ellipse(x,y,80,80)
           // textSize(20)
           // fill("white")
           // text(allPlayers[plr].name,x,y+75)
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index - 1].y;
          }
        }
      }


      if(keyIsDown(UP_ARROW) && player.index !==null){
        player.distance += 50
        player.update();
        console.log(player.distance)
      }

      if(player.distance>4450){
        //console.log(player.distance)
       gameState = 2
       player.rank += 1;
       player.update()
       Player.updatefinishedPlayers(player.rank)

        //player.rank = finishPlayers 
        
      }

     drawSprites()


    }

    end(){
      console.log("GAME HAS END")
      console.log(player.rank)
    }


}
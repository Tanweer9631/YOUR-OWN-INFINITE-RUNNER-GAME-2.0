  
var forestImg, forest;
var carrotImg, carrot, carrotsGroup;
var climberImg, climber, climbersGroup;
var rabbit, rabbitImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  forestImg = loadImage("forest.png");
  carrotImg = loadImage("carrot.png");
  climberImg = loadImage("climber.png");
  rabbitImg = loadImage("rabbit.png");
  sound = loadSound("sound.wav");
}

function setup() {
  createCanvas(600,600);
  sound.loop();
  forest = createSprite(300,300);
  forest.addImage("forest",forestImg);
  forest.velocityY = 1;
  
  carrotsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  rabbit = createSprite(200,200,50,50);
  rabbit.scale = 0.3;
  rabbit.addImage("rabbit", rabbitImg);
}


function draw() {
  background(255);
 if(forest.y>600){
      forest.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        rabbit.x = rabbit.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("right_arrow")){
  
          rabbit.x = rabbit.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("space")){
  
         rabbit.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
  
  rabbit.velocityY = rabbit.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling forest
      spawnCarrots();

  
//write a code to make invisibleBlockGroup collide with rabbit destroy the rabbit and make gamestate to end.
     if(climbersGroup.isTouching(rabbit)){
      rabbit.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(rabbit) || rabbit.y > 600){
      rabbit.velocityY = 0;
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnCarrots()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var carrot = createSprite(200, -80);
    carrot.scale=0.5;
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;

    carrot.addImage(carrotImg);
    climber.addImage(climberImg);
    
    carrot.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the rabbit and carrot
         
    rabbit.depth = carrot.depth;
    rabbit.depth = rabbit.depth+1;
    
    //assign lifetime for the  carrot, climber and invisible block

    carrotsGroup.setLifetimeEach = 800;
    climbersGroup.setLifetimeEach = 800;
    invisibleBlockGroup.setLifetimeEach = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are carrot, climber and invisible block
    
     carrotsGroup.add(carrot);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}


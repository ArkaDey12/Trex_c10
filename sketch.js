let trex, trex_running;
let ground, ground_image

function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png')
  ground_image = loadImage('ground2.png')
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,20)
  trex.addAnimation('running', trex_running)
  trex.scale = 0.55

  //create a ground sprite
  ground = createSprite(300,170,600,20)
  ground.addImage(ground_image)
}

function draw(){
  background("lightgrey")

  ground.velocityX = -2

  //make the ground infinite
  if(ground.x<0){
    ground.x = ground.width/2
  }
  

  //make the trex jump
  if(keyDown('space')){
    trex.velocityY = -10
  }
  trex.collide(ground)
  //gravity
  trex.velocityY = trex.velocityY + 0.5
  
  
  drawSprites()
}


var trex ,trex_running;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png")
ground_Image = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex= createSprite(50,180,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5

 ground = createSprite(200,180,400,20)
 ground.addImage("ground",ground_Image)
   ground.velocityX = -3;
   invisibleGround=createSprite(200,190,400,10);
   invisibleGround.visible = false;
}

function draw(){
  background("white")
  console.log(trex.y)  
  if (keyDown("space")&& trex.y>161){
trex.velocityY = -10;
}

trex.velocityY= trex.velocityY+0.8;

if(ground.x<0){
  ground.x = 300;
}
trex.collide(invisibleGround);
drawSprites();
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgImg;
var player, rileyImg, riley_s;
var arrow, target, scoreboard, levels;


function preload(){
  
  //rileyImg = loadImage("assets/riley.png")
  //riley_s = loadImage("assets/riley_s.png")
  //arrow = loadImage("assets/riley_s.png")
  //target = loadImage("assets/riley_s.png")

  //bgImg = loadImage("assets/bg.jpg")

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(rileyImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  rectMode(CENTER);
  background(0); 

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

if(keyWentDown("space")){
 
  player.addImage(riley_aiming)
 
}

else if(keyWentUp("space")){
  player.addImage(rileyImg)
}

drawSprites();

}





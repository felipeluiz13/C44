var backgroundImg
var player 


function preload(){
  backgroundImg = loadImage ("casa.png")

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  player = createSprite(200,200,50,50);
  player.shapeColor = "green"
  
}

function draw(){
  background(51);
  image(backgroundImg,0,0,1920,1080);
  controls();

  console.log("x:"+player.x);
  console.log("y:"+player.y);
  drawSprites(); 
}

function controls () {
  if(keyDown("w")) {
    player.y = player.y -10;
  }

  if(keyDown("s")) {
    player.y = player.y +10;
  }

  if(keyDown("a")) {
    player.x = player.x -10;
  }

  if(keyDown("d")) {
    player.x = player.x +10;
  }

  
  if (player.y <= 380) {
    camera.y = 380;
  }
  else if(player.y >= 710) {
    camera.y = 710;
  } 
  else {
    camera.y = player.y;
  }
  
  if(player.x <= 750) {
    camera.x = 750
  }
  else if (player.x >= 1180 ) {
    camera.x = 1180
  }
  else {
    camera.x = player.x;
  }
  
}
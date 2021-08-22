  var sea;
  var ship_move;

  function preload(){
  seaImage = loadImage("sea.png");
  ship_move = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
}

  function setup(){
  createCanvas(400,400);
  background("blue")
  sea = createSprite(400,200,600,100);
  sea.addImage("sea",seaImage);
  //sea.x = sea.width/2;
  sea.velocityX = -5
  sea.scale = 0.3
  

  ship = createSprite(130,200,30,30);
  ship.addAnimation("move",ship_move);
  ship.scale = 0.25;
}

   function draw() {
    background(0);

   sea.velocityX = -3;

    if(sea.x < 0){
     sea.x = sea.width/8;


   }









 drawSprites();
}
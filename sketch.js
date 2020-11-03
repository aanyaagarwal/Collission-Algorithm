var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 30);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(100, 300, 70, 80);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  &&fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  &&movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  &&fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    )
  {
    movingRect.shapeColor = "white";
    fixedRect.shapeColor = "white";
  }
  else
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  drawSprites();
}
var Fixedrect, Movingrect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  Fixedrect = createSprite(200, 200, 50, 80);
  Fixedrect.shapeColor="green";
  Movingrect = createSprite(400, 200, 80, 30);
  Movingrect.shapeColor="green";
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor="green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor="green";

  Fixedrect.velocityY=-2;
  gameObject2.velocityY=2;
}

function draw() {
  background(255,255,255);  

  Movingrect.x = mouseX;
  Movingrect.y = mouseY;

 if (isTouching(Movingrect,gameObject1)) {
   Movingrect.shapeColor="red";
   gameObject1.shapeColor="red";
 } else {
   Movingrect.shapeColor="green";
   gameObject1.shapeColor="green";
 }
  bounceOff(Fixedrect,gameObject2);

  drawSprites();
}


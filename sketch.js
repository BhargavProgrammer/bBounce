/*
ABSTRACTION: crateing our function and calling the function inside the function draw

How to create our own libraary:
1. Add file name with .js as extension
2. Add that speicific file name in index.html
3. We dont know anything about p5 lib
4. But the end uer has to know format. function()
5. in Code.or. eg. sprite.bouceOff(target)



*/

var fRect, mRect;
var object1, object2

function setup() {
  createCanvas(400,400);
  fRect=createSprite(100,200,50,90);
  fRect.shapeColor="red";

  mRect=createSprite(200,200,40,110);
  mRect.shapeColor="red";
  
  object1=createSprite(300,200,50,50);
  object1.velocityY = 2;

  object2=createSprite(300,350,50,50);
  object2.velocityY= -2;
}

function draw() {
  background("white");  
  mRect.y=World.mouseY;
  mRect.x=World.mouseX;
  
  if(bTouch(mRect,fRect)){
    mRect.shapeColor = "green";
    fRect.shapeColor = "green";
  }
 else{
  mRect.shapeColor = "red";
  fRect.shapeColor = "red";
 }

 if(bBounce(object1 , object2)){
  object1.velocityX = object1.velocityX*(-1);
  object2.velocityX = object2.velocityX*(-1);
 }

  console.log(fRect.x - mRect.x)
  drawSprites();
}




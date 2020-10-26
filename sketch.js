var bgImage;
var car1,car1Image, car2,car2Image,car3,car3Image, car4,car4Image;
function preload(){
bgImage=loadImage("rod 322.jpg")
car1Image=loadImage("car1.png")
car2Image=loadImage("car2.png")
car3Image=loadImage("car3.png")
car4Image=loadImage("car4.png")
}

function setup() {
  createCanvas(1550,750);
  // createSprite(400, 200, 50, 50);
  car1=createSprite(100, 600, 50, 50);
  car1.addImage(car1Image);
  car1.rotation=40;
  // car1.velocityY=-1;
  // car1.velocityX=1;
  car2=createSprite(300, 600, 50, 50);
  car2.addImage(car2Image);
  car2.rotation=40;
  car3=createSprite(600, 600, 50, 50);
  car3.addImage(car3Image);
  car3.rotation=40;
  car4=createSprite(900, 600, 50, 50);
  car4.addImage(car4Image);
  car4.rotation=40;
}

function draw() {
  background(bgImage);  
  drawSprites();
}
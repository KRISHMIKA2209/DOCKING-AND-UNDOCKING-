let bg;
var scottKelly,scottKelly1;
var iss_img,iss;
var spaceCraft1,spaceCraft;
var scimg1,scimg2,scimg3,scimg4;
var hasdocked;
var hasDocked = false;
function preLoad(){
 scimg1 = loadImage("spacecraft1.png"); 
 scimg2 = loadImage("spacecraft2.png");
 scimg3 = loadImage("spacecraft3.png");
 scimg4 = loadImage("spacecraft4.png");
 scottKelly  = loadImage("njfdv.png");
}

function setup() {
  scimg1 = loadImage("spacecraft1.png"); 
 scimg2 = loadImage("spacecraft2.png");
 scimg3 = loadImage("spacecraft3.png");
 scimg4 = loadImage("spacecraft4.png");
 scottKelly  = loadImage("njfdv.jpg");
  bg= loadImage("spacebg.jpg");
  iss_img = loadImage("iss.png");
  createCanvas(1700,780);
  spaceCraft = loadAnimation("spacecraft1.png","spacecraft2.png","spacecraft3.png","spacecraft4.png");
  spaceCraft1=createSprite(250,350,10,10);
  spaceCraft1.addImage(scimg2);
  spaceCraft1.scale=0.39;
  iss = createSprite(850,250,10,10);
  iss.addImage(iss_img);
  iss.scale=1.3;
  spaceCraft1.setCollider("rectangle",0,0,350,630);
  spaceCraft1.debug = false;
  iss.setCollider("rectangle",-30,-50,150,180);
  iss.debug = false;
  scottKelly1 = createSprite(430,450,10,10);
  scottKelly1.addImage(scottKelly);
  scottKelly1.visible = false;
}

function draw() {
  background(bg);
   if(!hasDocked){
     spaceCraft1.x = spaceCraft1.x + random(-1,1);
     if(keyDown("UP_ARROW")){
       spaceCraft1.addImage(scimg2);
       spaceCraft1.y = spaceCraft1.y -2;
     }
     if(keyDown("DOWN_ARROW")){
       spaceCraft1.addImage(scimg1);
       spaceCraft1.y = spaceCraft1.y +2;
     }
     if(keyDown("LEFT_ARROW")){
       spaceCraft1.addImage(scimg3);
       spaceCraft1.x = spaceCraft1.x-2;
     }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft1.addImage(scimg4);
      spaceCraft1.x = spaceCraft1.x+2;
    }

     
   }
   if(spaceCraft1.isTouching(iss)){
     hasDocked = true;

     textSize(50);
     fill("yellow");
     text("Docking Successful!",130,250);
     scottKelly1.visible = true;
   }
  drawSprites();
}

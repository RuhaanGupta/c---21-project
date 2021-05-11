var c,c1,c2,c3,c4;
var m,m1,m2,m3,m4;
function preload() {
  c1.loadAnimation("cat1.png");
  c2.loadAnimation("cat2.png");
  c3.loadAnimation("cat3.png");
  c4.loadAnimation("cat4.png");
  m1.loadAnimation("mouse1.png");
  m2.loadAnimation("mouse2.png");
  m3.loadAnimation("mouse3.png");
  m4.loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(400,400);
    c = createSprite(200,200,20,20);

    m = createSprite(200,200,20,20);
   
}

function draw() {
    background(180);
    

    drawSprites();
}


function keyPressed(){
      if(keyCode === RIGHT_ARROW){
        m.addAnimation("mt",m1)   
        m.changeAnimation("mt",m1);
        m.frameDelay = 25;

   
       }
    if(keyCode === LEFT_ARROW){
        m.addAnimation("mt",m1)   
        m.changeAnimation("mt",m1);
    m.frameDelay = 25;
   
   }


}

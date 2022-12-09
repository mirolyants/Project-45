var minigame1_img, crate1_img, crate2_img, crate3_img, button1_img, button2_img, crane_img


function preload() {
  minigame1_img = loadImage("./images/mini_game1.png");

  crate1_img = loadImage("./images/crate1.png") ;
  crate2_img = loadImage("./images/crate2.png") ;
  crate3_img = loadImage("./images/crate3.png");

  //button1_img = loadImage("./images/button1.png");
  //button2_img = loadImage("./images/button2.png");

  //crane_img = loadImage("./images/crane.png");

  //pressed=loadAnimation("./images/.button1.png","./images/.button2.png");
}


function setup() {
  createCanvas(700,500);

  //crates
  var crate1=createSprite(500,200,100,100);
  crate1.addImage("crate1",crate1_img);
  crate1.scale = 0.25;

  var crate2=createSprite(520,250,100,100);
  crate2.addImage("crate2",crate2_img);
  crate2.scale = 0.2;

  var crate3=createSprite(550,300,100,100);
  crate3.addImage("crate3",crate3_img);
  crate3.scale = 0.32;

  //buttons
  var button=createImg("./images/button1.png");
  //button.addAnimation("pressed_btn",pressed);
  button.position(160,160);
  button.size(80,50) ;
  
  //var button2=createImg("./images/button1.png");
  // button2.addAnimation("pressed_btn",pressed);
  //button2.position(35,420);
  //button2.size(100,65);

  //var button3=createImg("./images/button1.png");
  //button3.position(35,420);
 // button3.size(100,65);
  
  var crane=createImg("./images/crane.png");
  crane.position(258,45);
  crane.size(100,50);
  
  /*if (mouseClicked(button) ) {
    button.changeAnimation('pressed');
  }

  else if (mouseClicked(button2) ){
    button2.changeAnimation('pressed');
  }*/

}

function draw() {
  background(minigame1_img);  
  //image(minigame1_img,700,500,width,height)
  drawSprites();
}
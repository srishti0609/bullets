var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
 bullet=createSprite(50,200,50,20);
 bullet.shapeColor=color(225,225,225);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
 
}


function draw() {
  background(255,255,255);  
  drawSprites();
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage<10){
    bullet.shapeColor=color("green");
    }
    else{
      bullet.shapeColor=color("red");
    }
  }
}

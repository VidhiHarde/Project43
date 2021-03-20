var sec,min,hr;
var secAngle,minAngle,hrAngle;

function setup() {
  createCanvas(500,500);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);
  
}

function draw() {
background(0);  
//Translating and rotating
translate(200,200);
rotate(-90);

//Calculating time using predefined func from p5.js
sec=second();
min=minute();
hr=hour();

//To create ab iterative rotation
secAngle=map(sec,0,60,0,360);
minAngle=map(min,0,60,0,360);
hrAngle=map(hr % 12,0,12,0,360);

//drawing second hand
push();
rotate(secAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
//drawing minute hand
push();
rotate(minAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,75,0);
pop();
//drawing hour hand
push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,50,0);
pop();

stroke(255,0,255);
point(0,0);

//drawing arcs
strokeWeight(10);
noFill();
//seconds
stroke(255,0,0);
arc(0,0,300,300,0,secAngle);
//Minutes
stroke(0,255,0);
arc(0,0,280,280,0,minAngle);
//Hour
stroke(0,0,255);
arc(0,0,260,260,0,hrAngle);
}

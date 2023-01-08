function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90);
fill(0,255,255);
  let hr = hour();
  let mn = minute();
  let sc = second();

strokeWeight(8);
stroke(0,255,255);
noFill();
let SecondAngle = map(sc,0,60,0,360);
arc(0,0,200,200,0,SecondAngle);

strokeWeight(4);
stroke(255,172,28);
noFill();
let MinuteAngle = map(mn,0,60,0,360);
arc(0,0,190,190, 90, MinuteAngle);

strokeWeight(2);
stroke(0,0,255);
noFill();
let HourAngle = map(hr % 12,0,12,0,360);
arc(0,0,180,180,0,HourAngle);

//SecondHand
push();
rotate(SecondAngle);
strokeWeight(3);
stroke(0,255,255);
line(0,0,50,0);
pop();

//MinuteHand
push();
rotate(MinuteAngle);
strokeWeight(4);
stroke(255,172,28);
line(0,0,60,0);
pop();

//HourHand
push();
rotate(HourAngle);
strokeWeight(8);
stroke(0,0,255);
line(0,0,70,0);
pop();

//CenterPoint
strokeWeight(10);
stroke(204,85,0);
point(0,0);


}

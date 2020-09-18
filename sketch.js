const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var magnusbane, books, ground, ball

function setup() {
  createCanvas(400,400);
  
magnusbane= Engine.create();
books= magnusbane.world;
var poopyunicorn= {
  isStatic: true,
}
ground= Bodies.rectangle(200,380,400,20,poopyunicorn);
World.add(books,ground);
console.log(ground.position.x);
console.log(ground.position.y);

var balloptions= {
  restitution: 2,
}
ball= Bodies.circle(200,200,10,balloptions);
World.add(books,ball);
}

function draw() {
  background("yellow");  
  Engine.update(magnusbane);

  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);



}
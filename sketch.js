
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var engine,world;
var leftPillar,mainPillar,rightPillar;


function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		restitution:0.3,
		isStatic:false,
		friction:0.5,
		density:1.3
	}
	var groundOptions={
		isStatic:true
	}

	ground=Bodies.rectangle(600,370,1200,20,groundOptions);
	World.add(world,ground);
	ball=Bodies.circle(50,345,15,ball_options);
	World.add(world,ball);
	leftPillar=Bodies.rectangle(900,345,200,20,groundOptions);
	World.add(world,leftPillar);
	middlePillar=Bodies.rectangle(1000,295,20,80,groundOptions);
	World.add(world,middlePillar);
	rightPillar=Bodies.rectangle(800,295,20,80,groundOptions);
	World.add(world,rightPillar);
	Engine.run(engine);
	

	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 
  rect(ground.position.x,ground.position.y,1200,20);
  rect(leftPillar.position.x,leftPillar.position.y,200,20);
 rect(middlePillar.position.x,middlePillar.position.y,20,80);
  rect(rightPillar.position.x,rightPillar.position.y,20,80);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 console.log("trash 1")

}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:25,y:-25});
	}
}
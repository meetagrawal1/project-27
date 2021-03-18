
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1270, 600);


	engine = Engine.create();
	world = engine.world;

	//ground = new Roof(600,height,1200,20);
     ball = new Ball(400,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  ground.display();
  
  drawSprites();
 
}




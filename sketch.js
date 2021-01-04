
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var side1, side2, side3;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,20,25);
	ground = new Ground(400,690,800,20);

	side1 = new Dustbin(650,610,20,130);
	side2 = new Dustbin(495,610,20,130);
	side3 = new Dustbin(560,670,150,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);

  paper.display()
  ground.display()

  side1.display()
  side2.display()
  side3.display()

 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-105});
	}
}

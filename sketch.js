
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4;
	 var rope1,rope2,rope2,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1=new Bob (100,100,100,100);
  bob1=new Bob (200,100,100,100);
  bob1=new Bob (300,100,100,100);
  bob1=new Bob (400,100,100,100);
  bob1=new Bob (500,100,100,100);

  rope1 = new Rope (bob1Object1.Body,roofObject.Body,-bob1Diameter*2,0);
  rope2 = new Rope (bob2Object1.Body,roofObject.Body,-bob2Diameter*2,0);
  rope3 = new Rope (bob3Object1.Body,roofObject.Body,-bob3Diameter*2,0);
  rope4 = new Rope (bob4Object1.Body,roofObject.Body,-bob4Diameter*2,0);
  rope5 = new Rope (bob5Object1.Body,roofObject.Body,-bob5Diameter*2,0);


	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


	
  drawSprites();
 
}




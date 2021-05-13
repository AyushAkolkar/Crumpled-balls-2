
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		paper=new Paper(50,680,10,10);

		ground=new Ground(400,680,800,10);

		box1=new Box(550,640,20,100);
		box2=new Box(600,680,100,20);
		box3=new Box(650,640,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  paper.display();

  ground.display();

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
	}
  }

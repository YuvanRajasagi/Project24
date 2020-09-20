
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash1, trash2, trash3;

function preload()
{

}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-35, width, 10);

	paper = new Paper(100, 100, 20);


	trash1 = new Trash(1050,650,200,10);

	trash2 = new Trash(950,605,10,100);

	trash3 = new Trash(1150,605,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	ground.display();
	paper.display();
	trash1.display();
	trash2.display();
	trash3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});

		Matter.Body.setStatic(paper, false);
	}
}

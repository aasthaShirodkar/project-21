
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var ground

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground =new Ground(200,390,400,20);
	Engine.run(engine);
    rectMode(CENTER);
}


function draw() {

  background(0);
  ground.show();

  Engine.update(engine);
  ground.display()
}




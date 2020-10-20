const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var box;
var box1;
var ground; 

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box(100, 50, 50, 50);
  box1 = new Box(140, 300, 50, 50);
  ground = new Ground(200,390,200,20);
  /*var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  */
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  box.display();
  box1.display();
  ground.display();
}
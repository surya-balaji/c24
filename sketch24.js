const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var box;
var box1;
var ground; 

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box(700, 320, 70, 70);
  box1 = new Box(920, 320, 70, 70);
  ground = new Ground(600,height,1200,20);
  pig = new Pig(810,350);
  log = new Log(810,260,300,PI/2);

  box2 = new Box(700, 240, 70, 70);
  box3 = new Box(920, 240, 70, 70);
  pig1 = new Pig(810,220);
  log1 = new Log(810,180,300,PI/2);

  box4 = new Box(810, 160, 70, 70);
  log2 = new Log(760, 120, 150, PI/7);
  log3 = new Log(870,120,150,-PI/7);

  bird = new Bird(100,100);

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
  pig.display();
  log.display();
  box2.display();
  box3.display();
  pig1.display();
  log1.display();
  box4.display();
  log2.display();
  log3.display();
  bird.display();
}
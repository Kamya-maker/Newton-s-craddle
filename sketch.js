
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Render = Matter.Render;
function preload()
{
	
}
var engine,world,ground;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground=new Ground(300,100,200,20);
  ball =new Ball(150,200,10)
  chain1= new Chain(ball.body,{x:150,y:100})
  ball2 =new Ball(260,200,10);
 chain2= new Chain(ball2.body,{x:260,y:100})
 ball3 =new Ball(380,200,10);
 chain3= new Chain(ball3.body,{x:380,y:100})
 ball4 =new Ball(500,200,10);
 chain4 = new Chain(ball4.body,{x:500,y:100})
 var render=Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } });
  Engine.run(engine);
   Render.run(render);

}
function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  ground.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  drawSprites();
 
}




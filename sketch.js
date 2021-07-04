const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box01,box22,box33,box44,box55,box66,box77,box88,box99
var ground1, ground2;
var slingShot
var polygon

function preload() {
  shape=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);


    slingShot= new SlingShot(this.polygon,{x:100,y:200});

    ground1 = new Ground(380,300,270,10);
    ground2 = new Ground(700,200,200,10);
    
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);    
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);

    box01 = new Box(640,175,30,40);
    box22 = new Box(670,175,30,40);
    box33= new Box(700,175,30,40);
    box44 = new Box(730,175,30,40);
    box55 = new Box(760,175,30,40);
    box66 = new Box(670,135,30,40);
    box77 = new Box(700,135,30,40);
    box88 = new Box(730,135,30,40);    
    box99 = new Box(700,95,30,40);

  
}

function draw(){
  background("black")
    Engine.update(engine);

    imageMode(CENTER)
    image(shape,polygon.position.x,polygon.position.y,40,40)
   
    ground1.display();
    ground2.display();


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box01.display();
    box22.display();
    box33.display();
    box44.display();
    box55.display();
    box66.display();
    box77.display();
    box88.display();
    box99.display();

    slingShot.display();
    
    
}

function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){

}


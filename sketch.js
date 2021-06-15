const Engine=Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var bg; 
var engine,world ;
var fall = []

function preload() {

  bg = loadImage("snow2.jpg")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create()
  world = engine.world
}

function draw() {
  background(bg);
  Engine.update(engine)
  if (frameCount%10 === 0) {
    fall.push(new Snowfall())
  }  
  for (var i = 0;i<fall.length; i++){
    fall[i].display()
  }
  drawSprites();
}
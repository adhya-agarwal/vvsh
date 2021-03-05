const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world

var bgimg,bg
var _log
var ground, ground2,ground3,ground4
var jump1, jump2
var block1
var log1, log2
var chain1,chain2

function setup() {
  createCanvas(displayWidth+320,displayHeight+42);
  engine=Engine.create()
  world=engine.world
 
  //bg=createSprite()
  ground=new Ground(800,742,displayWidth+370,60)
  ground2=new Ground(800,22,displayWidth+370,60)
  ground3=new Ground2(1575,350,80,900)
  ground4=new Ground2(28,350,80,900)
  jump1=new Ground(380,630,300,40)
  jump2=new Ground(1030,630,300,40)
  block1=new Ground(600,520,1500,40)
  block2=new Ground(1000,410,1500,40)
  log1=new Ground(700,300,200,30)
  log2=new Ground(1150,300,200,30)

  chain1=new Chain(log1.body,{x:350,y:150})
}


function preload(){
bgimg=loadImage("purplewall.jpg")
_log=loadImage("_log.png")
}




function draw() {

  Engine.update(engine)

  background(bgimg)
  ground.display()
  ground2.display()
  ground3.display()
  ground4.display()
  jump1.display()
  jump2.display()
  block1.display()
  block2.display()
  log1.display()
  log2.display()
  chain1.display()
  drawSprites();
}
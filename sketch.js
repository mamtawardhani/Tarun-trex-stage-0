var trex, trexImg

function preload(){
trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png")
}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50,120,20,20)
  trex.addAnimation("trexrunning" , trexImg )
}

function draw(){
  background(180)
  
  drawSprites()
}




var Fixedrect,Movingrect
function setup() {
  createCanvas(1200,800);
  Fixedrect=createSprite(600,400,50,80)
  Fixedrect.shapeColor="green"
  Movingrect=createSprite(400,200,80,30)
  Movingrect.shapeColor="green"
  GameObject1=createSprite(300,100,50,50)
  GameObject1.shapeColor="pink"
  GameObject2=createSprite(400,100,50,50)
  GameObject2.shapeColor="pink"
}

function draw() {
  background(255,255,255);  
  Movingrect.x=World.mouseX
  Movingrect.y=World.mouseY
  console.log("Movingrect.x-fixed.x"+Movingrect.x-Fixedrect.x)
  console.log("Fixedrect.Width/2+Movingrect.Width/2"+Fixedrect.width/2+Movingrect.width/2)
  if(isTouching(Movingrect,GameObject2)){
    Movingrect.shapeColor="red"
    GameObject2.shapeColor="red"
  }
  else{
    Movingrect.shapeColor="green"
    GameObject2.shapeColor="green"
  }

  drawSprites();
}
function isTouching(Object1,Object2){
  if((Object1.x-Object2.x < Object2.width/2+Object1.width/2)
  &&(Object2.x-Object1.x < Object2.width/2+Object1.width/2)
  &&(Object1.y-Object2.y < Object2.width/2+Object1.width/2)
  &&(Object2.y-Object1.y < Object2.width/2+Object1.width/2))
  {
    return true
  }
  else{
  return false
  }
}
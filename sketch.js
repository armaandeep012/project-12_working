
var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,redLeaf,orangeLeaf;
var leafImg,redLeafImg,orangeLeafImg;
var score = 0;

function preload(){

  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  redLeafImg = loadImage("redImage.png");
  orangeLeafImg = loadImage("orangeLeaf.png");

}


function setup(){
  
  createCanvas(400,400);
  

  garden=createSprite(200,200);
  garden.addImage(gardenImg);


  rabbit = createSprite(180,340,30,30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
  rabbit.y = 370;

  
}


function draw() {

  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;


  var selectSprites = Math.round(random(1,4));

  if(frameCount % 80 === 0){

    
    if(selectSprites === 1){

      orangeLeaf = createSprite(random(20,380),0,5,5);
      orangeLeaf.addImage(orangeLeafImg);
      orangeLeaf.scale = 0.1;
      orangeLeaf.velocityY = 1.5;
      orangeLeaf.depth = 4;
      
    }

    if(selectSprites === 2){

      leaf = createSprite(random(20,380),0,5,5);
      leaf.addImage(leafImg);
      leaf.velocityY = 2;
      leaf.scale = 0.1;
      leaf.depth = 10;

    }

    if(selectSprites === 3){

      apple = createSprite(random(20,380),0,5,5);
      apple.addImage(appleImg);
      apple.scale = 0.1;
      apple.velocityY = 3;
      apple.depth = (random(5,15));

    }

    if(selectSprites === 4){

      redLeaf = createSprite(random(20,380),0,5,5);
      redLeaf.addImage(redLeafImg);
      redLeaf.scale = 0.1;
      redLeaf.velocityY = 1;
      redLeaf.depth = 1;

    }

  }
  

  drawSprites();


}
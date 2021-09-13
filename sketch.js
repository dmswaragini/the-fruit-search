var bg,bgImage
var snake,snakeImage,snakeGroup
var girl,girlImage
var orangeTree,orangeTreeIamge,orangeTreeGroup
var appleTree,appleTreeImage,appleTreeGroup
var invisibleGround
var start,startImage
var gameOver,gameOverImage
var apple,appleImage
var orange,orangeImage
var score=0
var lifeline=5
function preload() {
  bgImage=loadImage('bg1.jpg');
  snakeImage=loadAnimation('snake_3-0.png','snake_3-1.png','snake_3-2.png','snake_3-3.png','snake_3-4.png','snake_3-5.png','snake_3-6.png','snake_3-7.png',
  'snake_3-8.png','snake_3-9.png','snake_3-10.png','snake_3-11.png','snake_3-12.png','snake_3-13.png','snake_3-14.png','snake_3-15.png','snake_3-16.png',
  'snake_3-17.png','snake_3-18.png','snake_3-20.png','snake_3-21.png','snake_3-22.png',);
  orangeTreeIamge=loadImage('orangeTree.png')
girlImage=loadAnimation('girl1.png','girl2.png','girl3.png','girl4.png',
'girl5.png','girl6.png','girl7.png','girl8.png');
appleTreeImage=loadImage('apple.gif');
startImage=loadImage('start.PNG');
gameOverImage=loadImage('gameOver.png');
appleImage=loadImage('apple2.png');
orangeImage=loadImage('orange1.png')
}
function setup() {
  createCanvas(800,800);
  bg=createSprite(500, 300, 50, 50);
  girl=createSprite(100,550,50,50)
  girl.addAnimation("girlwalking",girlImage)
  girl.scale=0.9
bg.addImage(bgImage)
girl.debug=true
girl.setCollider("circle",20,-50,100)
bg.scale=1.2
bg.velocityX=-6

invisibleGround = createSprite(200,770,1200,10);
invisibleGround.visible = false;

snakeGroup = createGroup();
orangeTreeGroup=createGroup();
appleTreeGroup=createGroup();
apple1Group=createGroup();
orange1Group=createGroup();
}

function draw() {
  background("cyan");  
if(bg.x<0) {
bg.x=bg.width/2
}
/*if (keyDown(UP_ARROW)){
girl.y=girl.y-3
}
if(keyDown(DOWN_ARROW)){
girl.y=girl.y+3
}*/
if(keyDown("space")&& girl.y >= 100) {
  girl.velocityY = -12;
}
girl.velocityY = girl.velocityY + 0.8
spawnSnakes();
spawnOrangeTree();
spawnAppleTree();
if(girl.isTouching(apple1Group)){
score=score+5
apple1Group.destroyEach()
}
if(girl.isTouching(orange1Group)){
  score=score+3
orange1Group.destroyEach()
  }
if(girl.isTouching(snakeGroup)){
lifeline=lifeline-1
snakeGroup.destroyEach()
girl.x=0
}
girl.collide(invisibleGround);

drawSprites();
if(lifeline===0){
  background(gameOverImage)
  girl.destroy()
 appleTreeGroup.destroyEach()
 orangeTreeGroup.destroyEach()
snakeGroup.destroyEach()
apple1Group.destroyEach()
appleTreeGroup.setVelocityX(0)
orangeTreeGroup.setVelocityX(0)
snakeGroup.setVelocityX(0)
apple1Group.setVelocityX(0)

  }
textSize(30)
fill("cyan")
text("score:"+score,650,50)
text("lifeline:"+lifeline,50,50)
}
function spawnSnakes(){
  if (frameCount % 500 === 0){
    var rand = Math.round(random(400,600));
    var snake = createSprite(600,700,10,40);
    console.log(rand)
    snake.addAnimation("snakeCrawling",snakeImage)
    snake.velocityX=-5
    snake.lifetime = 300;
    snake.depth=girl.depth
    girl.depth=girl.depth+1
    snake.scale=0.5
    snakeGroup.add(snake)
  }
}
  function spawnOrangeTree(){
    if (frameCount % 275 === 0){
      var orangeTree = createSprite(600,300,10,40);
      var orange1= createSprite(600,200,10,10)
      var rand = Math.round(random(1,6));
orangeTree.addImage("orangeTree",orangeTreeIamge)
orange1.addImage("orange",orangeImage)
      orangeTree.velocityX=-5
      orange1.velocityX=-5
      orangeTree.lifetime = 300;
      orange1.lifetime = 300;
      orangeTree.depth=girl.depth
      girl.depth=girl.depth+1
      orange1.scale=0.2
      orangeTreeGroup.add(orangeTree);
      orange1Group.add(orange1);
    }
  }
 
  function spawnAppleTree(){
    if (frameCount % 517 === 0){
      var appleTree = createSprite(360,200,10,40);
      var apple1 = createSprite(360,200,10,10);
      var rand = Math.round(random(1,6));
appleTree.addImage("appleTree",appleTreeImage)
apple1.addImage("apple",appleImage)
      appleTree.velocityX=-5
      apple1.velocityX=-5
      appleTree.lifetime = 300;
      apple1.lifetime = 300;
      appleTree.depth=girl.depth
      girl.depth=girl.depth+1
      appleTree.scale=2
      apple1.scale=0.3
      appleTreeGroup.add(appleTree)
      apple1Group.add(apple1)
    }
  }
    //snakeGroup.add(snake);
 



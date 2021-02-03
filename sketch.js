var bg, bgImage;
var bg2, bg2Image;
var bird, birdImage;
var pipe1, pipe1Image;
var pipe2, pipe2Image;
var restart, restartImage;
var pipe1Group, pipe2Group;
var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload() {
  bgImage = loadImage("./images/bg.png");
  bg2Image = loadImage("./images/bg2.png");
  birdImage = loadImage("./images/main_bird.png");
  pipe1Image = loadImage("./images/pipe1.png");
  pipe2Image = loadImage("./images/pipe22.png");
  restartImage = loadImage("./images/restart.png");


}

function setup() {
  createCanvas(288, 512);

  bg = createSprite(144, 256, 10, 10);
  bg.addImage("bg", bgImage);

  bg2 = createSprite(200, 470, 600, 200);
  bg2.addImage("bg2", bg2Image);
  bg2.x = bg2.width / 2;

  bird = createSprite(25, 256, 20, 20);
  bird.addImage("bird", birdImage);
  bird.scale = 0.5;


  score = 0;

  pipe1Group = new Group();
  pipe2Group = new Group();

  restart = createSprite(144, 250, 10, 10);
  restart.addImage(restartImage);
  restart.visible = false;

}

function draw() {
  background("white");

  if (gameState === PLAY) {
    bg2.velocityX = -1;

    if (bg2.x < 120) {
      bg2.x = bg2.width / 2;
    }
    if (keyDown("space")) {
      bird.velocityY = -5;
    }

    bird.velocityY = bird.velocityY + 0.5;

    pipes();
    if (frameCount % 75 === 0) {
      score++;
    }
    // if (pipe2Group.isTouching(bird)) {
    //   gameState = END;
    // }
    if (pipe1Group.isTouching(bird)) {
      gameState = END;
    }

    if (pipe2Group.isTouching(bird)) {
      gameState = END;
    }
  }
  else if (gameState === END) {
    bg.velocityX = 0;
    bg2.velocityX = 0;
    bird.velocityY = 0
    pipe1Group.setLifetimeEach(-1);
    pipe1Group.setVelocityXEach(0);

    pipe2Group.setLifetimeEach(-1);
    pipe2Group.setVelocityXEach(0);
  }



  // bg2.velocityX = 0;
  // bird.visible = false;
  // bird.x = 25;
  // bird.y = 256;
  // restart.visible = true;
  // bg.velocityX = 0;
  // bg2.velocityX = 0;
  // bird.velocityY = 0
  // pipeGroup.setLifetimeEach(-1);
  // pipeGroup.setVelocityXEach(0);



  drawSprites();
  textSize(30);
  text("Score:" + score, 170, 500);
}

function pipes() {
  if (frameCount % 75 === 0) {
    pipe1 = createSprite(144, 0, 10, 10);
   // pipe.y = Math.round(random(0, 40));
    pipe1.velocityX = -2;
    pipe1.scale = 0.2;
   
    pipe1Group.add(pipe1);
    pipe1.addImage(pipe1Image);
    
        pipe2 = createSprite(144, 50, 10, 10);
        // pipe.y = Math.round(random(0, 40));
         pipe2.velocityX = -2;
         pipe2.scale = 0.2;
       
        pipe2.addImage(pipe2Image);
        pipe2Group.add(pipe2);
  
      }

      //pipe1.depth = bird.depth;
      //pipe1.depth = bird.depth;
      // bird.depth = bird.depth + 1;


   
  }


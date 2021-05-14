var screen = 0;
var y = -20;
var x = 200;
var yy = -30;
var xx = 250;
var speed = 2;
var speed1 = 2;
var score= 0;
var bbq;
var pkq;
var pkq2;
var bkg;
var ppp;
var p;
var b;
var pa;
var w = window.innerWidth;
var h = window.innerHeight;
var bestScore = 0;
function preload() {
  soundFormats('mp3');
	bbq = loadImage('bbq.png');
	pkq = loadImage('pkq.png');
  pkq2 = loadImage('pkq2.png');
	bkg = loadImage('bkg.jpeg');
	ppp = loadSound('ppp.mp3');
  p = loadSound('p.mp3');
  pa = loadSound('pa.mp3');
  b = loadImage('b.png');
}

function setup() {
 
  createCanvas(w,h);
  ppp.play();
}

function draw() {
  clear();
	if(screen == 0){
    startGame()
  }
  else if(screen == 1){
  	game()
  }
  else if(screen==2){
  	endGame()
  }	
}

function startGame(){
		background(bkg)
		fill(0);
		textAlign(CENTER);
		textSize(25)
		text('WELCOME TO CATCHING GAME', w/2,h/2)
		text('click to start', w/2, y/2+250);
		reset();
 
}

function game(){
  
	imageMode(CENTER);
  image(bkg,w/2,h/2,w,h);
	textSize(20)
  text("score = " + score, 50,20)
  rectMode(CENTER);
  var z = mouseX
	image(pkq,z,h-50,70,100);
	image(bbq,x,y,50,50);
  image(b,xx,yy,100,70);

  y += speed;
  yy+=speed1;
  if(y>h){
  	screen = 2;
	 }
  if(yy>h){
    screen = 1;
  }
 
   // when they touch and add score
  if( y>h-50&&x>z-30 && x<z+30 ){
  	y=-20
    speed+=.3
    score+=1;
		p.play();
  }
  if(yy>h-50&&xx>z-30 && xx<z+30){
    yy=-20;
    speed1+=.35;
    score-=2;
		pa.play();
  }
  if(yy>h-50){
    yy=-20;
    speed1+=.35;
    score+=0;
  }
	if(y == -20){
    x = random(20,w-20);
  }
  if(yy == -20){
     xx =random(20,w-20);
  }

  
}

function endGame(){
		background(150);
		textAlign(CENTER);
		text('GAME OVER', w/2, h/2);
  	text("SCORE = " + score, w/2, h/2+20);
		text('click to play again',w/2, h/2+60);
    if(score>bestScore){
      text('Best Score = '+score,w/2, h/2+40);
    }
    else{
      text('BestScore = '+ bestScore,w/2, h/2+40);
    }
}
function mousePressed(){
	if(screen == 0){
  	screen = 1
    ppp.play();

  }else if(screen == 2){
  	screen=0
  }
}

function reset(){
    
    if(score <0){
      bestScore =0;
    }
    else{
      bestScore += score;
    }
	  score=0;
  	speed=2;
    speed1=2;
  	y=-20;
    yy=-20
}
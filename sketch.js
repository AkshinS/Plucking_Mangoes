const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stone, stoneImage;
var boy, boyImage;
var tree, treeImage;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10,
	mango11, mango12, mango13, mango14, mango15, mango16, mango17, mango18, mango19, mango20;

function preload() {
	stoneImage = loadImage("stone.png");
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(canvas.width = window.innerWidth, canvas.height = window.innerHeight);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width / 2, height, width, 30);
	stone = new Stone(100, 450, 23);
	mango1 = new Mango(1025, 250, 35);
	mango2 = new Mango(1255, 170, 35);
	mango3 = new Mango(960, 310, 35);
	mango4 = new Mango(1130, 120, 35);
	mango5 = new Mango(1200, 120, 35);
	mango6 = new Mango(1320, 120, 35);
	mango7 = new Mango(1260, 80, 35);
	mango8 = new Mango(1280, 260, 35);
	mango9 = new Mango(1060, 340, 35);
	mango10 = new Mango(1500, 305, 35);
	mango11 = new Mango(1445, 320, 35);
	mango12 = new Mango(1305, 325, 35);
	mango13 = new Mango(1120, 260, 35);
	mango14 = new Mango(1180, 200, 35);
	mango15 = new Mango(1160, 320, 35);
	mango16 = new Mango(1230, 250, 35);
	mango17 = new Mango(1350, 180, 35);
	mango18 = new Mango(1330, 260, 35);
	mango19 = new Mango(1440, 220, 35);
	mango20 = new Mango(1380, 305, 35);

	attach = new Throw(stone.body, { x: 100, y: 450 });

	boy = createSprite(300, 695);
	boy.addImage("boy", boyImage);
	boy.scale = 0.1;

	tree = createSprite(1220, 410, 700, 800);
	tree.addImage("tree", treeImage);
	tree.scale = 0.6;

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background("lightGrey");

	fill("Green");
	textFont("Georgia");
	textSize(40);
	text("- Press Spacebar to get more chances -", 50, 50);
	textSize(20);
	text("Drag the mouse and try to hit the mangoes with the piece of rock", 100, 80);

	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);
	detectCollision(stone, mango8);
	detectCollision(stone, mango9);
	detectCollision(stone, mango10);
	detectCollision(stone, mango11);
	detectCollision(stone, mango12);
	detectCollision(stone, mango13);
	detectCollision(stone, mango14);
	detectCollision(stone, mango15);
	detectCollision(stone, mango16);
	detectCollision(stone, mango17);
	detectCollision(stone, mango18);
	detectCollision(stone, mango19);
	detectCollision(stone, mango20);

	drawSprites();

	tree.display();
	ground.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	mango15.display();
	mango16.display();
	mango17.display();
	mango18.display();
	mango19.display();
	mango20.display();
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	attach.fly();
}

function detectCollision(stone, mango) {

	if (stone.body.position.x - mango.body.position.x < mango.diametre + stone.diametre
		&& mango.body.position.x - stone.body.position.x < mango.diametre + stone.diametre
		&& stone.body.position.y - mango.body.position.y < mango.diametre + stone.diametre
		&& mango.body.position.y - stone.body.position.y < mango.diametre + stone.diametre) {
		Matter.Body.setStatic(mango.body, false);
	}

}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 100, y: 450 });
		attach.Launch(stone.body);
	}
}
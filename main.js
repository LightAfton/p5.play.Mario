nosex="";
nosey="";
GameStatus="";

function StartGame()
{
	GameStatus="start";
	document.getElementById("status").innerHTML="Game Is Loading";
}

function game()
{
	console.log("nosex=" + "nosey=" + nosey);
}

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(600,300);
	video.parent('game_console');

	posenet=ml5.posenet(video, modelLoaded);
 	posenet.on('pose', gotPoses);
}

function modelLoaded()
{
	console.log('Model Loaded!');
}

function gotPoses(results)
{
	if(results.length > 0);
	{
		nosex=results[0].pose.nose.x;
		nosey=results[0].pose.nose.y;
		console("nosex=" + nosex+ "nosey=" + nosey);
	}
}

function draw() {
	game()
	background("#D3D3D3");
	if(nosex<300)
    {
		marioX=marioX-1;
	}

	if(nosex>300);
	{
		mariox=mariox+1;
	}

	if(nosey<150)
	{
		marioy=marioy-1;
	}
	image(img,mariox,marioy,40,70);
}

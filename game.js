var game = new Phaser.Game(400,600,Phaser.AUTO);
var rocket;
var background;
var bullet;
var astroids;
var astroidrnd;
var timer;
var Preload =
{
	preload: function() {
        game.load.image('background','assets/test_background.png');
        game.load.image('rocket','assets/rocket.png');
        game.load.image('bullet','assets/bullet.png');
        game.load.image('astroid','assets/astroid.png');
        },
	create: function() {
		this.game.state.start("PlayGame");
	},
    update: function()
	{
	}
};

var PlayGame =
{
    preload: function() {
    },
	create: function()
	{
		game.physics.startSystem(Phaser.Physics.ARCADE);
        background = game.add.tileSprite(0,0,400,600,'background');
        rocket = game.add.sprite(171,520,'rocket');
        astroids = game.add.group();
        

       
        game.time.events.loop(Phaser.Timer.SECOND*3, this.RandomAstroid, this);

       
		

		
	},
	update: function()
	{

		if(timer=0){
			console.log("timer is 0");
			
		}
		/*console.log(timer);
		/*background.tilePosition.y += 4;*/
	},
	RandomAstroid: function(){
		randomX = game.rnd.integerInRange(-80,400);
		astroidrnd = astroids.create(randomX,0,'astroid');
		astroidrnd.scale.setTo(game.rnd.realInRange(0.4,1.2))
		game.physics.arcade.enable(astroidrnd);
		astroidrnd.body.velocity.setTo(0,300);

	}
};

game.state.add('Preload', Preload);
game.state.add('PlayGame',PlayGame);
game.state.start('Preload');
var game = new Phaser.Game(400,600,Phaser.AUTO);
var rocket;
var background;
var bullet;
var astroids;
var astroidrnd;
var timer;
var size;
var tween;
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
        game.time.events.loop(Phaser.Timer.SECOND*2, this.RandomAstroid, this);

       
		

		
	},
	update: function()
	{

		
	
		//background.tilePosition.y += 3;
	},
	RandomAstroid: function(){
		/*TODO astroid out of bounds = dead*/
		randomX = game.rnd.integerInRange(-80,400);
		astroidrnd = astroids.create(randomX,-80,'astroid');
		size = game.rnd.realInRange(0.4,1.2);
		astroidrnd.scale.setTo(0.2);
        astroidrnd.alpha = 0;
        game.add.tween(astroidrnd.scale).to( {x:size,y:size },1000, Phaser.Easing.Linear.None, true);
        game.add.tween(astroidrnd).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
		game.physics.arcade.enable(astroidrnd);
		if(size < 0.8)
		{
			
			astroidrnd.body.velocity.setTo(0,game.rnd.integerInRange(250,400));
		}
		else{
			
			astroidrnd.body.velocity.setTo(0,game.rnd.integerInRange(150,300));
		}
         
		

	}
};

game.state.add('Preload', Preload);
game.state.add('PlayGame',PlayGame);
game.state.start('Preload');
var game = new Phaser.Game(400,600,Phaser.AUTO);
var rocket;
var background;
var bullet;
var move;

var Preload =
{
	preload: function() {
        game.load.image('background','assets/test_background.png');
        game.load.image('rocket','assets/rocket.png');
        game.load.image('bullet','assets/bullet.png');
        },
	create: function() {
		this.game.state.start("PlayGame");
	}
};

var PlayGame =
{
	create: function()
	{
        game.physics.startSystem(Phaser.Physics.ARCADE);
        background = game.add.tileSprite(0,0,400,600,'background');
        rocket = game.add.sprite(171,520,'rocket');
        
        game.physics.arcade.enable(rocket);
        
        game.input.onDown.add(moveIsTrue);
        
        game.input.onUp.add(moveIsFalse);
	},
	update: function()
	{
        if(move && game.input.activePointer.positionDown.y > 500)
        {
            console.log(move);
            Movement(this);
        }
        else
        {
            move = false;
        }
		/*background.tilePosition.y += 4;*/
        if(move = false)
        {
            rocket.body.velocity.x = 0;
        }
        if(rocket.position.x <= 0)
        {
            rocket.body.velocity.x = 0;    
        }
        if(rocket.position.x >= 343)
        {
            rocket.body.velocity.x = 0;    
        }
	}
};

function moveIsTrue()
{
    move = true;
}

function moveIsFalse()
{
    move = false;
}

function Movement(pointer)
{
    console.log(pointer.x);
            if(pointer.x > rocket.position.x)
                {
                    rocket.body.velocity.x = 150; 
                }
            else if(pointer.x < rocket.position.x)
                {
                    rocket.body.velocity.x = 150;
                    console.log(rocket.velocity.x);
                }
}

game.state.add('Preload', Preload);
game.state.add('PlayGame',PlayGame);
game.state.start('Preload');
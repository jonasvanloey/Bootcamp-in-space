var game = new Phaser.Game(400,600,Phaser.AUTO);
var rocket;
var background;
var bullet;

var Preload =
{
	preload: function() {
        game.load.image('background','assets/test_background.png');
        game.load.image('rocket','assets/rocket.png');
        game.load.image('bullet','assets/bullet.png');
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
        background = game.add.tileSprite(0,0,400,600,'background');
        rocket = game.add.sprite(171,520,'rocket');
	},
	update: function()
	{
		/*background.tilePosition.y += 4;*/
	}
};

game.state.add('Preload', Preload);
game.state.add('PlayGame',PlayGame);
game.state.start('Preload');
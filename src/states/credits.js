//Everyone's names and stuff
var credits = function(game){}

credits.prototype = {
	preload: function(){
		this.game.load.image("Credits Background","assets/screens/credits.jpg");
	},
	create: function(){
		this.add.sprite(0,0,"Credits Background");
	}
}

//Everyone's names and stuff
var credits = function(game){}

credits.prototype = {
	preload: function(){
		this.game.load.image("Credits Background","assets/screens/credits.jpg");
	},
	create: function(){
		this.add.sprite(0,0,"Credits Background");
		
		this.game.add.button(this.game.world.centerX - 120,
				this.game.world.centerY * 1.57,
				'temp_button',
				function(){ console.log("main button clicked");
							this.game.state.start("Title Screen");},
				this,
				1,
				0,
				2);
	}
}

//Where you check in on your followers
var cult = function(game){}

cult.prototype = {
	preload: function(){ 
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		//this.game.state.start("Title Screen");
		var testSplash = this.add.sprite(0,0,"Test Cultist");

		this.game.add.button(this.game.world.centerX - 200,
				this.game.world.centerY + 50,
				'temp_button',
				function(){ console.log("recruit button clicked");},
				this,
				1,
				0,
				2);
				
		this.game.add.button(this.game.world.centerX - 200,
				this.game.world.centerY + 80,
				'temp_button',
				function(){ console.log("shop button clicked");},
				this,
				1,
				0,
				2);
				
		this.game.add.button(this.game.world.centerX - 200,
				this.game.world.centerY + 120,
				'temp_button',
				function(){ console.log("main button clicked");},
				this,
				1,
				0,
				2);
	}
}
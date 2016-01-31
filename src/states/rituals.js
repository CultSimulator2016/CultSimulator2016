//The screen containing our rituals, or something? idk

var rituals = function(game){}

rituals.prototype = {
	preload: function(){ 
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		var testSplash = this.add.sprite(0,0,"Test Ritual");
		
		this.game.add.button(this.game.world.centerX / 8,
				this.game.world.centerY * 1.8,
				'temp_button',
				function(){ this.game.state.start("Main Screen"); },
				this,
				1,
				0,
				2);
				
		this.game.add.button(this.game.world.centerX,
				this.game.world.centerY * 1.5,
				'temp_button',
				function(){ console.log("Make Ritual button clicked");
							},
				this,
				1,
				0,
				2);
	}
}
//The screen where we buy cards from the demon

var recruitment = function(game){}

recruitment.prototype = {
	preload: function(){ 
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		var testSplash = this.add.sprite(0,0,"Test Recruitment");
		
		this.game.add.button(this.game.world.centerX / 8,
				this.game.world.centerY * 1.8,
				'temp_button',
				function(){ this.game.state.start("Main Screen"); },
				this,
				1,
				0,
				2);
		
		this.game.add.button(this.game.world.centerX - 100,
				this.game.world.centerY * 1.8,
				'temp_button',
				function(){ this.game.state.start("Cult"); },
				this,
				1,
				0,
				2);
				
		this.game.add.button(this.game.world.centerX - 125,
				this.game.world.centerY * 1.3,
				'temp_button',
				function(){ console.log("recruit button clicked");
							},
				this,
				1,
				0,
				2);
	}
}
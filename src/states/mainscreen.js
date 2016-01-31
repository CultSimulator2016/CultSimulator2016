//The main screen where the player can go through their many options
var mainscreen = function(game){}

mainscreen.prototype = {

	preload: function() {
		

	},

	create: function (){
		this.add.sprite(0,0,"Mainscreen Background");
		
		this.game.add.button(this.game.world.centerX - 367,
				this.game.world.centerY - 150,
				'temp_button',
				function(){ this.game.state.start("Cult"); },
				this,
				1,
				0,
				2);

		this.game.add.button(this.game.world.centerX - 133.5,
				this.game.world.centerY - 150,
				'temp_button',
				function(){ this.game.state.start("Rituals"); },
				this,
				1,
				0,
				2);
				
		this.game.add.button(this.game.world.centerX + 133.5,
				this.game.world.centerY - 150,
				'temp_button',
				function(){ this.game.state.start("Shop"); },
				this,
				1,
				0,
				2);
	}

}

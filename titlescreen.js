var titlescreen = function(game){}

titlescreen.prototype = {

	preload: function() {
		//Nothing here for now

	},

	create: function (){
		var testSplash = this.add.sprite(0,0,"Test Title");
		this.game.add.button(this.game.world.centerX - 133.5,
			this.game.world.centerY - 100,
			'start_button',
			function(){ this.game.state.start("Main Screen"); },
			this,
			1,
			0,
			2);

			this.game.add.button(this.game.world.centerX - 133.5,
				this.game.world.centerY + 100,
				'temp_button',
				function(){ this.game.state.start("Credits Screen"); },
				this,
				1,
				0,
				2);
	}

}

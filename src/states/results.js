var results = function(game){}

	results.prototype = {
		
		
		
		create:function(){
		this.game.add.button(this.game.world.centerX,
				this.game.world.centerY * 1.8,
				'temp_button',
				function(){ this.game.state.start("Main Screen"); },
				this,
				1,
				0,
		2);
		}
	}
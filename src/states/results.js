var results = function(game){}

	results.prototype = {
		
		
		
		create:function(){
		
		var testsplash = this.add.sprite(0,0,"Test Results");
		
		var r = this.game.add.text(this.game.world.centerX - 140, this.game.world.centerY + 120, "Loyalty Increased!");
		r.font = "Covered By Your Grace";
		r.fontSize = 60;
		
		this.game.add.button(this.game.world.centerX - 100,
				this.game.world.centerY * 1.75,
				'temp_button',
				function(){ this.game.state.start("Main Screen"); },
				this,
				1,
				0,
				2);
		}
	}
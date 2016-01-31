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
		
		var delay = 0;

		for (var i = 0; i < 25; i++)
		{
			var sprite = this.game.add.sprite(-100 + (this.game.world.randomX), 600, 'bad heart');

			sprite.scale.set(this.game.rnd.realInRange(0.1, 0.6));

			var speed = this.game.rnd.between(4000, 6000);

			this.game.add.tween(sprite).to({ y: -256 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 1000, false);

			delay += 1000;
		}
	}

}

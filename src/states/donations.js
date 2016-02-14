//Screen where you shake down your followers for donations

var donations = function(game){}

donations.prototype = {
	preload: function(){

	},
  	create: function(){
		var testSplash = this.add.sprite(0,0,"Donations");

		var moneyText = this.game.add.text(this.game.world.centerX * 1.84, 25, engine.getMoney().toString());
		moneyText.font = "Covered By Your Grace";
		moneyText.fontSize = 30;
		moneyText.align = "right";

		this.game.add.button(0,
				this.game.world.centerY * 1.8,
				'temp_button',
				function(){ this.game.state.start("Main Screen"); },
				this,
				1,
				0,
				2);

		this.game.add.button(200,
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
				function(){ engine.askForDonations();
							},
				this,
				1,
				0,
				2);
	}
}

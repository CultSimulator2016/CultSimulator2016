//The screen where we buy cards from the demon

var shop = function(game){}

shop.prototype = {
	preload: function(){ 
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		var testSplash = this.add.sprite(0,0,"Test Shop");
		
		var moneyText = this.game.add.text(this.game.world.centerX * 1.75, this.game.world.centerY/10, "$100");
		moneyText.font = "Covered By Your Grace";
		moneyText.fontSize = 60;
		moneyText.align = "right";
		
		this.game.add.button(this.game.world.centerX / 8,
				this.game.world.centerY * 1.8,
				'temp_button',
				function(){ this.game.state.start("Main Screen"); },
				this,
				1,
				0,
				2);
				
		this.game.add.button(this.game.world.centerX / 2,
				this.game.world.centerY * 1.55,
				'temp_button',
				function(){ console.log("Buy button clicked");
							},
				this,
				1,
				0,
				2);
		
		this.game.add.button(this.game.world.centerX * 1.2,
				this.game.world.centerY * 1.55,
				'temp_button',
				function(){ this.game.state.start("Rituals"); },
				this,
				1,
				0,
				2);
	}
}
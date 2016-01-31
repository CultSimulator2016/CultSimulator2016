//Where you check in on your followers
var cult = function(game){}

cult.prototype = {
	preload: function(){ 
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		//this.game.state.start("Title Screen");
		var testSplash = this.add.sprite(0,0,"Cult");

		this.moneyText = this.game.add.text(this.game.world.centerX * 1.84, 25, engine.getMoney().toString());
		this.moneyText.font = "Covered By Your Grace";
		this.moneyText.fontSize = 30;
		this.moneyText.align = "right";
		
		this.loyaltyText = this.game.add.text(this.game.world.centerX * 1.65, this.game.world.centerY * .925, engine.getOverallLoyalty().toString());
		this.loyaltyText.font = "Covered By Your Grace";
		this.loyaltyText.fontSize = 40;
		
		this.loyaltyText = this.game.add.text(this.game.world.centerX -14, this.game.world.centerY * 1.52, engine.getFollowersCount().toString());
		this.loyaltyText.font = "Covered By Your Grace";
		this.loyaltyText.fontSize = 60;
		
		this.game.add.button(this.game.world.centerX / 9,
				this.game.world.centerY * .65,
				'temp_button',
				function(){ console.log("recruit button clicked");
							this.game.state.start("Recruit");},
				this,
				1,
				0,
				2);
				
		this.game.add.button(this.game.world.centerX / 9,
				this.game.world.centerY *.9,
				'temp_button',
				function(){ console.log("shop button clicked");
							this.game.state.start("Shop");},
				this,
				1,
				0,
				2);
				
		this.game.add.button(this.game.world.centerX / 9,
				this.game.world.centerY * 1.75,
				'temp_button',
				function(){ console.log("main button clicked");
							this.game.state.start("Main Screen");},
				this,
				1,
				0,
				2);
	}
}
//The main screen where the player can go through their many options
var mainscreen = function(game){}

mainscreen.prototype = {

	moneyText: null,
	
	updateMoney: function(money){
		this.moneyText.text =  money;
		
	},
	
	dayText: null,
	
	updateDate: function(day){
		this.dayText.text =  day;
		
	},

	preload: function() {


	},

	create: function (){
		this.add.sprite(0,0,"Mainscreen Background");

		this.dayText = this.game.add.text(this.game.world.centerX / 4, this.game.world.centerY/10, "Day 1");
		this.dayText.font = "Covered By Your Grace";
		this.dayText.fontSize = 80;
		
		this.moneyText = this.game.add.text(this.game.world.centerX * 1.75, this.game.world.centerY/10, "$100");
		this.moneyText.font = "Covered By Your Grace";
		this.moneyText.fontSize = 60;
		this.moneyText.align = "right";

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

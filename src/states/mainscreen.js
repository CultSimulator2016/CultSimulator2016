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

		this.dayText = this.game.add.text(20, 12, "Day 1");
		this.dayText.font = "Covered By Your Grace";
		this.dayText.fontSize = 50;
		
		this.moneyText = this.game.add.text(this.game.world.centerX * 1.84, this.game.world.centerY/11, "100");
		this.moneyText.font = "Covered By Your Grace";
		this.moneyText.fontSize = 30;
		this.moneyText.align = "right";

		this.game.add.button(this.game.world.centerX - 367,
				130,
				'temp_button',
				function(){ this.game.state.start("Cult"); },
				this,
				1,
				0,
				2);

		this.game.add.button(this.game.world.centerX - 367,
				200,
				'temp_button',
				function(){ this.game.state.start("Rituals"); },
				this,
				1,
				0,
				2);

		this.game.add.button(this.game.world.centerX - 367,
				270,
				'temp_button',
				function(){ this.game.state.start("Shop"); },
				this,
				1,
				0,
				2);
	}

}

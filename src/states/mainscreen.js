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

		this.dayText = this.game.add.text(20, 12, "Day " + engine.getDay());
		this.dayText.font = "Covered By Your Grace";
		this.dayText.fontSize = 50;

		this.moneyText = this.game.add.text(this.game.world.centerX * 1.84, 25, engine.getMoney().toString());
		this.moneyText.font = "Covered By Your Grace";
		this.moneyText.fontSize = 30;
		this.moneyText.align = "right";

		this.game.add.button(this.game.world.centerX - 367,
				130,
				'cult_button',
				function(){ this.game.state.start("Cult"); },
				this,
				1,
				0,
				2);

		this.game.add.button(this.game.world.centerX - 367,
				200,
				'rituals_button',
				function(){ this.game.state.start("Rituals"); },
				this,
				1,
				0,
				2);

		this.game.add.button(this.game.world.centerX - 367,
				270,
				'shop_button',
				function(){ this.game.state.start("Shop"); },
				this,
				1,
				0,
				2);
		
		var devil = this.game.add.sprite(this.game.world.centerX * 1.3, this.game.world.centerY *.75, "Devil");
		var dbox = this.game.add.sprite(devil.x / 5, devil.y /2, "Dialogue box");
		var txt = this.game.add.text(dbox.x * 1.3, dbox.y *1.3, "Howdy! You called? You've been chosen to\nrecruit and lead a bunch of followers to\nworship me, Nix! Wow, what a great honor!");
		txt.font = "Covered By Your Grace";
		txt.fontSize = 20;
		txt.fill = "#ffffff";
		
		var nxtAro = this.game.add.text(dbox.x * 4.5, dbox.y * 2.5, ">>");
		nxtAro.font = "Covered By Your Grace";
		nxtAro.fill = "#800000";
		nxtAro.inputEnabled = true;
		//text.events.onInputDown.add(
		
		group1 = this.game.add.group();
		group1.add(devil);
		group1.add(dbox);
		group1.add(txt);
		group1.add(nxtAro);
	}

}

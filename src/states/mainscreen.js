//The main screen where the player can go through their many options
var mainscreen = function(game){}

mainscreen.prototype = {

	moneyText: null,

	group1: null,

	group2: null,

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

		this.game.add.button(this.game.world.centerX + 10,
				450,
				'temp_button',
				function(butt){ butt.inputEnabled = false; this.hist(butt); },
				this,
				1,
				0,
				2);

			if(tutSeen == false){
				this.tutorial();
			}

	},

	tutorial: function(){
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
		nxtAro.events.onInputDown.add(function(){tutSeen=true; this.group1.destroy();},this);

		this.group1 = this.game.add.group();
		this.group1.add(devil);
		this.group1.add(dbox);
		this.group1.add(txt);
		this.group1.add(nxtAro);

	},

	hist: function(butt){
		var ls = engine.getHistory();
		var his = "";

		if(ls.length >= 1){
			for(i = 0; i < ls.length; i++){
				his += ls[i] + "\n";
			}
		}
		else{
			his = "Nothing!";
		}

		var dbox = this.game.add.sprite(this.game.world.centerX - 200, 100,"Rituals History");
		
		var txt = this.game.add.text(dbox.x+125, dbox.y+100, his);
		txt.font = "Covered By Your Grace";
		txt.lineSpacing = 10;
		txt.fill = "#ffffff";

		var ex = this.game.add.button(this.game.world.centerX + 40,
				500,
				'temp_button',
				function(){ butt.inputEnabled = true; this.group2.destroy(); },
				this,
				1,
				0,
				2);

		this.group2 = this.game.add.group();
		this.group2.add(dbox);
		this.group2.add(txt);
		this.group2.add(ex);
		

	}

}

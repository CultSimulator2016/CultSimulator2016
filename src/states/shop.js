//The screen where we buy cards from the demon

var shop = function(game){}

shop.prototype = {
	allCardOptions: [],
	selectedCard: null,
	preload: function(){
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		var testSplash = this.add.sprite(0,0,"Test Shop");

		var moneyText = this.game.add.text(this.game.world.centerX * 1.75, this.game.world.centerY/10, "$100");
		moneyText.font = "Covered By Your Grace";
		moneyText.fontSize = 60;
		moneyText.align = "right";

		engine.getCardsShop().forEach(function(card, index){
			var ritualCardText = this.game.add.text(100, 200 + (75*index), card.text + " ...$" + card.cost);
			ritualCardText.font = "Covered By Your Grace";
			ritualCardText.fontSize = 60;
			ritualCardText.inputEnabled = true;
			ritualCardText.events.onInputUp.add(function(selectedRitualCardText){
				this.selectedCard = card;
				this.allCardOptions.forEach(function(text){
					text.fill = '#000000';
				}, this);
				selectedRitualCardText.fill = '#FF0000';
		  }, this);
			this.allCardOptions.push(ritualCardText);
		}, this);

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
				function(){
									engine.buyCard(this.selectedCard.id);
									// TODO: Refresh screen
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

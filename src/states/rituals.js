//The screen containing our rituals, or something? idk

var rituals = function(game){}

rituals.prototype = {
	allCardOptions: [],
	selectedCard: null,
	displayCardSprite: null,
	purchaseButton: null,
	preload: function(){
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		var testSplash = this.add.sprite(0,0,"Test Ritual");

		this.displayCardSprite = this.add.sprite(510,130, "temp_button");

		var moneyText = this.game.add.text(this.game.world.centerX * 1.84, 25, engine.getMoney().toString());
		moneyText.font = "Covered By Your Grace";
		moneyText.fontSize = 30;
		moneyText.align = "right";

		var cards = engine.getCardsRitual();
		cards.forEach(function(card, index){
			var ritualCardText = this.game.add.text(60, 150 + (75*index), card.text);
			ritualCardText.font = "Covered By Your Grace";
			ritualCardText.fontSize = 60;
			ritualCardText.inputEnabled = true;
			ritualCardText.events.onInputUp.add(function(selectedRitualCardText){
				this.purchaseButton.inputEnabled = true;
				this.selectedCard = card;
				this.displayCardSprite.loadTexture(card.image);
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

		this.purchaseButton = this.game.add.button(290,
				480,
				'temp_button',
				function(){
								engine.makeRitual(this.selectedCard.id);
								this.game.state.start("Results");
							},
				this,
				1,
				0,
				2);
		this.purchaseButton.inputEnabled = false;

	}
}

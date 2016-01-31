//The screen containing our rituals, or something? idk

var rituals = function(game){}

rituals.prototype = {
	allCardOptions: [],
	selectedCard: null,
	displayCardSprite: null,
	preload: function(){
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		var testSplash = this.add.sprite(0,0,"Test Ritual");

		this.displayCardSprite = this.add.sprite(400,200, "bad heart");

		var moneyText = this.game.add.text(this.game.world.centerX * 1.75, this.game.world.centerY/10, "$100");
		moneyText.font = "Covered By Your Grace";
		moneyText.fontSize = 60;
		moneyText.align = "right";

		var cards = engine.getCardsRitual();
		cards.forEach(function(card, index){
			var ritualCardText = this.game.add.text(100, this.game.world.centerY + (75*index), card.text);
			ritualCardText.font = "Covered By Your Grace";
			ritualCardText.fontSize = 60;
			ritualCardText.inputEnabled = true;
			ritualCardText.events.onInputUp.add(function(selectedRitualCardText){
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

		this.game.add.button(this.game.world.centerX,
				this.game.world.centerY * 1.5,
				'temp_button',
				function(){
								engine.makeRitual(this.selectedCard.id);
								this.game.state.start("Results");
							},
				this,
				1,
				0,
				2);
	}
}

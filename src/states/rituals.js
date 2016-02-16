//The screen containing our rituals, or something? idk

var rituals = function(game){}

rituals.prototype = {
	allCardOptions: [],
	selectedCard: null,
	displayCardSprite: null,
	purchaseButton: null,
    graphics: [],
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
                if(this.graphics["ritual"]){
                    this.graphics["ritual"].destroy();
                    this.graphics["ritual"] = null;
                }
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
								makeRitualResults = engine.makeRitual(this.selectedCard.id);
								madeRitualImage = this.selectedCard.image;
								this.game.state.start("Results");
							},
				this,
				1,
				0,
				2);
		this.purchaseButton.inputEnabled = false;
        var x = 270;
        var y = 460;
        this.bar("ritual", x, y);

	},
    
    bar: function(name, x, y) {
        var poly = new Phaser.Polygon();

        poly.setTo([ 
            new Phaser.Point(x +  20, y + 15), 
            new Phaser.Point(x +  50, y + 15), 
            new Phaser.Point(x + 190, y + 55), 
            new Phaser.Point(x + 160, y + 55) ]);
        this.graphics[name] = this.game.add.graphics(0, 0);

        this.graphics[name].beginFill(0xFF00FF);
        this.graphics[name].drawPolygon(poly.points);
        this.graphics[name].endFill();
    }
}

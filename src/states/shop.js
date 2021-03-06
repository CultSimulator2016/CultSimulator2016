//The screen where we buy cards from the demon

var shop = function(game){}

shop.prototype = {
	allCardOptions: [],
	selectedCard: null,
	buyButton: null,
	moneyText: null,
    graphics: [],
	preload: function(){
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		var testSplash = this.add.sprite(0,0,"Shop");

		this.moneyText = this.game.add.text(this.game.world.centerX * 1.84, 25, engine.getMoney().toString());
		this.moneyText.font = "Covered By Your Grace";
		this.moneyText.fontSize = 30;
		this.moneyText.align = "right";

		var addCardToGame = function(card, index) {
			var ritualCardText = this.game.add.text(65, 150 + (75*index), card.text + " ...$" + card.cost);
			ritualCardText.font = "Covered By Your Grace";
			ritualCardText.fontSize = 50;
			ritualCardText.inputEnabled = true;
			ritualCardText.events.onInputUp.add(function(selectedRitualCardText){
				this.buyButton.inputEnabled = engine.getMoney() >= card.cost;
                if(this.buyButton.inputEnabled) {
                    if(this.graphics["buy"]){
                        this.graphics["buy"].destroy();
                        this.graphics["buy"] = null;
                    }
                } else {
                    if(!this.graphics["buy"]){
                        var x = this.world.centerX * 0.45;
                        var y = this.game.world.centerY * 1.53;
                        this.bar("buy", x, y);
                    }
                }
				this.selectedCard = card;
				this.allCardOptions.forEach(function(text){
					text.fill = '#000000';
				}, this);
				selectedRitualCardText.fill = '#FF0000';
		  }, this);
			this.allCardOptions.push(ritualCardText);
		};

		engine.getCardsShop().forEach(addCardToGame, this);

		this.game.add.button(this.game.world.centerX / 10,
				this.game.world.centerY * 1.8,
				'temp_button',
				function(){ this.game.state.start("Main Screen"); },
				this,
				1,
				0,
				2);

		this.buyButton = this.game.add.button(this.game.world.centerX * .45,
				this.game.world.centerY * 1.56,
				'temp_button',
				function(){
									engine.buyCard(this.selectedCard.id);
									// TODO: Refresh screen
									// refresh list of cards
									this.allCardOptions.forEach(function(option){
										option.destroy();
										engine.getCardsShop().forEach(addCardToGame, this);
									}, this);
									// update money
									this.moneyText.text = engine.getMoney().toString();
                                    if(this.graphics["rituals"]){
                                        this.graphics["rituals"].destroy();
                                    }
                                    this.buyButton.inputEnabled = false;
                                    var x = this.world.centerX * 0.45;
                                    var y = this.game.world.centerY * 1.53;
                                    this.bar("buy", x, y);
							},
				this,
				1,
				0,
				2);
		this.buyButton.inputEnabled = false;
        var x = this.world.centerX * 0.45;
        var y = this.game.world.centerY * 1.53;
        this.bar("buy", x, y);

        
		this.game.add.button(this.game.world.centerX * 1.07,
				this.game.world.centerY * 1.56,
				'temp_button',
				function(){
                    if(engine.ritualsAllowed()) {
                        this.game.state.start("Rituals"); 
                    }
                },
				this,
				1,
				0,
				2);
        if(!engine.ritualsAllowed()){
            var x = this.game.world.centerX * 1.05;
            var y = this.game.world.centerY * 1.53;
            this.bar("rituals", x, y);
        }
	},
    
    bar: function(name, x, y) {
        var poly = new Phaser.Polygon();

        poly.setTo([ 
            new Phaser.Point(x +  20, y + 15), 
            new Phaser.Point(x +  50, y + 15), 
            new Phaser.Point(x + 190, y + 55), 
            new Phaser.Point(x + 160, y + 55) ]);
        this.graphics[name] = this.game.add.graphics(0, 0);

        this.graphics[name].beginFill(0xFF0000);
        this.graphics[name].drawPolygon(poly.points);
        this.graphics[name].endFill();
    },
}

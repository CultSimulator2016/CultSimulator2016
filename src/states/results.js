var results = function(game){}

	results.prototype = {

		moneyText : null,

		create:function(){

		var testsplash = this.add.sprite(0,0,"Results1");

		this.moneyText = this.game.add.text(this.game.world.centerX * 1.84, 25, engine.getMoney().toString());
		this.moneyText.font = "Covered By Your Grace";
		this.moneyText.fontSize = 30;
		this.moneyText.align = "right";

		//Card kill chicken is a placeholder, will have to pass in the ritual used to get to results screen
		this.add.sprite(this.game.world.centerX * .7, this.game.world.centerY * .4, madeRitualImage);

		this.game.add.button(this.game.world.centerX - 120,
				this.game.world.centerY * 1.57,
				'temp_button',
				function(){this.r2();},
				this,
				1,
				0,
				2);
		},

		r2:function(){
			var testsplash = this.add.sprite(0,0,"Results2");

			this.moneyText = this.game.add.text(this.game.world.centerX * 1.84, 25, engine.getMoney().toString());
			this.moneyText.font = "Covered By Your Grace";
			this.moneyText.fontSize = 30;
			this.moneyText.align = "right";

			var r = this.game.add.bitmapText(
                this.game.world.centerX - 240, 
                this.game.world.centerY - 120, 
                'resultFont', 
                makeRitualResults[0], 
                30);
            
			//r.font = "Covered By Your Grace";
			//r.fontSize = 30;
            r.maxWidth = 500;
			this.game.add.button(this.game.world.centerX - 120,
				this.game.world.centerY * 1.57,
				'temp_button',
				function(){this.game.state.start("Main Screen");},
				this,
				1,
				0,
				2);
		}


		}

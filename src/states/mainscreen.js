//The main screen where the player can go through their many options
var mainscreen = function(game){}

mainscreen.prototype = {

	preload: function() {
		this.game.load.image("Mainscreen Background","assets/screens/mainscreen.jpg");

	},

	create: function (){
		this.add.sprite(0,0,"Mainscreen Background");

	}

}

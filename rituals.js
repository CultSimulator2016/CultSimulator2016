//The screen containing our rituals, or something? idk

var rituals = function(game){}

rituals.prototype = {
	preload: function(){ 
		//this.game.load.image("Test Title","Honeyview_game.png");
	},
  	create: function(){
		this.game.state.start("Title Screen");
	}
}
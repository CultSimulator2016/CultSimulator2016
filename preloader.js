var preloader = function(game){}

preloader.prototype = {
	preload: function(){ 
		//this.game.load.image("Test Title","Honeyview_game.png");
		this.game.load.image("Test Title","titlescreen.jpg");
		this.game.load.image("Test Cultist","testCultist.jpg");
	},
  	create: function(){
		this.game.state.start("Title Screen");
	}
}
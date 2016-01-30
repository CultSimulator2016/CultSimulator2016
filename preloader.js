var preloader = function(game){}

preloader.prototype = {
	preload: function(){
		//this.game.load.image("Test Title","Honeyview_game.png");
		this.game.load.image("Test Title","titlescreen.jpg");
		this.game.load.image("Test Cultist","testCultist.jpg");
		this.game.load.spritesheet('start_button', 'assets/buttons/start_button_spritesheet.png', 267, 142);
	},
  	create: function(){
		this.game.state.start("Title Screen");
	}
}

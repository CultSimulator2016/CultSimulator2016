var preloader = function(game){}

preloader.prototype = {

	preload: function(){
		//this.game.load.image("Test Title","Honeyview_game.png");
		this.game.load.image("Test Title","assets/screens/titlescreen.jpg");
		this.game.load.image("Test Cultist","testCultist.png");
		this.game.load.image("Test Ritual","assets/screens/deckscreen.jpg");
		this.game.load.image("Test Shop","assets/screens/shopscreen.jpg");
		this.game.load.image("Test Cult","assets/screens/cultscreen.jpg");
		this.game.load.image("Test Recruitment","assets/screens/recruitscreen.jpg");
		this.game.load.image("bad heart","assets/UI/badheart.png");
		this.game.load.image("Logo","assets/UI/logo.png");
		this.game.load.image("Name Screen", "assets/screens/name.jpg");
		this.game.load.image("Mainscreen Background","assets/screens/mainscreen.jpg");
		this.game.load.spritesheet('start_button', 'assets/buttons/start_button_spritesheet.png', 267, 142);
		this.game.load.spritesheet('temp_button', 'buttonspritesheet.png', 200, 50);
		//  Load the Google WebFont Loader script
		this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');

	},
  	create: function(){
		this.game.state.start("Title Screen");
	}
}

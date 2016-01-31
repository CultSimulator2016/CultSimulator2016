var preloader = function(game){}

preloader.prototype = {

	preload: function(){
		//this.game.load.image("Test Title","Honeyview_game.png");
		this.game.load.image("Title","assets/screens/titlescreen2.jpg");
		this.game.load.image("Test Cultist","testCultist.png");
		this.game.load.image("Test Ritual","assets/screens/ritualscreen.jpg");
		this.game.load.image("Shop","assets/screens/shopscreen2.jpg");
		this.game.load.image("Cult","assets/screens/cultinfoscreen.jpg");
		this.game.load.image("Test Recruitment","assets/screens/recruitscreen.jpg");
		this.game.load.image("bad heart","assets/UI/badheart.png");
		this.game.load.image("Logo","assets/UI/logo.png");
		this.game.load.image("Name Screen", "assets/screens/name.jpg");
		this.game.load.image("Test Results", "assets/screens/resultscreen1.jpg");
		this.game.load.image("Mainscreen Background","assets/screens/mainscreen_clean.jpg");
		this.game.load.image("Devil","assets/UI/devil.png");
		this.game.load.image("Dialogue box","assets/ui/dialogbox.png");
		this.game.load.image("card_kill_chicken","assets/UI/card_kill_chicken.png");
		this.game.load.image("card_eat_cat_food","assets/UI/card_eat_cat_food.png");
		this.game.load.image("card_dance_naked","assets/UI/card_dance_naked.png");
		this.game.load.spritesheet('start_button', 'assets/buttons/start_button_spritesheet.png', 267, 142);
		this.game.load.spritesheet('temp_button', 'buttonspritesheet.png', 200, 50);
		this.game.load.spritesheet('cult_button', 'assets/buttons/cult_info.png', 214,70);
		this.game.load.spritesheet('rituals_button', 'assets/buttons/rituals.png', 214,70);
		this.game.load.spritesheet('shop_button', 'assets/buttons/shop.png', 214,70);
		//  Load the Google WebFont Loader script
		this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');

	},
  	create: function(){
		this.game.state.start("Title Screen");
	}
}

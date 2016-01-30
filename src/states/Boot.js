var boot = function(game){
	console.log("%cStarting up the game...", "color:white; background:red");
};
  
boot.prototype = {
	preload: function(){
          //this.game.load.image("loading","assets/loading.png");
		this.game.load.image("Test Title","titlescreen.jpg");
	},
  	create: function(){
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		//this.scale.setScreenSize();
		this.game.state.start("Preload");
	}
}
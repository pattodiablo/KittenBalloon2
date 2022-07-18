window.onload = function() {
	
		//var Pixelratio = window.screen.availWidth / 640;
	  var width =  640;
	  var height = 960;

	
	  
	var game = new Phaser.Game(width,height, Phaser.AUTO, gato);

	// Add the States your game has.
	
	// game.state.add("Menu", Menu);

	

	
	const mapIds = [1,2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20] // Define your fixed list of maps

	var challengeNumber = Rune.getChallengeNumber(); // Get today's challenge number
	
	//const mapId = mapIds[challengeNumber % mapIds.length] // Get deterministic mapId

	

	
	game.pauseGame=function(){
		game.paused = true;
		
	}

	game.resumeGame=function(){
		game.paused = false;

	}

	game.restartGame=function(){

		console.log("wanna restart");
		game.state.start(wichLevel, true, true, 3);
	}
	
	game.getScore=function(){
		var toReturn=0;
		if(game.state.getCurrentState()!=undefined){
				
			toReturn= game.state.getCurrentState().fPlayer.data.score;
		}else{
			toReturn= 0;
		}
		
		return toReturn;
	}


		
		switch(challengeNumber){
			case 1:
				game.state.add("Level", Level);
				var wichLevel="Level";
			break;
			case 2:
				game.state.add("Level2", Level2);
				var wichLevel="Level2";
			break;
			case 3:
				game.state.add("Level3", Level3);
				var wichLevel="Level3";
			break;
			case 4:
				game.state.add("Level4", Level4);
				var wichLevel="Level4";
			break;
			case 5:
				game.state.add("Level5", Level5);
				var wichLevel="Level5";
			break;
			case 6:
				game.state.add("Level6", Level6);
				var wichLevel="Level6";
			break;
			case 7:
				game.state.add("Level7", Level7);
				var wichLevel="Level7";
			break;
			case 8:
				game.state.add("Level8", Level8);
				var wichLevel="Level8";
			break;
			case 9:
				game.state.add("Level9", Level9);
				var wichLevel="Level9";
			break;
			case 10:
				game.state.add("Level10", Level10);
				var wichLevel="Level10";
			break;
			case 11:
				game.state.add("Level11", Level11);
				var wichLevel="Level11";
			break;
			case 12:
				game.state.add("Level12", Level12);
				var wichLevel="Level12";
			break;
			case 13:
				game.state.add("Level13", Level13);
				var wichLevel="Level13";
			break;
			case 14:
				game.state.add("Level14", Level14);
				var wichLevel="Level14";
			break;
			case 15:
				game.state.add("Level15", Level15);
				var wichLevel="Level15";
			break;
			case 16:
				game.state.add("Level16", Level16);
				var wichLevel="Level16";
			break;
			case 17:
				game.state.add("Level17", Level17);
				var wichLevel="Level17";
			break;
			case 18:
				game.state.add("Level18", Level18);
				var wichLevel="Level18";
			break;
			case 19:
				game.state.add("Level19", Level19);
				var wichLevel="Level19";
			break;
			case 20:
				game.state.add("Level20", Level20);
				var wichLevel="Level20";
			break;
			case 21:
				game.state.add("Level21", Level21);
				var wichLevel="Level21";
			break;
			default:
				game.state.add("Level", Level);
			var wichLevel="Level";

			break;
		}
	
	

	
	game.state.add("Boot", Boot);
	game.state.add("IntroScene", IntroScene);
	game.state.add("GoverScene", goverScene);
	
	game.challengeLevel=wichLevel;
	game.state.start("Boot",true,true);
	
	

		  
	 Rune.init({
			
			restartGame:game.restartGame,
			pauseGame:game.pauseGame,
			resumeGame:game.resumeGame,
			getScore:game.getScore,
		  })
		  
		  
};	



	function PlatformerBehavior(state, nextLevel,levelScreen, player, plataformas,platafmove, enemigos, enemigos2, enemigos3, coins, vidas, corazones, winScreen, pausebtn, sounds) {
	// init
		
	
	
	//	this._sounds.play('coin');
		this._state = state;
		this._nextLevel = nextLevel;
		this._vidas = vidas;
		this._winScreen = winScreen;
		this._playing = true;
		this._canFly = false;
		this._firstime = true;
		this._levelScreen = levelScreen;

		this.elapsedTimer = 0;
		this.initialTime= 0
		
		var _timerText = state.add.bitmapText(530.0, 16.0, 'PixelFont', '0:00', 64);
		_timerText.align = 'center';
		this.fTimerText = _timerText;
		this.fTimerText.fixedToCamera = true;
	
	// physics
		this._arcade = state.game.physics.arcade;
		this._arcade.gravity.y = 250;

	// player
		this._player = player;
		this._player.sounds = sounds;
		
		this._plataformas= plataformas;
		this._platafmove = platafmove;
		this._coins = coins;
		

		this._corazones = corazones;
		this._enemigos = enemigos;
		this._enemigos2 = enemigos2;
		this._enemigos3 = enemigos3;
		this.maxPower = 350;
		
		this._state.world.setBounds(0, 0, 1920, 960);
		this._state.camera.follow(this._player);
		this._state.camera.onFadeComplete.add(this.resetLevel, this);
		this._state.game.paused = true;
		this._pauseBtn = pausebtn;
		this._pauseBtn.inputEnabled = true;
		this._pauseBtn.visible = false;
		
		this._state.fBackground.width=this._state.world.width;
		this._state.fFloor1.width=this._state.world.width;
		this._state.fGrass.width=this._state.world.width;
		

		
		console.log();
		
		this.startTimer();
		
		//manejo de boton de pausa

		this._pauseBtn.events.onInputUp.add(function(pointer) {
	
		this._state.game.paused = true;
				var pause = this._player.sounds.pause.play("pause",0, 0.5, false, true);
				pause.onStop.add(pauseSoundStoped, this);

				function pauseSoundStoped(){
					
				}
				
				
			
		}, this);  

  		this._state.game.input.onDown.add(unpause, this);

  		  function unpause(event){
			
			if(this._state.game.paused){
				
				this._state.game.paused = false;

			}

  		  }


	

	//frinccion del aire	

		this.swipeCoordX, this.swipeCoordY,  this.swipeCoordX2,  this.swipeCoordY2,  this.swipeMinDistance = 0.5;  
		this.AirFriction = 0.5;	
	
		
	//habilitar fisica para todos los objetos	
		this._state.physics.arcade.enable([this._player, this._plataformas, this._enemigos]);
		
	
	//player	
		this._player.body.enable = true;
		this._player.body.setSize(this._player.width/2, this._player.height, this._player.width/4, 0);
		this._player.body.allowGravity = true;
		this._player.body.collideWorldBounds = true;
		this._velocity = this._player.body.velocity;
		this._velocity.y = 0;
		this._state.physics.arcade.enable(this._player);

	//coins


		this._arcade.enable(this._coins, true);
		this._coins.setAll("body.allowGravity", true);
		this._coins.setAll("body.immovable", false);
		this._coins.setAll("body.collideWorldBounds", false);
		
	//enemigos1	
		
		this._arcade.enable(this._enemigos, true);
		this._enemigos.setAll("body.allowGravity", true);
		this._enemigos.setAll("body.immovable", false);
		this._enemigos.setAll("body.collideWorldBounds", true);

	//enemigos2
		
		this._arcade.enable(this._enemigos2, true);
		this._enemigos2.setAll("body.allowGravity", true);
		this._enemigos2.setAll("body.immovable", false);
		this._enemigos2.setAll("body.collideWorldBounds", true);

		//enemigos3
		
		this._arcade.enable(this._enemigos3, true);
		this._enemigos3.setAll("body.allowGravity", true);
		this._enemigos3.setAll("body.immovable", false);
		this._enemigos3.setAll("body.collideWorldBounds", true);
		
		
	//plataformas
		this._arcade.enable(this._plataformas, true);
		this._plataformas.setAll("body.allowGravity", false);
		this._plataformas.setAll("body.immovable", true);
		this._plataformas.setAll("body.friccion", false);

	//plataformas movibles
		this._arcade.enable(this._platafmove, true);
		this._platafmove.setAll("body.allowGravity", false);
		this._platafmove.setAll("body.immovable", true);
		this._platafmove.setAll("body.friccion", false);
		this._platafmove.setAll("body.velocity.x", 100);

	//manejo de vidas


		//console.log("lifes remaing " + this._vidas);
		if(this._vidas>=0){

		
		this._corazones.forEach(function(corazon) {
			
			corazon.visible=false;

		}, this);


		for(var i = 0; i<this._vidas; i++ ){

			this._corazones.children[i].visible=true;
		}
		
		}else{

			Rune.gameOver();
	

		//this._state.game.state.start("GoverScene",true, true, this._state.state.getCurrentState().LevelNumber); //pantalla de game over

		}		

	//poner intro musical dependiendo del nivel
	if( this._state.state.getCurrentState().key == "Level" || this._state.state.getCurrentState().key == "Level5" || this._state.state.getCurrentState().key == "Level10" || this._state.state.getCurrentState().key == "Level15" || this._state.state.getCurrentState().key == "Level20"){

		var iniSound = this._player.sounds.fxBGSound.play("bgSound",0, 0.5, false, true);
		iniSound.onStop.add(soundStopped, this);
		this._firstime = false;

	}else{
		if(this._state.state.getCurrentState().key == "GoverScene"){


		}else{
		iniSound = this._player.sounds.fxBGSound2.play("bgSound2",0, 0.5, false, true);
		iniSound.onStop.add(soundStopped, this);	
		}
		
	}
		

		

	function soundStopped(sound) {	}
	// touchScreen
		this._canFly = true;
		this._state.input.addPointer();



		this._state.input.onDown.add(function(pointer) {
			

			this.swipeCoordX = pointer.clientX;   
		

			
		}, this);   

		this._state.input.onUp.add(function(pointer) { 
		
			this.swipeCoordX2 = pointer.clientX;        
	    
			
			this.Dx = Math.abs(this.swipeCoordX - this.swipeCoordX2);
		

			if(this.Dx >=this.maxPower){

				this.Dx = this.maxPower;

			}

			
			//implementar on input down 

    	this._state.game.input.onTap.add(function(puntero){
    		
    		this._player.sounds.fxPblow.play("playerBlow");
 			

    	}, this);	
			

	
		if(this.swipeCoordX2 < this.swipeCoordX - this.swipeMinDistance){            
		
			//console.log("left");  
			this.dirX=-1;	
	 	
		}
	
		if(this.swipeCoordX2 > this.swipeCoordX + this.swipeMinDistance){            
			
			this.dirX=1;
			//console.log("rigth");  
	 	
		}
	
		

	 	this.veloX = 200;

		}, this);


	
	

		this._enemigos.forEach(function(enemy) { //funcionamiento enemigos tipo 1 (hard)
    		
    		enemy.body.setSize(enemy.width/2, enemy.height, enemy.width/4, 0);
    		
    		 CurrentState = enemy.data;
    		 CurrentPlayer = CurrentState.game.fPlayer;

			this._state.time.events.loop(2000, updateCounter);


			function updateCounter(){

				
				this.enemyDir = Math.sign(this.CurrentPlayerX - enemy.x);


				this.CurrentPlayerX = CurrentPlayer.x;
				this.CurrentPlayerY = CurrentPlayer.y;

				if(this.CurrentPlayerX < CurrentState.game.world.width/2){

						if(this.CurrentPlayerY < CurrentState.game.world.height/2){

						this.enemyPowerX=100;	
							//console.log("jugador en cuadrante 1");
						this.enemyPowerY=400;	

						}else{
							this.enemyPowerX=100;	
							this.enemyPowerY=100;	

							//console.log("jugador en cuadrante 3");

						}
							
				}else{

					if(this.CurrentPlayerY < CurrentState.game.world.height/2){
						this.enemyPowerX=100;	
						this.enemyPowerY=400;	
							//console.log("jugador en cuadrante 2");
						
						}else{
						this.enemyPowerY=100;	
							//console.log("jugador en cuadrante 4");
						}
				}



				enemy.body.velocity.x=this.enemyPowerX*this.enemyDir;
				enemy.body.velocity.y=-this.enemyPowerY;

		

			}

  		}, this);


		this._enemigos2.forEach(function(enemy) { //funcionamiento enemigos tipo 2 (medium)
    		

    		enemy.body.setSize(enemy.width/2, enemy.height, enemy.width/4, 0);
    		
    		 CurrentState = enemy.data;
    		 CurrentPlayer = CurrentState.game.fPlayer;
    	
			this._state.time.events.loop(Math.abs(Math.random()*4000), updateCounter);


			function updateCounter(){

				//console.log(this.CurrentPlayerY - enemy.y);
				this.enemyPowerX2 = Math.abs(this.CurrentPlayerX - enemy.x);
				this.enemyDir2 = Math.sign(this.CurrentPlayerX - enemy.x);
				
				if(enemyPowerX2 > 50){
					enemyPowerX2 = 50;

				}
				if(this.CurrentPlayerY > enemy.y){

					this.enemyPowerY2 = 0;

				}else{

					this.enemyPowerY2= Math.abs(this.CurrentPlayerY - enemy.y);
					
					
				}

				this.CurrentPlayerX = CurrentPlayer.x;
				this.CurrentPlayerY = CurrentPlayer.y;

				if(this.CurrentPlayerX < CurrentState.game.world.width/2){

						if(this.CurrentPlayerY < CurrentState.game.world.height/2){

						this.enemyPower2Y=300;	
							//console.log("jugador en cuadrante 1");
						
						}else{
							
						this.enemyPower2Y=0;	

							//console.log("jugador en cuadrante 3");

						}
							
				}else{

					if(this.CurrentPlayerY < CurrentState.game.world.height/2){
						this.enemyPower2Y=300;	
							//console.log("jugador en cuadrante 2");
						
						}else{
						this.enemyPower2Y=0;	
							//console.log("jugador en cuadrante 4");
						}
				}	

				enemy.body.velocity.x=this.enemyPowerX2*this.enemyDir2;
				enemy.body.velocity.y=-this.enemyPower2Y;
		

			}

  		}, this);
  		
  	
	this._enemigos3.forEach(function(enemy) { //funcionamiento enemigos tipo 3 (easy)
    		
    		enemy.body.setSize(enemy.width/2, enemy.height, enemy.width/4, 0);
    		
    		 CurrentState = enemy.data;
    		 CurrentPlayer = CurrentState.game.fPlayer;

			this._state.time.events.loop(1000, updateCounter);


			function updateCounter(){

				
				this.enemyDir3 = Math.round(Math.random()*10);


				this.CurrentPlayerX = CurrentPlayer.x;
				this.CurrentPlayerY = CurrentPlayer.y;

				if(this.CurrentPlayerX < CurrentState.game.world.width/2){

						if(this.CurrentPlayerY < CurrentState.game.world.height/2){

						this.enemyPowerX=100;	
							//console.log("jugador en cuadrante 1");
						this.enemyPowerY=200;	

						}else{
							this.enemyPowerX=100;	
							this.enemyPowerY=50;	

							//console.log("jugador en cuadrante 3");

						}
							
				}else{

					if(this.CurrentPlayerY < CurrentState.game.world.height/2){
						this.enemyPowerX=100;	
						this.enemyPowerY=200;	
							//console.log("jugador en cuadrante 2");
						
						}else{
						this.enemyPowerY=50;	
							//console.log("jugador en cuadrante 4");
						}
				}

				if(this.enemyDir3 > 5){
					enemyPowerY=0;
					this.enemyDir3=-1;

				}else{
					
					if(enemyPowerY<100){
						enemyPowerY=100;

						}
					this.enemyDir3=1;

				}

				enemy.body.velocity.x=this.enemyPowerX*this.enemyDir3;
				enemy.body.velocity.y=-this.enemyPowerY;

		

			}

  		}, this);

	

//pantalla de winning

  		this.winerScreen = new Phaser.Signal();
			
		this.winerScreen.addOnce(this.winScreen, this);
		
		console.log(this._state.camera.x)
	

  		this._state.add.tween(this._levelScreen).to({ y:960 ﻿},500, Phaser.Easing.Bounce.Out, true);
		
		this._state.time.events.loop(1500, upScreen, this );
		
		function upScreen(){

			this._state.add.tween(this._levelScreen).to({ y: 0 ﻿},500, Phaser.Easing.Bounce.Out, true);
		
		}
		

		}


	

	PlatformerBehavior.prototype.winScreen = function() {
		

			this._player.sounds.finLevel.play("finLevel",0, 0.5, false, true);
			this._state.add.tween(this._winScreen).to({ y: 0 ﻿},500, Phaser.Easing.Bounce.Out, true);
			this._state.time.events.add(1700, doGameOver, this );
			
			function doGameOver(){
				Rune.gameOver();
			}
		
		
		};

	PlatformerBehavior.prototype.resetLevel = function() {
	
		this._vidas--;
		this._state.game.state.restart(this.CurrentState, true, this._vidas);

		};

	PlatformerBehavior.prototype.NextLevel = function() {

		//this._player.game.camera.fade(0x000000, 200);

		//this._state.game.state.start(this._nextLevel, true, true, this._vidas);
		

		};

		PlatformerBehavior.prototype.formatTime=function(seconds){
			// Minutes
			var minutes = Math.floor(seconds/60);
			// Seconds
			var partInSeconds = seconds%60;
			// Adds left zeros to seconds
			partInSeconds = partInSeconds.toString().padStart(2,'0');
			// Returns formated time
			return `${minutes}:${partInSeconds}`;
		}
		
		PlatformerBehavior.prototype.startTimer = function() {
			 //  Create our Timer
	
			
	
		   this._state.time.events.loop(1000, function(){
		    	this.initialTime++;
		    	this.elapsedTimer = this.formatTime(this.initialTime);
		       	this.fTimerText.text=this.elapsedTimer;
		    }, this );
		
		}
		
		
	
		PlatformerBehavior.prototype.coining=function(player, coin){
			
		

				player.sounds.fxCoin.play("coin");
				coin.visible = false;
				
				var currentScore = player.data.score;
				currentScore+=100;
				
				var newScore=currentScore-player.game.state.getCurrentState().behavior.initialTime;
				if(newScore<=0){
					newScore=0;
				}
				
				coin.destroy();
				console.log(newScore);
				player.data.score=newScore;
				return newScore;
				
			

			
		}
	PlatformerBehavior.prototype.update = function() {

		this._levelScreen.x=this._state.camera.x;
		this._winScreen.x=this._state.camera.x;
		
		this._arcade.collide(this._player, this._plataformas);
		this._arcade.collide(this._player, this._platafmove);

		this._arcade.collide(this._plataformas, this._enemigos, bounceAbit);
		this._arcade.collide(this._plataformas, this._enemigos2, bounceAbit);
		this._arcade.collide(this._plataformas, this._enemigos3, bounceAbit);

		this._arcade.collide(this._platafmove, this._enemigos, bounceAbit);
		this._arcade.collide(this._platafmove, this._enemigos2, bounceAbit);
		this._arcade.collide(this._platafmove, this._enemigos3, bounceAbit);
		
		this._arcade.collide(this._platafmove, this._coins, bounceAbit);
		this._arcade.collide(this._plataformas, this._coins, bounceAbit);

		this._platafmove.forEach(this.updatePlatform, this);		

		if(this._playing ){

		if (this._state.input.activePointer.isDown)
	    {
	    	if(this._canFly){

	    		  this._velocity.y = -150;
	    	}
	    
	    }
	   
		
		this._arcade.overlap(this._player, this._coins, this.coining);
		this._arcade.collide(this._enemigos, this._enemigos);
		this._arcade.collide(this._enemigos2, this._enemigos);
		this._arcade.collide(this._enemigos2, this._enemigos2);
		this._arcade.collide(this._enemigos3, this._enemigos);
		this._arcade.collide(this._enemigos3, this._enemigos2);
		this._arcade.collide(this._enemigos3, this._enemigos3);
		this._arcade.collide(this._player, this._enemigos,touchingEnemy);
		this._arcade.collide(this._player, this._enemigos2,touchingEnemy);
		this._arcade.collide(this._player, this._enemigos3,touchingEnemy);


	
	}else{

	this._enemigos3.forEach(function(enemy) { 	
		enemy.visible = false;
		//enemy.body.collide = false;

	}, this);

	this._enemigos2.forEach(function(enemy) { 	
		enemy.visible = false;
		//enemy.body.collide = false;

	}, this);


	this._enemigos.forEach(function(enemy) { 	
		enemy.visible = false;
	//	enemy.body.collide = false;

	}, this);
}

		if(this._coins.length <= 0 ){

			this.winerScreen.dispatch();
			this._playing = false;
		
			//this._state.time.events.loop(3000, this.NextLevel, this );
			

		}

	

	
		function touchingEnemy(player, enemy){
		
			
		
			player.data.game.camera.fade(0x000000, 3000);
			player.visible = false;
			player.sounds.dead.play("dead",0, 0.5, false, true);
			player.kill();


		}

		function bounceAbit(entity, platform){
			entity.body.bounce.set(0.8);
			
		}

		//reducción de velocidad de player en eje x
		
		if(this.Dx>=0){
			this.Dx-=this.AirFriction;	
		}else{

			this.Dx=0;
		}
		
		this._velocity.x=this.Dx*this.dirX;
	
		
		if(this._velocity.x>0.5){
		
			this._state.fPlayer.rotation=0.1;		
		}
		if(this._velocity.x<-0.5){
			this._state.fPlayer.rotation=-0.1;	
		}
		
		if(this._velocity.x>-0.5 && this._velocity.x<0.5){
			this._state.fPlayer.rotation=0;	
		}
	

	};
	



PlatformerBehavior.prototype.updatePlatform = function(platform) {


	

	if(typeof platform.originalPos == 'undefined'){
	
	platform.originalPos = platform.body.position.x;
	platform.distance = platform.width;
	
	
	}else{

		var velo = platform.body.velocity;

	

		if(platform.distance<=0){
			velo.x *= -1;
			 platform.distance = platform.width ;

		}

		
		platform.distance--;

	}
	
};





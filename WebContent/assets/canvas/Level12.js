
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level12.
 */
function Level12() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level12_proto = Object.create(Phaser.State.prototype);
Level12.prototype = Level12_proto;
Level12.prototype.constructor = Level12;

Level12.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
		this.LevelNumber = "Opaque bolt";
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level12.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level12.prototype.create = function () {
	var _grass = this.add.sprite(0.0, 807.0, 'grass');
	
	var _background = this.add.tileSprite(0.0, 0.0, 640.0, 960.0, 'background', null);
	
	var _Plataformas = this.add.group();
	
	this.add.sprite(302.0, 343.0, 'platformTipo1', null, _Plataformas);
	
	var _floor1 = new Piso(this.game, 0.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo = new Platform1(this.game, -70.0, 558.0);
	_Plataformas.add(_platformTipo);
	
	this.add.sprite(830.0, 525.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(1329.0, 461.0, 'montain2', null, _Plataformas);
	
	var _baseMontain = this.add.sprite(917.0, 556.0, 'baseMontain2', null, _Plataformas);
	_baseMontain.scale.set(0.5, 1.0);
	
	var _baseMontain = this.add.sprite(1400.0, 556.0, 'baseMontain2', null, _Plataformas);
	_baseMontain.scale.set(0.5, 1.0);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 282.0, 680.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 420.0, 274.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 55.0, 490.0);
	_Coins.add(_coinStar2);
	
	var _coinStar3 = new CoinStar(this.game, 12.0, 133.0);
	_Coins.add(_coinStar3);
	
	var _coinStar1 = new CoinStar(this.game, 905.0, 223.0);
	_Coins.add(_coinStar1);
	
	var _coinStar1 = new CoinStar(this.game, 1351.0, 380.0);
	_Coins.add(_coinStar1);
	
	var _coinStar1 = new CoinStar(this.game, 1241.0, 765.0);
	_Coins.add(_coinStar1);
	
	var _coinStar1 = new CoinStar(this.game, 1771.0, 591.0);
	_Coins.add(_coinStar1);
	
	var _coinStar1 = new CoinStar(this.game, 705.0, 310.0);
	_Coins.add(_coinStar1);
	
	var _Enemies = this.add.group();
	
	var _enemy = new Enemy3(this.game, 517.0, 849.0);
	_Enemies.add(_enemy);
	
	var _enemy = new Enemy3(this.game, 1136.0, 192.0);
	_Enemies.add(_enemy);
	
	var _EnemyL2 = this.add.group();
	
	var _enemy1 = new Enemy2(this.game, 302.0, 255.0);
	_EnemyL2.add(_enemy1);
	
	var _enemy1 = new Enemy2(this.game, 956.0, 396.0);
	_EnemyL2.add(_enemy1);
	
	var _enemy1 = new Enemy2(this.game, 1474.0, 265.0);
	_EnemyL2.add(_enemy1);
	
	var _lives = this.add.group();
	
	var _vida = new Vida(this.game, 15.0, 20.0);
	_lives.add(_vida);
	
	var _vida1 = new Vida(this.game, 86.0, 20.0);
	_lives.add(_vida1);
	
	var _vida2 = new Vida(this.game, 158.0, 20.0);
	_lives.add(_vida2);
	
	var _EnemyL3 = this.add.group();
	
	var _plataformasMove = this.add.group();
	_plataformasMove.position.set(471.0, 267.0);
	
	this.add.sprite(-490.0, -64.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(-220.0, 479.0, 'platformTipo3', null, _plataformasMove);
	
	var _player = new Player(this.game, 81.0, 882.0);
	this.add.existing(_player);
	
	var _greatJobScreen = this.add.sprite(0.0, -960.0, 'greatJobScreen');
	
	var _pauseBtn = this.add.sprite(555.0, 9.0, 'pauseBtn');
	
	var _ScreenLevel = this.add.group();
	
	var _LevelScreen = this.add.sprite(0.0, -this.game.height, 'LevelScreen', null, _ScreenLevel);
	
	var _PixelFont = this.add.bitmapText(408.0, -438.0, 'PixelFont', '1', 80, _ScreenLevel);
	
	var _BtnQuestion = this.add.sprite(10.0, 20.0, 'BtnQuestion');
	_BtnQuestion.fixedToCamera = true;
	
	var HelpWindowgroup = this.add.group();
	var _HelpWindow = this.add.sprite(10.0, 20.0, 'HelpWindow', null, HelpWindowgroup);
	_HelpWindow.fixedToCamera = true;
	var _BtnClose = this.add.sprite(25.0, 35.0, 'BtnClose', null, HelpWindowgroup);
	_BtnClose.fixedToCamera = true;

	HelpWindowgroup.visible = false;

	_BtnQuestion.inputEnabled = true;
	_BtnQuestion.events.onInputDown.add(function() {
		HelpWindowgroup.visible = true;
		this.world.bringToTop(HelpWindowgroup); // Asegura que esté al frente
		this.game.paused = true; // Pausa el juego
	}, this);

	_BtnClose.inputEnabled = true;
	_BtnClose.events.onInputDown.add(function() {
		this.game.paused = false; // Quita el pause
		HelpWindowgroup.visible = false;
	
	}, this);
	
	// fields
	
	this.fGrass = _grass;
	this.fBackground = _background;
	this.fPlataformas = _Plataformas;
	this.fFloor1 = _floor1;
	this.fPlatformTipo = _platformTipo;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar3 = _coinStar3;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar1 = _coinStar1;
	this.fEnemies = _Enemies;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
	this.fEnemyL2 = _EnemyL2;
	this.fEnemy1 = _enemy1;
	this.fEnemy1 = _enemy1;
	this.fEnemy1 = _enemy1;
	this.fLives = _lives;
	this.fEnemyL3 = _EnemyL3;
	this.fPlataformasMove = _plataformasMove;
	this.fPlayer = _player;
	this.fGreatJobScreen = _greatJobScreen;
	this.fPauseBtn = _pauseBtn;
	this.fScreenLevel = _ScreenLevel;
	this.fLevelScreen = _LevelScreen;
	this.fPixelFont = _PixelFont;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level12.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level12.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level13",this.fScreenLevel, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level12.prototype.update = function () {
	this.behavior.update();
};


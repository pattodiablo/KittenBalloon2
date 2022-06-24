
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level17.
 */
function Level17() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level17_proto = Object.create(Phaser.State.prototype);
Level17.prototype = Level17_proto;
Level17.prototype.constructor = Level17;

Level17.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
		this.LevelNumber = 17;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level17.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level17.prototype.create = function () {
	var _background = this.add.tileSprite(0.0, 0.0, 640.0, 960.0, 'background', null);
	
	var _grass = this.add.sprite(0.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _floor1 = new Piso(this.game, 0.0, 960.0);
	_Plataformas.add(_floor1);
	
	this.add.sprite(-4.0, 318.0, 'platformTipo2', null, _Plataformas);
	
	this.add.sprite(234.0, 183.0, 'platformTipo2', null, _Plataformas);
	
	this.add.sprite(474.0, 351.0, 'platformTipo2', null, _Plataformas);
	
	this.add.sprite(497.0, 757.0, 'platformTipo2', null, _Plataformas);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 515.0, 284.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 275.0, 115.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 171.0, 471.0);
	_Coins.add(_coinStar2);
	
	var _coinStar3 = new CoinStar(this.game, 41.0, 247.0);
	_Coins.add(_coinStar3);
	
	var _Enemies = this.add.group();
	
	var _enemy = new Enemy3(this.game, 251.0, 267.0);
	_Enemies.add(_enemy);
	
	var _EnemyL2 = this.add.group();
	
	var _enemy1 = new Enemy2(this.game, 519.0, 665.0);
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
	
	this.add.sprite(-331.0, 271.0, 'platformTipo3', null, _plataformasMove);
	
	var _player = new Player(this.game, 81.0, 882.0);
	this.add.existing(_player);
	
	var _greatJobScreen = this.add.sprite(0.0, -960.0, 'greatJobScreen');
	
	var _pauseBtn = this.add.sprite(555.0, 9.0, 'pauseBtn');
	
	var _ScreenLevel = this.add.group();
	
	var _LevelScreen = this.add.sprite(0.0, -960.0, 'LevelScreen', null, _ScreenLevel);
	
	var _PixelFont = this.add.bitmapText(408.0, -438.0, 'PixelFont', '1', 80, _ScreenLevel);
	
	
	
	// fields
	
	this.fBackground = _background;
	this.fGrass = _grass;
	this.fPlataformas = _Plataformas;
	this.fFloor1 = _floor1;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar3 = _coinStar3;
	this.fEnemies = _Enemies;
	this.fEnemy = _enemy;
	this.fEnemyL2 = _EnemyL2;
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

Level17.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level17.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level18",this.fScreenLevel, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level17.prototype.update = function () {
	this.behavior.update();
};


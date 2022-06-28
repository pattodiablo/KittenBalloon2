
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level3.
 */
function Level3() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level3_proto = Object.create(Phaser.State.prototype);
Level3.prototype = Level3_proto;
Level3.prototype.constructor = Level3;

Level3.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
	
		this.LevelNumber = 3;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level3.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level3.prototype.create = function () {
	var _background = this.add.tileSprite(0.0, 0.0, 640.0, 960.0, 'background', null);
	
	var _grass = this.add.sprite(0.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _floor1 = new Piso(this.game, 0.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo = new Platform1(this.game, 382.0, 655.0);
	_Plataformas.add(_platformTipo);
	
	var _platformTipo1 = new Platform1(this.game, -217.0, 207.0);
	_Plataformas.add(_platformTipo1);
	
	var _platformTipo2 = new Platform1(this.game, 387.0, 215.0);
	_Plataformas.add(_platformTipo2);
	
	this.add.sprite(778.0, 651.0, 'baseMontain2', null, _Plataformas);
	
	this.add.sprite(322.0, 837.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(552.0, 913.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(778.0, 598.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(-84.0, 824.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(-148.0, 639.0, 'montain2', null, _Plataformas);
	
	var _platformTipo2 = new Platform1(this.game, 1404.0, 741.0);
	_Plataformas.add(_platformTipo2);
	
	var _montain = this.add.sprite(1637.0, 144.0, 'montain2', null, _Plataformas);
	_montain.scale.set(1.0, -1.0);
	
	var _montain = this.add.sprite(1356.0, 77.0, 'montain2', null, _Plataformas);
	_montain.scale.set(1.0, -1.0);
	
	var _montain = this.add.sprite(869.0, 75.0, 'montain2', null, _Plataformas);
	_montain.scale.set(1.0, -1.0);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 564.0, 720.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 477.0, 430.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 379.0, 118.0);
	_Coins.add(_coinStar2);
	
	var _coinStar = new CoinStar(this.game, 1413.0, 293.0);
	_Coins.add(_coinStar);
	
	var _coinStar2 = new CoinStar(this.game, 1518.0, 601.0);
	_Coins.add(_coinStar2);
	
	var _coinStar2 = new CoinStar(this.game, 1801.0, 819.0);
	_Coins.add(_coinStar2);
	
	var _Enemies = this.add.group();
	
	var _EnemyL2 = this.add.group();
	
	var _enemy = new Enemy2(this.game, 1236.0, 25.0);
	_EnemyL2.add(_enemy);
	
	var _enemy = new Enemy2(this.game, 1184.0, 827.0);
	_EnemyL2.add(_enemy);
	
	var _lives = this.add.group();
	
	var _vida = new Vida(this.game, 15.0, 20.0);
	_lives.add(_vida);
	
	var _vida1 = new Vida(this.game, 86.0, 20.0);
	_lives.add(_vida1);
	
	var _vida2 = new Vida(this.game, 158.0, 20.0);
	_lives.add(_vida2);
	
	var _EnemyL3 = this.add.group();
	
	var _enemy = new Enemy(this.game, -6.0, 138.0);
	_EnemyL3.add(_enemy);
	
	var _enemy = new Enemy(this.game, 510.0, 110.0);
	_EnemyL3.add(_enemy);
	
	var _plataformasMove = this.add.group();
	_plataformasMove.position.set(471.0, 267.0);
	
	this.add.sprite(-380.0, 230.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(909.0, 141.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(546.0, -11.0, 'platformTipo3', null, _plataformasMove);
	
	var _player = new Player(this.game, 42.0, 583.0);
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
	this.fPlatformTipo = _platformTipo;
	this.fPlatformTipo1 = _platformTipo1;
	this.fPlatformTipo2 = _platformTipo2;
	this.fPlatformTipo2 = _platformTipo2;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar = _coinStar;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar2 = _coinStar2;
	this.fEnemies = _Enemies;
	this.fEnemyL2 = _EnemyL2;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
	this.fLives = _lives;
	this.fEnemyL3 = _EnemyL3;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
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

Level3.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level3.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level4",this.fScreenLevel, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level3.prototype.update = function () {
	this.behavior.update();
};


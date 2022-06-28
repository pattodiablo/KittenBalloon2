
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level19.
 */
function Level19() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level19_proto = Object.create(Phaser.State.prototype);
Level19.prototype = Level19_proto;
Level19.prototype.constructor = Level19;

Level19.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
		this.LevelNumber = 19;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level19.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level19.prototype.create = function () {
	var _background = this.add.tileSprite(0.0, 0.0, 640.0, 960.0, 'background', null);
	
	var _grass = this.add.sprite(0.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	this.add.sprite(-218.0, 208.0, 'platformTipo1', null, _Plataformas);
	
	var _floor1 = new Piso(this.game, 0.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo = new Platform1(this.game, 354.0, 873.0);
	_Plataformas.add(_platformTipo);
	
	var _platformTipo4 = new Platform1(this.game, 566.0, 260.0);
	_Plataformas.add(_platformTipo4);
	
	var _platformTipo = new Platform1(this.game, -119.0, 613.0);
	_Plataformas.add(_platformTipo);
	
	var _platformTipo = new Platform1(this.game, 1634.0, 262.0);
	_Plataformas.add(_platformTipo);
	
	var _platformTipo4 = new Platform1(this.game, 1004.0, 434.0);
	_Plataformas.add(_platformTipo4);
	
	var _platformTipo4 = new Platform1(this.game, 1716.0, 640.0);
	_Plataformas.add(_platformTipo4);
	
	this.add.sprite(930.0, 861.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(1447.0, 899.0, 'montain2', null, _Plataformas);
	
	var _platformTipo = new Platform1(this.game, 1704.0, -20.0);
	_Plataformas.add(_platformTipo);
	
	this.add.sprite(1193.0, 787.0, 'montain2', null, _Plataformas);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 463.0, 481.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 430.0, 781.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, -163.0, 381.0);
	_Coins.add(_coinStar2);
	
	var _coinStar3 = new CoinStar(this.game, 12.0, 135.0);
	_Coins.add(_coinStar3);
	
	var _coinStar4 = new CoinStar(this.game, 572.0, 193.0);
	_Coins.add(_coinStar4);
	
	var _coinStar = new CoinStar(this.game, 1556.0, 810.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 1205.0, 119.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 1013.0, 732.0);
	_Coins.add(_coinStar2);
	
	var _coinStar3 = new CoinStar(this.game, 786.0, 187.0);
	_Coins.add(_coinStar3);
	
	var _coinStar4 = new CoinStar(this.game, 1785.0, 505.0);
	_Coins.add(_coinStar4);
	
	var _Enemies = this.add.group();
	
	var _enemy = new Enemy3(this.game, -3.0, 134.0);
	_Enemies.add(_enemy);
	
	var _enemy = new Enemy3(this.game, 667.0, 141.0);
	_Enemies.add(_enemy);
	
	var _enemy = new Enemy3(this.game, 1691.0, 167.0);
	_Enemies.add(_enemy);
	
	var _enemy = new Enemy3(this.game, 1738.0, 555.0);
	_Enemies.add(_enemy);
	
	var _enemy = new Enemy3(this.game, 1001.0, 741.0);
	_Enemies.add(_enemy);
	
	var _EnemyL2 = this.add.group();
	
	var _enemy1 = new Enemy2(this.game, 530.0, 455.0);
	_EnemyL2.add(_enemy1);
	
	var _enemy1 = new Enemy2(this.game, 1119.0, 315.0);
	_EnemyL2.add(_enemy1);
	
	var _enemy1 = new Enemy2(this.game, 1285.0, 676.0);
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
	
	this.add.sprite(-671.0, 183.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(-12.0, 276.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(697.0, -73.0, 'platformTipo3', null, _plataformasMove);
	
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
	this.fPlatformTipo = _platformTipo;
	this.fPlatformTipo4 = _platformTipo4;
	this.fPlatformTipo = _platformTipo;
	this.fPlatformTipo = _platformTipo;
	this.fPlatformTipo4 = _platformTipo4;
	this.fPlatformTipo4 = _platformTipo4;
	this.fPlatformTipo = _platformTipo;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar3 = _coinStar3;
	this.fCoinStar4 = _coinStar4;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar3 = _coinStar3;
	this.fCoinStar4 = _coinStar4;
	this.fEnemies = _Enemies;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
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

Level19.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level19.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level20",this.fScreenLevel, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level19.prototype.update = function () {
	this.behavior.update();
};


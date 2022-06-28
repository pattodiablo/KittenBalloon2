
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level5.
 */
function Level5() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level5_proto = Object.create(Phaser.State.prototype);
Level5.prototype = Level5_proto;
Level5.prototype.constructor = Level5;

Level5.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
		this.LevelNumber = 5;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level5.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level5.prototype.create = function () {
	var _background = this.add.tileSprite(0.0, 0.0, 640.0, 960.0, 'background', null);
	
	var _grass = this.add.sprite(0.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _floor1 = new Piso(this.game, 0.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo = new Platform1(this.game, 1303.0, 575.0);
	_Plataformas.add(_platformTipo);
	
	var _platformTipo2 = new Platform1(this.game, 341.0, 434.0);
	_Plataformas.add(_platformTipo2);
	
	var _platformTipo = new Platform1(this.game, -67.0, 178.0);
	_Plataformas.add(_platformTipo);
	
	this.add.sprite(-20.0, 833.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(244.0, 793.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(493.0, 870.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(747.0, 777.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(1025.0, 850.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(1172.0, 777.0, 'montain2', null, _Plataformas);
	
	this.add.sprite(1745.0, 818.0, 'montain2', null, _Plataformas);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 49.0, 366.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 387.0, 589.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 441.0, 111.0);
	_Coins.add(_coinStar2);
	
	var _coinStar = new CoinStar(this.game, 633.0, 256.0);
	_Coins.add(_coinStar);
	
	var _coinStar = new CoinStar(this.game, 1322.0, 359.0);
	_Coins.add(_coinStar);
	
	var _coinStar = new CoinStar(this.game, 1438.0, 502.0);
	_Coins.add(_coinStar);
	
	var _coinStar = new CoinStar(this.game, 1072.0, 723.0);
	_Coins.add(_coinStar);
	
	var _coinStar = new CoinStar(this.game, 1567.0, 847.0);
	_Coins.add(_coinStar);
	
	var _plataformasMove = this.add.group();
	_plataformasMove.position.set(981.0, 283.0);
	
	this.add.sprite(-390.0, 53.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(295.0, 143.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(-54.0, -73.0, 'platformTipo3', null, _plataformasMove);
	
	this.add.sprite(-1000.0, 303.0, 'platformTipo3', null, _plataformasMove);
	
	var _Enemies = this.add.group();
	
	var _EnemyL2 = this.add.group();
	
	var _lives = this.add.group();
	
	var _vida = new Vida(this.game, 15.0, 20.0);
	_lives.add(_vida);
	
	var _vida1 = new Vida(this.game, 86.0, 20.0);
	_lives.add(_vida1);
	
	var _vida2 = new Vida(this.game, 158.0, 20.0);
	_lives.add(_vida2);
	
	var _EnemyL3 = this.add.group();
	
	var _enemy = new Enemy(this.game, 514.0, 110.0);
	_EnemyL3.add(_enemy);
	
	var _enemy = new Enemy3(this.game, 766.0, 595.0);
	_EnemyL3.add(_enemy);
	
	var _enemy = new Enemy3(this.game, 1803.0, 83.0);
	_EnemyL3.add(_enemy);
	
	var _EnemyL2 = this.add.group();
	_EnemyL2.position.set(829.0, 471.0);
	
	var _enemy = new Enemy2(this.game, 1236.0, 25.0);
	_EnemyL2.add(_enemy);
	
	var _enemy = new Enemy2(this.game, 1184.0, 827.0);
	_EnemyL2.add(_enemy);
	
	var _player = new Player(this.game, 116.0, 756.0);
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
	this.fPlatformTipo2 = _platformTipo2;
	this.fPlatformTipo = _platformTipo;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar = _coinStar;
	this.fCoinStar = _coinStar;
	this.fCoinStar = _coinStar;
	this.fCoinStar = _coinStar;
	this.fCoinStar = _coinStar;
	this.fPlataformasMove = _plataformasMove;
	this.fEnemies = _Enemies;
	this.fEnemyL2 = _EnemyL2;
	this.fLives = _lives;
	this.fEnemyL3 = _EnemyL3;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
	this.fEnemyL2 = _EnemyL2;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
	this.fPlayer = _player;
	this.fGreatJobScreen = _greatJobScreen;
	this.fPauseBtn = _pauseBtn;
	this.fScreenLevel = _ScreenLevel;
	this.fLevelScreen = _LevelScreen;
	this.fPixelFont = _PixelFont;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level5.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level5.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level6",this.fScreenLevel, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level5.prototype.update = function () {
	
	this.behavior.update();
};



// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * prueba.
 */
function prueba() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var prueba_proto = Object.create(Phaser.State.prototype);
prueba.prototype = prueba_proto;
prueba.prototype.constructor = prueba;

prueba.prototype.init = function () {
	
};

prueba.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	
};

prueba.prototype.create = function () {
	this.add.sprite(342.0, 114.0, 'coinStar');
	
	
	
};

/* --- end generated code --- */
// -- user code here --
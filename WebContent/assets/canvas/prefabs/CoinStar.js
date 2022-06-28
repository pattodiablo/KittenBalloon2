
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * CoinStar
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Number} aX The x coordinate (in world space) to position the Sprite at.
 * @param {Number} aY The y coordinate (in world space) to position the Sprite at.
 * @param {any} aKey This is the image or texture used by the Sprite during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture or PIXI.Texture.
 * @param {any} aFrame If this Sprite is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
 */
function CoinStar(aGame, aX, aY, aKey, aFrame) {
	Phaser.Sprite.call(this, aGame, aX, aY, aKey || 'AnimationAtlas', aFrame == undefined || aFrame == null? 'coin0000' : aFrame);
	var _anim_shine = this.animations.add('shine', ['coin0000', 'coin0001', 'coin0002', 'coin0003', 'coin0004', 'coin0005', 'coin0006', 'coin0007', 'coin0008', 'coin0009', 'coin0010', 'coin0011', 'coin0012', 'coin0013', 'coin0014'], 12, true);
	_anim_shine.play();
	
	// fields
	
	this.fCoinStar = this;
	
}

/** @type Phaser.Sprite */
var CoinStar_proto = Object.create(Phaser.Sprite.prototype);
CoinStar.prototype = CoinStar_proto;
CoinStar.prototype.constructor = CoinStar;

/* --- end generated code --- */
// -- user code here --
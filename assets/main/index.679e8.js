window.__require=function t(e,o,i){function n(c,s){if(!o[c]){if(!e[c]){var p=c.split("/");if(p=p[p.length-1],!e[p]){var a="function"==typeof __require&&__require;if(!s&&a)return a(p,!0);if(r)return r(p,!0);throw new Error("Cannot find module '"+c+"'")}c=p}var u=o[c]={exports:{}};e[c][0].call(u.exports,function(t){return n(e[c][1][t]||t)},u,u.exports,t,e,o,i)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<i.length;c++)n(i[c]);return n}({AdScript:[function(t,e,o){"use strict";cc._RF.push(e,"fd36a19hqhHJqCiwriw0u1T","AdScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTap,this)},e.prototype.onTap=function(){location.href="https://www.youtube.com/channel/UCZlDXzGoo7d44bwdNObFacg"},r([s],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],Anchor:[function(t,e,o){"use strict";cc._RF.push(e,"c8c76FjAWlNzKQbm0ZmDhFr","Anchor");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c,s=cc._decorator,p=s.ccclass,a=s.property;(function(t){t[t.Top=0]="Top",t[t.Bottom=1]="Bottom",t[t.Left=2]="Left",t[t.Right=3]="Right"})(c||(c={}));var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=c.Left,e.left=0,e}return n(e,t),e.prototype.start=function(){},e.prototype.update=function(){this.updateAnchor()},e.prototype.updateAnchor=function(){var t=cc.view.getDesignResolutionSize().width/2*-1+this.left;this.node.position=cc.v3(Math.max(t,cc.view.getFrameSize().width/2*-1+this.left),this.node.position.y,this.node.position.z)},r([a(cc.Canvas)],e.prototype,"canvas",void 0),r([a],e.prototype,"type",void 0),r([a],e.prototype,"left",void 0),r([p],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],EventBlocker:[function(t,e,o){"use strict";cc._RF.push(e,"ad1b199CPJAu70TSc/m419E","EventBlocker");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=(c.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onEvent,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onEvent,this)},e.prototype.onEvent=function(){},r([s],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],ExplosionScript:[function(t,e,o){"use strict";cc._RF.push(e,"cdc67L8NmJFG7b6XTT/zmBY","ExplosionScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.onLoad=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this)},e.prototype.start=function(){},e.prototype.onTouchStart=function(){this.explosion()},e.prototype.explosion=function(){var t=cc.instantiate(this.explosionPrefab);t.parent=this.node.parent,t.position=this.node.position,cc.audioEngine.playEffect(this.explosionAudio,!1),this.node.destroy()},e.prototype.update=function(){this.node.position.x<cc.Camera.main.node.position.x-500&&this.node.destroy()},e.prototype.onBeginContact=function(t,e,o){"Block"!=o.node.name&&"UnderBlock"!=o.node.name&&"Kanataso"!=o.node.name||this.explosion()},r([p(cc.Prefab)],e.prototype,"explosionPrefab",void 0),r([p(cc.AudioClip)],e.prototype,"explosionAudio",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],ItemScript:[function(t,e,o){"use strict";cc._RF.push(e,"373cda2HqJCxq+7pMOOGCbH","ItemScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.itemType=0,e}return n(e,t),r([p],e.prototype,"itemType",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],ResultScript:[function(t,e,o){"use strict";cc._RF.push(e,"1fd00xE/UFBFZva9MNKP2r3","ResultScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./ResultText"),s=cc._decorator,p=s.ccclass,a=s.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sprite=null,e.defaultSprite=null,e.floatingSprite=null,e.downSprite=null,e.buttonAudio=null,e.score=0,e}return n(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onShareClick,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchUp,this),this.node.on(cc.Node.EventType.MOUSE_UP,this.onTouchUp,this),this.node.on(cc.Node.EventType.MOUSE_ENTER,this.onMouseEnter,this),this.node.on(cc.Node.EventType.MOUSE_LEAVE,this.onMouseLeave,this)},e.prototype.onMouseEnter=function(){this.sprite.spriteFrame=this.floatingSprite},e.prototype.onMouseLeave=function(){this.sprite.spriteFrame=this.defaultSprite},e.prototype.onTouchUp=function(){this.sprite.spriteFrame=this.floatingSprite},e.prototype.onShareClick=function(){var t,e;cc.audioEngine.playEffect(this.buttonAudio,!1),this.sprite.spriteFrame=this.downSprite,t=(t=this.resultText.resultLabel.string.replace("\n",""))+" "+escape("#")+"\u304b\u306a\u305f\u305d\u767b\u6821\u3061\u3083\u308c\u3093\u3058",e="http://twitter.com/share?url="+escape("https://yuk124pg.github.io/kanataso-Birthday2021/")+"&text="+t,null==window.open(e,"_blank","width=600,height=300")&&(location.href=e)},e.prototype.update=function(){},r([a(cc.Sprite)],e.prototype,"sprite",void 0),r([a(cc.SpriteFrame)],e.prototype,"defaultSprite",void 0),r([a(cc.SpriteFrame)],e.prototype,"floatingSprite",void 0),r([a(cc.SpriteFrame)],e.prototype,"downSprite",void 0),r([a(cc.AudioClip)],e.prototype,"buttonAudio",void 0),r([a(c.default)],e.prototype,"resultText",void 0),r([p],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./ResultText":"ResultText"}],ResultText:[function(t,e,o){"use strict";cc._RF.push(e,"769b4PSEbpPJZYEQYMmtFvu","ResultText");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){},e.prototype.setScore=function(t){this.resultLabel.string=t},r([p(cc.Label)],e.prototype,"resultLabel",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],RetryScript:[function(t,e,o){"use strict";cc._RF.push(e,"0f5c0k84cROmpz5gO4T8R1o","RetryScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.sprite=null,e.defaultSprite=null,e.floatingSprite=null,e.downSprite=null,e.buttonAudio=null,e.action=null,e}return n(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onShareClick,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchUp,this),this.node.on(cc.Node.EventType.MOUSE_UP,this.onTouchUp,this),this.node.on(cc.Node.EventType.MOUSE_ENTER,this.onMouseEnter,this),this.node.on(cc.Node.EventType.MOUSE_LEAVE,this.onMouseLeave,this)},e.prototype.onMouseEnter=function(){this.sprite.spriteFrame=this.floatingSprite},e.prototype.onMouseLeave=function(){this.sprite.spriteFrame=this.defaultSprite},e.prototype.onTouchUp=function(){this.sprite.spriteFrame=this.floatingSprite},e.prototype.onShareClick=function(){this.sprite.spriteFrame=this.downSprite,cc.audioEngine.playEffect(this.buttonAudio,!1),cc.director.loadScene("title"),null!=this.action&&this.action()},e.prototype.update=function(){},r([p(cc.Sprite)],e.prototype,"sprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"defaultSprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"floatingSprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"downSprite",void 0),r([p(cc.AudioClip)],e.prototype,"buttonAudio",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],SoundFadeScript:[function(t,e,o){"use strict";cc._RF.push(e,"ae1fagg8UdKFbDz8BVDAjSd","SoundFadeScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./SoundScript"),s=cc._decorator,p=s.ccclass,a=(s.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}var o;return n(e,t),o=e,e.prototype.onLoad=function(){c.default.isMute?o.onMute():o.onUnmute()},e.prototype.update=function(t){o.fading&&(o.currentVolumeRate=Math.max(0,o.currentVolumeRate-t/o.fadeTime),cc.audioEngine.setMusicVolume(o.currentVolumeRate*o.bgmVolume),o.currentVolumeRate<=0&&(o.fading=!1))},e.reset=function(){this.fading=!1,c.default.isMute?this.onMute():this.onUnmute()},e.fadeoutBgm=function(t){void 0===t&&(t=1),0==c.default.isMute&&(this.currentVolumeRate=1,this.fadeTime=t,this.fading=!0)},e.onMute=function(){cc.audioEngine.setEffectsVolume(0),cc.audioEngine.setMusicVolume(0)},e.onUnmute=function(){var t=this.bgmVolume,e=this.effectVolume;cc.audioEngine.setEffectsVolume(e),cc.audioEngine.setMusicVolume(t)},e.bgmVolume=.1,e.effectVolume=.5,e.currentVolumeRate=1,e.fadeTime=1,e.fading=!1,o=r([p],e)}(cc.Component));o.default=a,cc._RF.pop()},{"./SoundScript":"SoundScript"}],SoundScript:[function(t,e,o){"use strict";cc._RF.push(e,"976a0Wjj3RNfLHx3CGsIPKK","SoundScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bgmVolume=.1,e.effectVolume=.5,e}var o;return n(e,t),o=e,e.prototype.onLoad=function(){o.isMute?this.onMute():this.onUnmute()},e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),cc.audioEngine.playMusic(this.bgm,!0)},e.prototype.onTouchStart=function(){this.bgmVolume,this.effectVolume,o.isMute?(this.onUnmute(),console.log("sound on")):(this.onMute(),console.log("sound off"))},e.prototype.onMute=function(){o.isMute=!0,this.sprite.spriteFrame=this.muteSprite,cc.audioEngine.setEffectsVolume(0),cc.audioEngine.setMusicVolume(0)},e.prototype.onUnmute=function(){var t=this.bgmVolume,e=this.effectVolume;o.isMute=!1,this.sprite.spriteFrame=this.normalSprite,cc.audioEngine.setEffectsVolume(e),cc.audioEngine.setMusicVolume(t)},e.isMute=!1,r([p(cc.AudioClip)],e.prototype,"bgm",void 0),r([p(cc.Sprite)],e.prototype,"sprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"normalSprite",void 0),r([p(cc.SpriteFrame)],e.prototype,"muteSprite",void 0),o=r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],TitleScript:[function(t,e,o){"use strict";cc._RF.push(e,"f1a1drnchZEtqLLURl1Bh7V","TitleScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.start=function(){},e.prototype.onStart=function(){0==this.loadingNode.active&&(null!=this.startAudio&&cc.audioEngine.playEffect(this.startAudio,!1),cc.director.loadScene("main")),this.loadingNode.active=!0},r([p(cc.Node)],e.prototype,"loadingNode",void 0),r([p(cc.AudioClip)],e.prototype,"startAudio",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],blockScript:[function(t,e,o){"use strict";cc._RF.push(e,"0694065qQhLIaoJH/0Y7D1G","blockScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isContacted=!1,e.fixedY=0,e}return n(e,t),e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.body=this.getComponent(cc.RigidBody),this.fixedY=this.node.position.y},e.prototype.update=function(){this.isContacted&&this.node.setPosition(this.node.position.x,this.fixedY),this.node.position.x<cc.Camera.main.node.position.x-500&&this.node.destroy()},e.prototype.onTouchStart=function(){},e.prototype.onBeginContact=function(t,e,o){"Block"!=o.node.name&&"UnderBlock"!=o.node.name||0!=this.isContacted||(this.isContacted=!0,this.body.linearVelocity=cc.Vec2.ZERO,void 0!==this.onContactAction&&(this.fixedY=this.onContactAction(this.node.position.y)))},r([s],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],cameraScript:[function(t,e,o){"use strict";cc._RF.push(e,"f73c4uiOdVMxrUBDI3WpK2+","cameraScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.limitX=5e3,e.limitIgnore=!1,e}return n(e,t),e.prototype.start=function(){},e.prototype.update=function(){this.limitIgnore?this.node.setPosition(this.TargetObject.position.x+100,this.node.position.y):this.node.setPosition(Math.min(this.limitX,this.TargetObject.position.x+100),this.node.position.y)},r([p(cc.Node)],e.prototype,"TargetObject",void 0),r([p],e.prototype,"limitX",void 0),r([p],e.prototype,"limitIgnore",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],destoryAreaScript:[function(t,e,o){"use strict";cc._RF.push(e,"eee80hYUmBHm6LoE//55vru","destoryAreaScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.physicsBox=null,e}return n(e,t),e.prototype.start=function(){},e.prototype.onBeginContact=function(t,e,o){"Block"!=o.node.name&&"UnderBlock"!=o.node.name||o.node.destroy()},e.prototype.update=function(){null!=this.physicsBox&&(this.physicsBox.enabled=!1),null==this.physicsBox&&(this.physicsBox=this.node.getComponent(cc.PhysicsBoxCollider))},r([s],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],goalScript:[function(t,e,o){"use strict";cc._RF.push(e,"63580Dtmg1GbYBmgPPw84Nu","goalScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./ResultText"),s=t("./SoundFadeScript"),p=cc._decorator,a=p.ccclass,u=p.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isGoal=!1,e.isFade=!1,e.isStill=!1,e.fadeRate=0,e}return n(e,t),e.prototype.start=function(){this.still.on(cc.Node.EventType.TOUCH_START,this.onTouch,this)},e.prototype.onTouch=function(){this.isStill&&this.fadeRate<=0&&(this.isFade=!0,s.default.fadeoutBgm(1))},e.prototype.update=function(t){this.still.active=this.isStill,0==this.isFade&&this.isStill&&(this.fadeRate=Math.max(0,this.fadeRate-t)),this.isFade&&(this.fadeRate=Math.min(1,this.fadeRate+t),this.fadeRate>=1&&0==this.isStill&&(this.isFade=!1,this.isStill=!0,cc.audioEngine.playMusic(this.birthdayAudio,!0),s.default.reset())),this.isFade&&this.isStill&&this.fadeRate>=1&&(this.resultNode.active=!0,this.resultText.setScore("\u8a95\u751f\u65e5\u3092\n\n\u304a\u795d\u3044\u3057\u3066\u3082\u3089\u3063\u305f\uff01")),this.fade.opacity=255*this.fadeRate},e.prototype.onGoal=function(t){0==this.isGoal&&(this.isFade=!0,this.isGoal=!0,this.stillAnimation.play("goal_"+t),s.default.fadeoutBgm(1))},r([u(cc.Node)],e.prototype,"fade",void 0),r([u(cc.Node)],e.prototype,"still",void 0),r([u(cc.Animation)],e.prototype,"stillAnimation",void 0),r([u(cc.AudioClip)],e.prototype,"birthdayAudio",void 0),r([u(cc.Node)],e.prototype,"resultNode",void 0),r([u(c.default)],e.prototype,"resultText",void 0),r([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./ResultText":"ResultText","./SoundFadeScript":"SoundFadeScript"}],loadingScript:[function(t,e,o){"use strict";cc._RF.push(e,"65de4zW/vFFUZtCml1JNvs7","loadingScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=(c.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.updateTime=.2,e.currentTime=0,e}return n(e,t),e.prototype.start=function(){},e.prototype.update=function(t){this.currentTime+=t,this.currentTime>this.updateTime&&(this.node.rotation+=45,this.currentTime=0)},r([s],e)}(cc.Component));o.default=p,cc._RF.pop()},{}],managerScript:[function(t,e,o){"use strict";cc._RF.push(e,"6e24c6zsw1P54AgkZoYDU1p","managerScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,s=c.ccclass,p=c.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isTitleMode=!1,e.spaceCount=0,e.currentX=0,e.item1_Poped=!1,e.item2_Poped=!1,e.item3_Poped=!1,e.itemPositionCount=0,e.itemPosition={0:1200,1:3e3,2:4e3},e.isNextMaguma=!1,e.serialMagumaCount=0,e.isChimePlayed=!1,e}return n(e,t),e.prototype.start=function(){this.bgmAudio,this.currentX=-225},e.prototype.update=function(t){for(;this.currentX<=this.playerNode.position.x+600;)this.createMap(t),this.currentX+=75;0==this.isTitleMode&&this.currentX>5e3&&0==this.isChimePlayed&&(this.isChimePlayed=!0,cc.audioEngine.playEffect(this.chimeAudio,!1))},e.prototype.createMap=function(){var t;(t=cc.instantiate(this.DamageBlock)).parent=this.BlockParent,t.setPosition(this.currentX,-225),0==this.isTitleMode&&this.itemPositionCount<=2&&this.itemPosition[this.itemPositionCount]<this.currentX?(this.itemPositionCount+=1,this.serialMagumaCount=0,(t=cc.instantiate(this.Block)).parent=this.BlockParent,t.setPosition(this.currentX,-225),0==this.item1_Poped?((t=cc.instantiate(this.Item1Block)).parent=this.BlockParent,t.setPosition(this.currentX,0),this.item1_Poped=!0):0==this.item2_Poped?((t=cc.instantiate(this.Item2Block)).parent=this.BlockParent,t.setPosition(this.currentX,0),this.item2_Poped=!0):0==this.item3_Poped&&((t=cc.instantiate(this.Item3Block)).parent=this.BlockParent,t.setPosition(this.currentX,0),this.item3_Poped=!0)):this.isTitleMode||this.currentX<500||this.currentX>4500||0==this.isNextMaguma&&10*Math.random()<7?((t=cc.instantiate(this.Block)).parent=this.BlockParent,t.setPosition(this.currentX,-225),this.serialMagumaCount=0,0==this.isTitleMode&&this.currentX>1e3&&this.currentX<4500&&10*Math.random()<1?((t=cc.instantiate(this.ExplosionBlock)).parent=this.BlockParent,t.setPosition(this.currentX,-150)):this.currentX>300&&this.currentX<4500&&10*Math.random()<5?((0==this.isTitleMode||0==this.spaceCount||this.spaceCount>2)&&((t=cc.instantiate(this.UnderBlock)).parent=this.BlockParent,t.setPosition(this.currentX,-150)),0==this.isTitleMode&&this.currentX>300&&10*Math.random()<50&&((t=cc.instantiate(this.UnderBlock)).parent=this.BlockParent,t.setPosition(this.currentX,-75)),this.spaceCount=0):this.spaceCount+=1):(this.isNextMaguma=10*Math.random()+this.serialMagumaCount<5,this.serialMagumaCount+=1),(t=cc.instantiate(this.UnderBlock)).parent=this.BlockParent,t.setPosition(this.currentX,-300),(t=cc.instantiate(this.UnderBlock)).parent=this.BlockParent,t.setPosition(this.currentX,-375)},r([p(cc.AudioClip)],e.prototype,"bgmAudio",void 0),r([p(cc.AudioClip)],e.prototype,"chimeAudio",void 0),r([p(cc.Prefab)],e.prototype,"Block",void 0),r([p(cc.Prefab)],e.prototype,"UnderBlock",void 0),r([p(cc.Prefab)],e.prototype,"DamageBlock",void 0),r([p(cc.Prefab)],e.prototype,"ExplosionBlock",void 0),r([p(cc.Prefab)],e.prototype,"Item1Block",void 0),r([p(cc.Prefab)],e.prototype,"Item2Block",void 0),r([p(cc.Prefab)],e.prototype,"Item3Block",void 0),r([p(cc.Node)],e.prototype,"BlockParent",void 0),r([p(cc.Node)],e.prototype,"playerNode",void 0),r([p],e.prototype,"isTitleMode",void 0),r([s],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],playerScript:[function(t,e,o){"use strict";cc._RF.push(e,"691b21oaolD9K8OesKyJWOV","playerScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./goalScript"),s=t("./ItemScript"),p=t("./ResultText"),a=cc._decorator,u=a.ccclass,l=a.property,f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.goalX=5200,e.isGround=!0,e.isJumping=!1,e.reserveJump=!1,e.isGoal=!1,e.isDead=!1,e.deadTime=0,e.item1=0,e.item2=0,e.item3=0,e}return n(e,t),e.prototype.onLoad=function(){cc.director.getPhysicsManager().enabled=!0,cc.director.getPhysicsManager().enabledAccumulator=!0},e.prototype.start=function(){this.node.on(cc.Node.EventType.TOUCH_START,function(){},this),this.ignoreAreaNode.on(cc.Node.EventType.TOUCH_START,function(){},this),this.rigidbody=this.node.getComponent(cc.RigidBody),this.animation=this.node.getComponent(cc.Animation),this.beforePosition=this.node.position},e.prototype.update=function(t){if(this.isDead)this.deadProcess(t);else if(!this.isGoal&&(0==this.isGoal&&this.node.setPosition(this.node.position.x+85*t,this.node.position.y),null!=this.goalResult)){if(this.node.position.y<-500)return this.resultText.setScore("\u5948\u843d\u306e\u5e95\u3078\n\n\u843d\u3061\u3066\u3057\u307e\u3063\u305f\uff01"),void this.onDead();if(this.beforePosition.x>=this.node.position.x)return this.resultText.setScore("\u58c1\u306b\n\n\u5f53\u305f\u3063\u3066\u3057\u307e\u3063\u305f\u2026"),void this.onDead();this.goalX<this.node.position.x&&null!=this.goalResult&&0==this.isGoal&&(this.isGoal=!0,this.goalResult.getComponent(c.default).onGoal(this.getAnimationKey())),this.beforePosition=this.node.position}},e.prototype.jump=function(){null!=this.jumpAudio&&cc.audioEngine.playEffect(this.jumpAudio,!1),this.rigidbody.applyLinearImpulse(cc.v2(0,2e3),cc.Vec2.ZERO,!1),this.isJumping=!0,this.reserveJump=!1},e.prototype.onBeginContact=function(t,e,o){if(!this.isDead)if(e.sensor)"Block"!=o.node.name&&"UnderBlock"!=o.node.name||(this.isGround&&0==this.isJumping?this.jump():0==this.isJumping&&(this.reserveJump=!0));else if(o.node.name.startsWith("Item")){var i=o.node.getComponent(s.default);1==i.itemType?this.item1=1:2==i.itemType?this.item2=1:3==i.itemType&&(this.item3=1),cc.instantiate(this.itemEffect).parent=this.node,this.updateAnimation(),o.node.destroy(),cc.audioEngine.playEffect(this.itemAudio,!1)}else"FireBlock"==o.node.name?(this.resultText.setScore("\u30de\u30b0\u30de\u3067\n\n\u5168\u30ed\u30b9\u3057\u307e\u3057\u305f\u3002"),this.onDead()):this.isGround=!0},e.prototype.onEndContact=function(t,e,o){this.isDead||0==e.sensor&&(o.name.startsWith("Block")||o.name.startsWith("UnderBlock"))&&(this.isGround=!1,this.isJumping=!1)},e.prototype.onDead=function(){null!=this.damageAudio&&cc.audioEngine.playEffect(this.damageAudio,!1),this.isDead=!0,this.playDownAnimation(),this.rigidbody.applyLinearImpulse(cc.v2(-500,2e3),cc.Vec2.ZERO,!1)},e.prototype.deadProcess=function(t){this.deadTime+=t,this.deadTime>1&&(this.resultNode.active=!0)},e.prototype.updateAnimation=function(){this.animation.play("kanata_"+this.getAnimationKey())},e.prototype.playDownAnimation=function(){this.animation.play("kanata_down_"+this.getAnimationKey())},e.prototype.getAnimationKey=function(){return this.item1.toString()+this.item2.toString()+this.item3.toString()},r([l(cc.Node)],e.prototype,"ignoreAreaNode",void 0),r([l(cc.Prefab)],e.prototype,"itemEffect",void 0),r([l(cc.AudioClip)],e.prototype,"jumpAudio",void 0),r([l(cc.AudioClip)],e.prototype,"itemAudio",void 0),r([l(cc.AudioClip)],e.prototype,"damageAudio",void 0),r([l],e.prototype,"goalX",void 0),r([l(cc.Node)],e.prototype,"goalResult",void 0),r([l(cc.Node)],e.prototype,"resultNode",void 0),r([l(p.default)],e.prototype,"resultText",void 0),r([u],e)}(cc.Component);o.default=f,cc._RF.pop()},{"./ItemScript":"ItemScript","./ResultText":"ResultText","./goalScript":"goalScript"}],touchScript:[function(t,e,o){"use strict";cc._RF.push(e,"cf87bJkrEBMSJhpGs34qZDE","touchScript");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=t("./blockScript"),s=cc._decorator,p=s.ccclass,a=s.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.BlockSize=75,e.powerMax=64,e.createPower=64,e}return n(e,t),e.prototype.onLoad=function(){this.createPower=this.powerMax},e.prototype.start=function(){this.TapScreen.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.updateCount()},e.prototype.update=function(){},e.prototype.onTouchStart=function(t){var e=this;if(!(this.createPower<1)){var o=t.getLocationX()-this.Canvas.position.x+this.Camera.position.x,i=t.getLocationY()-this.Canvas.position.y+this.Camera.position.y;o=Math.floor((o+this.BlockSize/2)/this.BlockSize)*this.BlockSize,i=Math.floor((i+this.BlockSize/2)/this.BlockSize)*this.BlockSize;var n=cc.instantiate(this.Block);n.parent=this.BlockParent,n.setPosition(o,i),n.getComponent(cc.RigidBody).linearVelocity=cc.v2(0,-200),n.getComponent(c.default).onContactAction=function(t){return e.getGridYPosition(t)},this.createPower-=1,this.updateCount(),cc.audioEngine.playEffect(this.BlockSound,!1)}},e.prototype.getGridYPosition=function(t){return Math.floor((t+this.BlockSize/2)/this.BlockSize)*this.BlockSize},e.prototype.updateCount=function(){this.BlockCount.string=this.createPower.toString()},r([a(cc.Node)],e.prototype,"Canvas",void 0),r([a(cc.Node)],e.prototype,"Camera",void 0),r([a(cc.Prefab)],e.prototype,"Block",void 0),r([a(cc.AudioClip)],e.prototype,"BlockSound",void 0),r([a(cc.Node)],e.prototype,"BlockParent",void 0),r([a(cc.Node)],e.prototype,"TapScreen",void 0),r([a(cc.Label)],e.prototype,"BlockCount",void 0),r([p],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./blockScript":"blockScript"}]},{},["AdScript","Anchor","EventBlocker","ExplosionScript","ItemScript","ResultScript","ResultText","RetryScript","SoundFadeScript","SoundScript","TitleScript","blockScript","cameraScript","destoryAreaScript","goalScript","loadingScript","managerScript","playerScript","touchScript"]);
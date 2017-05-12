"use strict";
var Carousel = function($e, option){ var THIS = this;
	THIS.$box      = $e;
	THIS.pos       = [];
	THIS.unitwid   = 0;
	THIS.itemcount = THIS.$box.children().length;
	THIS.curr      = 0;
	THIS.flg       = {
		moving:false
	};
	THIS.tm        = null;
	THIS.opt       = $.extend({
		speed   :400,
		ease    :"linear",
		offset  :0,
		autoplay:-1
	}, option);
	
	THIS.adjust();
	
	//remove &nbsp;,\n,\t
	THIS.$box.children().detach().prependTo(THIS.$box.empty());
	//first position
	THIS.$box.children().eq(-1).detach().prependTo(THIS.$box);
	THIS._fixpos();
};
(function(){
this.move = function(rht, cb){ if(cb==null)cb=function(){}; var THIS = this;
	if(THIS.flg.moving){
		return;
	}
	THIS.flg.moving = true;
	
	clearTimeout(THIS.tm);
	
	var moveto = (rht)?(THIS.pos[2]):(THIS.pos[0]),
		lp = 0;
	THIS.$box.children().animate({left:moveto}, THIS.opt.speed, THIS.opt.ease, function(){
		lp++;
		if(lp >= THIS.itemcount){
			if(rht){
				THIS.curr--;
				if(THIS.curr < 0){
					THIS.curr = THIS.itemcount-1;
				}
				THIS.$box.children().eq(-1).detach().prependTo(THIS.$box);
			}else{
				THIS.curr++;
				if(THIS.curr >= THIS.itemcount){
					THIS.curr = 0;
				}
				THIS.$box.children().eq(0).detach().appendTo(THIS.$box);
			}
			THIS._fixpos();
			THIS.flg.moving = false;
			
			cb();
		}
	});
};
this.adjust = function(){ var THIS = this;
	THIS.unitwid = THIS.$box.children().eq(0).outerWidth(true);
	THIS.pos = [
		-2*THIS.unitwid+THIS.opt.offset, //to left
		-1*THIS.unitwid+THIS.opt.offset, //base
		THIS.opt.offset                  //to right
	];
};
this._fixpos = function(){ var THIS = this;
	//position
	THIS.$box.children().css({left:THIS.pos[1]});
	THIS.$box.children().removeClass("curr").eq(1).addClass("curr");
	
	//autoplay
	if(THIS.opt.autoplay !== -1){
		THIS.tm = setTimeout(function(){
			THIS.move(true);
		}, 1000*THIS.opt.autoplay);
	}
};
}).call(Carousel.prototype);
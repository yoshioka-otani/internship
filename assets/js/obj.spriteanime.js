"use strict";
var SpriteAnime = function($e, imgsrc, option){ var THIS=this;
	THIS.$box   = $e;
	THIS.imgsrc = imgsrc;
	THIS.size   = [];
	THIS.flg    = false;
	THIS.timer  = null;
	THIS.curr   = 0;
	THIS.round  = 1;
	THIS.opt    = $.extend({
		img      :"",
		size     :[0,0],
		area     :[1,1],
		range    :[1,1],
		speed    :80,
		progress :"a", // a:ahead, b:back
		direction:"v", // h:horizontal, v:vertical
		onStart  :function(obj){},
		onPause  :function(obj){},
		onStep   :function(obj){},
		onEdge   :function(obj){},
		onRepeat :function(obj){}
	}, option);
	
	if(THIS.opt.progress === "b"){
		THIS.curr = THIS.opt.range[1];
	}else{
		THIS.curr = THIS.opt.range[0];
	}
	THIS.adjust(THIS.opt.size[0], THIS.opt.size[1]);
};

(function(){
this.start = function(){ var THIS=this;
	if(THIS.flg){
		return;
	}
	THIS.flg = true;
	THIS.opt.onStart(THIS);
	
	THIS.timer = setInterval(function(){
		THIS._next();
	}, THIS.opt.speed);
};
this.pause = function(){ var THIS=this;
	clearInterval(THIS.timer);
	THIS.flg = false;
	THIS.opt.onPause(THIS);
};
this.setcurr = function(num){ var THIS=this;
	THIS.curr = num;
	THIS._shift();
};
this.adjust = function(x, y){ var THIS=this;
	THIS.size = [x, y];
	THIS.$box.css({
		width             :x,
		height            :y,
		backgroundImage   :"url("+THIS.imgsrc+")",
		backgroundRepeat  :"no-repeat",
		backgroundSize    :(THIS.opt.area[0]*x)+"px "+(THIS.opt.area[1]*y)+"px",
	});
	THIS._shift();
};

this._next = function(){ var THIS=this;
	var s = THIS._getsta();
	THIS.curr = s.num;
	if(s.status === "edg"){
		THIS.opt.onEdge(THIS);
	}else if(s.status === "rep"){
		THIS.round++;
		THIS.opt.onRepeat(THIS);
	}
	THIS.opt.onStep(THIS);
	THIS._shift();
};
this._getsta = function(){ var THIS=this;
	var n = THIS.curr;
	var sta = "stp";
	
	if(THIS.opt.progress === "b"){
		n--;
		if(n === THIS.opt.range[0]){
			sta = "edg";
		}else if(n < THIS.opt.range[0]){
			sta = "rep";
			n = THIS.opt.range[1];
		}
	}else{
		n++;
		if(n === THIS.opt.range[1]){
			sta = "edg";
		}else if(n > THIS.opt.range[1]){
			sta = "rep";
			n = THIS.opt.range[0];
		}
	}
	return {num:n, status:sta};
};
this._shift = function(){ var THIS=this;
	var c = THIS.curr;
	var a = THIS.opt.area;
	var x;
	var y;
	var str = "";
	if(THIS.opt.direction === "v"){
		x = Math.ceil(c/a[1]);
		y = c-((x-1)*a[1]);
	}else{
		y = Math.ceil(c/a[0]);
		x = c-((y-1)*a[0]);
	}
	str += -1*THIS.size[0]*(x-1)+"px";
	str += " ";
	str += -1*THIS.size[1]*(y-1)+"px";
	
	THIS.$box.css({backgroundPosition:str});
};
}).call(SpriteAnime.prototype);
"use strict";

//################
var Util = function(){ var THIS=this;

THIS.scrolling = false;
THIS.largewin  = false;

};
(function(){

this.sprintf = function(str, prm, withnum){ var THIS=this; if(withnum==null)withnum=false;
	for(var i=0,imax=prm.length; i<imax; i++){ var l=prm[i];
		if(withnum){
			str = str.replace(new RegExp("{%"+(i+1)+"}", "g"), l);
		}else{
			str = str.replace(new RegExp("{%}"), l);
		}
	}
	return str;
};
this.fetchImg = function(imgsrc, err, each, fin){ var THIS=this;
	var obj = [];
	var lp = 0;
	for(var i=0,imax=imgsrc.length; i<imax; i++){
		obj[i] = new Image();
		obj[i]._idx = i;
		obj[i].onerror = function(){
			err(this._idx);
		};
		obj[i].onload = function(){
			each(this._idx);
			lp++;
			if(lp >= imgsrc.length){
				fin();
			}
		};
		obj[i].src = imgsrc[i];
	}
};
this.scroll = function($e, option, cb){ var THIS=this; if(cb==null)cb=function(){};
	if(THIS.scrolling){
		return;
	}
	THIS.scrolling = true;
	
	var opt = $.extend({
		margin  :40,
		duration:400
	}, option);
	
	var pos = 0,
		c = 0;
	if($e && $e.length === 1){
		pos = $e.offset().top-opt.margin;
	}
	$("html,body").animate({scrollTop:pos}, opt.duration, function(){
		c++;
		THIS.scrolling = false;
		if(c > 1){
			cb();
		}
	});
};
this.stepRun = function(fnarr, onfail, onend){ var THIS=this; if(onfail==null)onfail=function(){};if(onend==null)onend=function(){};
	var i = 0,
		exec = function(){
			if(i >= fnarr.length){
				onend();
				return;
			}
			$.when((function(){
				var d = new $.Deferred();
				fnarr[i](d.resolve, d.reject);
				return d.promise();
			})()).then(exec, onfail);
			i++;
		};
	exec();
};
this.removeWs = function($e){ var THIS=this;
	$e.children().detach().prependTo($e.empty());
};
this.onBreakpoint = function(wid, bp, cb){ var THIS=this;
	if(wid){
		THIS.largewin = (bp < $(window).width())?(true):(false);
	}else{
		THIS.largewin = (bp < $(window).height())?(true):(false);
	}
	$(window).on("resize", function(){
		var curr = (wid)?($(window).width()):($(window).height());
		if(THIS.largewin){
			if(bp <= curr){
				return;
			}
			THIS.largewin = false;
		}else{
			if(curr <= bp){
				return;
			}
			THIS.largewin = true;
		}
		cb();
	});
};

}).call(Util.prototype);

var U = new Util();

var CONST = {};
CONST.BREAKPOINT = 800;
CONST.PEOPLEANIME = {
	IMGFILE   :[
		"index/images/sprite/people_a.png",
		"index/images/sprite/people_b.png",
		"index/images/sprite/people_c.png",
		"index/images/sprite/people_d.png",
		"index/images/sprite/people_e.png",
		"index/images/sprite/people_f.png",
		"index/images/sprite/people_g.png",
		"index/images/sprite/people_h.png",
		"index/images/sprite/people_i.png"
	],
	RANGE_01  :[1,8],
	RANGE_02  :[9,16],
	SPEED_01  :240,
	SPEED_02  :240
};
CONST.FLOATANIME = {
	IMGFILE   :[
		"index/images/sprite/link_message.png",
		"index/images/sprite/link_fb.png",
		"index/images/sprite/link_recruit.png"
	],
	SPEED:120
};
CONST.ONDESKANIME = {
	IMGFILE   :[
		"index/images/sprite/link_event.png",
		"index/images/sprite/link_whatsjeki.png",
		"index/images/sprite/link_work.png",
		"index/images/sprite/link_special.png"
	],
	SPEED:120
};

//sprite anime object
var SaPp = [];
var SaFl = [];
var SaDk = [];

var last_window_height = 0;

var anime_people_count = 0;
var anime_people_even = true;

var getCurrSize = function(trg, num){
	var $e;
	switch(trg){
		case "people":
			$e = $("#keyvisual div.people div.box p").eq(0);
			break;
		case "float":
			$e = $("#keyvisual p.obj.float.n"+num);
			break;
		case "ondesk":
			$e = $("#keyvisual p.obj.ondesk.n"+num);
			break;
		default:
	}
	return [$e.width(), $e.height()];
};

//################

$(function(){ /* start of wrap function */

//#### global variable
last_window_height = $(window).height();
anime_people_count = $("#keyvisual div.people div.box p").length;


//#### remove &nbsp;,\n,\t
U.removeWs($("header div.gnavi"));
U.removeWs($("footer div.link"));


//#### sprite anime [people]
var option_sa_pp = {
	size     :getCurrSize("people"),
	area     :[4,4],
	range    :CONST.PEOPLEANIME.RANGE_01,
	speed    :CONST.PEOPLEANIME.SPEED_01,
	onEdge   :function(obj){
		//for mouseon anime
		if(obj.opt.range[0] === CONST.PEOPLEANIME.RANGE_02[0]){
			obj.pause();
		}
	},
	onRepeat :function(obj){
		obj.pause();
		obj.setcurr(CONST.PEOPLEANIME.RANGE_01[0]);
	}
};
$("#keyvisual div.people div.box p").each(function(i, e){
	SaPp.push(new SpriteAnime($(e).find("a"), CONST.PEOPLEANIME.IMGFILE[i], option_sa_pp));
	
}).on("mouseenter", function(){
	var idx = $(this).attr("my_idx")*1;
	
	SaPp[idx].pause();
	SaPp[idx].opt.range = CONST.PEOPLEANIME.RANGE_02;
	SaPp[idx].opt.speed = CONST.PEOPLEANIME.SPEED_02;
	SaPp[idx].setcurr(CONST.PEOPLEANIME.RANGE_02[0]);
	SaPp[idx].start();
	
}).on("mouseleave", function(){
	var idx = $(this).attr("my_idx")*1;
	
	SaPp[idx].pause();
	SaPp[idx].opt.range = CONST.PEOPLEANIME.RANGE_01;
	SaPp[idx].opt.speed = CONST.PEOPLEANIME.SPEED_01;
	SaPp[idx].setcurr(CONST.PEOPLEANIME.RANGE_01[0]);
});

//#### sprite anime [float]
var option_sa_fl = {
	size     :[],
	area     :[2,4],
	range    :[1,8],
	speed    :CONST.FLOATANIME.SPEED,
	onEdge   :function(obj){
		obj.pause();
	}
};
$("#keyvisual p.obj.float").each(function(i, e){
	option_sa_fl.size = getCurrSize("float", i+1)
	SaFl.push(new SpriteAnime($(e).find("a"), CONST.FLOATANIME.IMGFILE[i], option_sa_fl));
	
}).on("mouseenter", function(){
	var idx = $("#keyvisual p.obj.float").index(this);
	
	SaFl[idx].start();
	
}).on("mouseleave", function(){
	var idx = $("#keyvisual p.obj.float").index(this);
	
	SaFl[idx].pause();
	SaFl[idx].setcurr(1);
});


//#### sprite anime [ondesk]
var option_sa_dk = {
	size     :[],
	area     :[2,4],
	range    :[1,8],
	speed    :CONST.ONDESKANIME.SPEED,
	onEdge   :function(obj){
		obj.pause();
	}
};
$("#keyvisual p.obj.ondesk").each(function(i, e){
	option_sa_dk.size = getCurrSize("ondesk", i+1)
	SaDk.push(new SpriteAnime($(e).find("a"), CONST.ONDESKANIME.IMGFILE[i], option_sa_dk));
	
}).on("mouseenter", function(){
	var idx = $("#keyvisual p.obj.ondesk").index(this);
	
	SaDk[idx].start();
	
}).on("mouseleave", function(){
	var idx = $("#keyvisual p.obj.ondesk").index(this);
	
	SaDk[idx].pause();
	SaDk[idx].setcurr(1);
});


//#### carousel
var Cs = new Carousel($("#keyvisual div.people div.box"), {
	speed   :1600,
	ease    :"swing",
	autoplay:4
});


/*
//#### polygon
var htmlstr = '';
for(var i=0,imax=11; i<imax; i++){
	htmlstr += '<i class="aBlink"></i>';
}
$("#keyvisual div.polygon.n1").append(htmlstr);
htmlstr = '';
for(var i=0,imax=6; i<imax; i++){
	htmlstr += '<i class="aBlink"></i>';
}
$("#keyvisual div.polygon.n2").append(htmlstr);
htmlstr = '';
for(var i=0,imax=8; i<imax; i++){
	htmlstr += '<i class="aBlink"></i>';
}
$("#keyvisual div.polygon.n3").append(htmlstr);
setInterval(function(){
	var $p = $("#keyvisual div.polygon");
	if($p.eq(1).hasClass("off")){
		$p.eq(0).addClass("off");
		$p.eq(2).addClass("off");
		
		$p.eq(1).removeClass("off");
	}else{
		$p.eq(1).addClass("off");
		
		$p.eq(0).removeClass("off");
		$p.eq(2).removeClass("off");
	}
}, 1000*4);
*/

//#### for layout keep
$(window).on("resize", function(){
	//when height changed only
	if(last_window_height === $(window).height()){
		return;
	}
	last_window_height = $(window).height();
	
	var sz = [];
	//sprite anime
	//-- people
	sz = getCurrSize("people");
	for(var i=0,imax=SaPp.length; i<imax; i++){
		SaPp[i].adjust(sz[0], sz[1]);
	}
	//-- float
	for(var i=0,imax=SaFl.length; i<imax; i++){
		sz = getCurrSize("float", i+1);
		SaFl[i].adjust(sz[0], sz[1]);
	}
	//-- ondesk
	for(var i=0,imax=SaDk.length; i<imax; i++){
		sz = getCurrSize("ondesk", i+1);
		SaDk[i].adjust(sz[0], sz[1]);
	}
	
	//carousel
	Cs.adjust();
});


//#### for breakpoint
/*
U.onBreakpoint(false, CONST.BREAKPOINT, function(){
	$("#keyvisual div.basebox").stop().css({opacity:0}).animate({opacity:1}, 1000);
});
*/

//#### footer news
var $newsbox = $("footer div.news");
var newsprop = {
	curr :0,
	hei  :$newsbox.children("dl").eq(0).height(),
	count:$newsbox.children("dl").length
};
if(newsprop.count > 1){
	setInterval(function(){
		newsprop.curr++;
		if(newsprop.curr >= newsprop.count){
			newsprop.curr = 0;
		}
		var lp = 0;
		$newsbox.children("dl").animate({top:-1*newsprop.hei}, function(){
			lp++;
			if(lp >= newsprop.count){
				$newsbox.children("dl").css({top:0})
					.eq(0).detach().appendTo($newsbox);
			}
		});
		
	}, 1000*4);
}

//#### ready
$(window).trigger("resize");

setTimeout(function(){
	$("#wrap").animate({opacity:1}, 1200, function(){
		
		//sprite anime [people] auto start
		var func = function(){
			if(anime_people_even){
				for(var i=0,imax=SaPp.length; i<imax; i++){
					if(i%2 === 0){
						SaPp[i].start();
					}
				}
				anime_people_even = false;
			}else{
				for(var i=0,imax=SaPp.length; i<imax; i++){
					if(i%2 === 1){
						SaPp[i].start();
					}
				}
				anime_people_even = true;
			}
		};
		setInterval(func, CONST.PEOPLEANIME.SPEED_01*(anime_people_count+1));
		func();
	});
}, 800);

}); /* end of wrap function */

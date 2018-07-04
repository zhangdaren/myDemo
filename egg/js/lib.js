/**
 * 初始化蛋蛋蛋
 */
function initPrizeData() {

	var eggIndexArr = userData.initAllPrize;
	for(var i = 0; i < eggIndexArr.length; i++) {
		var index = eggIndexArr[i];

		$(".egg" + (i + 1)).css("background", "url(\"../img/egg" + index + ".png\") no-repeat");
		//		$(".egg" + (i + 1) + "_bigCracked").css("background", "url(\"../img/egg" + index + "_bigCracked.png\") no-repeat");
		//		$(".egg" + (i + 1) + "_smCracked").css("background", "url(\"../img/egg" + index + "_smCracked.png\") no-repeat");
	}

	//	app.$prRoll.css({
	//		"background-image": "url(" + basePath + "img/" + userData.prizeStyle[0].skin + "/pr0" + userData.initAllPrize.length + "Roll.png)"
	//	});
	//
	//	var i = 0;
	//	for (; i < userData.initAllPrize.length; i++) {
	//		var optsData = "";
	//		var urlConfigHtml = "";
	//		if (3 == userData.initAllPrize.length || 4 == userData.initAllPrize.length) {
	//			optsData = userData.initAllPrize[i].lvName.length > 6 ? userData.initAllPrize[i].lvName.substring(0, 5) + "..." : userData.initAllPrize[i].lvName;
	//			urlConfigHtml = userData.initAllPrize[i].prizeName.length > 10 ? userData.initAllPrize[i].prizeName.substring(0, 9) + "..." : userData.initAllPrize[i].prizeName;
	//		} else {
	//			if (5 == userData.initAllPrize.length) {
	//				optsData = userData.initAllPrize[i].lvName.length > 5 ? userData.initAllPrize[i].lvName.substring(0, 5) + "..." : userData.initAllPrize[i].lvName;
	//				urlConfigHtml = userData.initAllPrize[i].prizeName.length > 8 ? userData.initAllPrize[i].prizeName.substring(0, 7) + "..." : userData.initAllPrize[i].prizeName;
	//			} else {
	//				if (6 == userData.initAllPrize.length || 7 == userData.initAllPrize.length) {
	//					optsData = userData.initAllPrize[i].lvName.length > 5 ? userData.initAllPrize[i].lvName.substring(0, 5) + "..." : userData.initAllPrize[i].lvName;
	//					urlConfigHtml = userData.initAllPrize[i].prizeName.length > 7 ? userData.initAllPrize[i].prizeName.substring(0, 5) + "..." : userData.initAllPrize[i].prizeName;
	//				}
	//			}
	//		}
	//		prizeCon += '<div class="lvBox lvBox' + i + '"><div class="lvName">' + optsData + '</div><div class="prizeName">' + urlConfigHtml + '</div><img class="prizeImg prizeImg' + i + '"/></div>';
	//		prizeIdArr.push(userData.initAllPrize[i].prizeId);
	//	}
	//	app.$prRoll.append(prizeCon);
	//
	//	if (4 != userData.prizeStyle[0].prizeState) {
	//		var l = 0;
	//		for (; l < userData.initAllPrize.length; l++) {
	//			$(".prizeImg" + l).attr({
	//				src: userData.initAllPrize[l].prizeImgUrl
	//			});
	//			$(".lvBox" + l).css({
	//				"-webkit-transform": "rotate3d(0, 0, 1," + 360 / userData.initAllPrize.length * (0.5 + l) + "deg)"
	//			});
	//		}
	//	} else {
	//		l = 0;
	//		for (; l < userData.initAllPrize.length; l++) {
	//			$(".lvBox" + l).css({
	//				"-webkit-transform": "rotate3d(0, 0, 1," + 360 / userData.initAllPrize.length * (0.5 + l) + "deg)"
	//			});
	//		}
	//	}
	//	if (userData.initAllPrize.length >= 3 && userData.initAllPrize.length <= 5) {
	//		$(".lvBox").addClass("prizeState" + userData.prizeStyle[0].prizeState + "_3to5");
	//
	//	} else if (userData.initAllPrize.length > 5 && userData.initAllPrize.length <= 7) {
	//		$(".lvBox").addClass("prizeState" + userData.prizeStyle[0].prizeState + "_6to7");
	//	}
}

/**
 * 初始中奖列表
 */
function initPrizePageFun() {
	if(0 == userData.selfPrize.length) {
		app.$aboutPrizetxtUl.text("暂无获得奖品");
	} else {
		app.$aboutPrizetxtUl.text("");

		selfListDiv = "";
		app.$aboutPrizetxtUl.empty();
		myPrizeScroll.refresh();

		var i = 0;
		for(; i < userData.selfPrize.length; i++) {
			selfListDiv += i % 2 == 0 ? '<li class="txtLi clearfloat"><div class="prLvTxt txt">' + userData.selfPrize[i].date + "---您抽中了" + userData.selfPrize[i].lvName + ':</div><div class="prTxt txt">' + userData.selfPrize[i].prizeName + "</div></li>" : '<li class="txtLi clearfloat"><div class="prLvTxt txt">' + userData.selfPrize[i].date + "---您抽中了" + userData.selfPrize[i].lvName + ':</div><div class="prTxt txt">' + userData.selfPrize[i].prizeName +
				"</div></li>";
		}
		app.$aboutPrizetxtUl.append(selfListDiv);
		myPrizeScroll.refresh();
	}
}
/**
 * 
 */
function initInputFun(dataAndEvents) {
	if(1 == dataAndEvents) {
		if("" != userData.userTel) {
			app.$mask.removeClass("hideMask");

			"" != userData.wechatName && app.$name_txt.text(userData.wechatName);
			"" != userData.userTel && app.$tel_txt.text(userData.userTel);

			app.$bindTips.html("");
		} else {
			app.$bindTips.html("本次参与活动的电信号码，以后可做深圳电信微信公众号</br>获得查询账单、流量通话等服务，请确保是本人操作。");
		}
	} else {
		if(0 == dataAndEvents) {
			app.$mask.removeClass("hideMask");

			"" != userData.userName && app.$name_txt.text(userData.userName);
			"" != userData.userTel && app.$tel_txt.text(userData.userTel);
		}
	}
}

/**
 * 保存数据后的回调
 */
function saveDataCallBackFun() {

	//隐藏中奖注册页面（领奖页面）
	if(0 == $("#page4").hasClass("page4MoveOut") || 1 == $("#page4").hasClass("page4MoveIn")) {
		$("#page4").removeClass("page4MoveIn").addClass("page4MoveOut");
	}

	//领取成功后清空当前奖品信息
	userData.currentPrize = null;
	if(0 == app.$hasExBox.hasClass("hasExBoxMoveIn") || 1 == app.$hasExBox.hasClass("hasExBoxMoveOut")) {
		app.$hasExBox.removeClass("hasExBoxMoveOut").addClass("hasExBoxMoveIn");
	}
	initPrizePageFun();
}

/**
 * 与后台交互报错，处理函数
 */
function showFailTipsEvent(meta) {
	app.$failTipsTxt.html(meta.msg);
	if(0 == $("#errorBox").hasClass("errorBoxMoveIn") || 1 == $("#errorBox").hasClass("errorBoxMoveOut")) {
		$("#errorBox").removeClass("errorBoxMoveOut").addClass("errorBoxMoveIn");
	}
}

/**
 * 获取更多中奖列表信息，回调函数
 */
function getMoreListCallBackFun(linestring, isClear) {
	/** @type {boolean} */
	isLoadMoreBoo = false;
	setTimeout(function(e) {
		app.$slideTips.removeClass("slideTipsTxt").addClass("slideTipsImg");
		app.$slideTips.text("");
	}, 500);

	if(isClear) {
		app.$listConUl.text("");
		app.$listConUl.empty();
		morePrizeScroll.refresh();
	}

	var htmlString = "";

	console.log("linestring.moreList.length " + linestring.moreList.length)

	var i = 0;
	for(; i < linestring.moreList.length; i++) {
		htmlString += '<li class="txtLi clearfloat"><div class="userTelTxt listTxt">恭喜' + linestring.moreList[i].tel + '</div><div class="userPrizeTxt listTxt">获得' + linestring.moreList[i].prizeName + "</div></li>";
	}
	app.$listConUl.append(htmlString);
	morePrizeScroll.refresh();
};

//===================================zpeto.js补全=====================================
! function(t, i) {
	function e(t) {
		return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
	}

	function s(t) {
		return a ? a + t : t.toLowerCase()
	}
	var a, o, n, r, l, h, p, c, u, d, m = "",
		g = {
			Webkit: "webkit",
			Moz: "",
			O: "o"
		},
		f = document.createElement("div"),
		v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		x = {};
	t.each(g, function(t, e) {
		return f.style[t + "TransitionProperty"] !== i ? (m = "-" + t.toLowerCase() + "-", a = e, !1) : void 0
	}), o = m + "transform", x[n = m + "transition-property"] = x[r = m + "transition-duration"] = x[h = m + "transition-delay"] = x[l = m + "transition-timing-function"] = x[p = m + "animation-name"] = x[c = m + "animation-duration"] = x[d = m + "animation-delay"] = x[u = m + "animation-timing-function"] = "", t.fx = {
		off: a === i && f.style.transitionProperty === i,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: m,
		transitionEnd: s("TransitionEnd"),
		animationEnd: s("AnimationEnd")
	}, t.fn.animate = function(e, s, a, o, n) {
		return t.isFunction(s) && (o = s, a = i, s = i), t.isFunction(a) && (o = a, a = i), t.isPlainObject(s) && (a = s.easing, o = s.complete, n = s.delay, s = s.duration), s && (s = ("number" == typeof s ? s : t.fx.speeds[s] || t.fx.speeds._default) / 1e3), n && (n = parseFloat(n) / 1e3), this.anim(e, s, a, o, n)
	}, t.fn.anim = function(s, a, m, g, f) {
		var T, $, S, P = {},
			y = "",
			z = this,
			D = t.fx.transitionEnd,
			b = !1;
		if(a === i && (a = t.fx.speeds._default / 1e3), f === i && (f = 0), t.fx.off && (a = 0), "string" == typeof s) P[p] = s, P[c] = a + "s", P[d] = f + "s", P[u] = m || "linear", D = t.fx.animationEnd;
		else {
			$ = [];
			for(T in s) v.test(T) ? y += T + "(" + s[T] + ") " : (P[T] = s[T], $.push(e(T)));
			y && (P[o] = y, $.push(o)), a > 0 && "object" == typeof s && (P[n] = $.join(", "), P[r] = a + "s", P[h] = f + "s", P[l] = m || "linear")
		}
		return S = function(i) {
			if("undefined" != typeof i) {
				if(i.target !== i.currentTarget) return;
				t(i.target).unbind(D, S)
			} else t(this).unbind(D, S);
			b = !0, t(this).css(x), g && g.call(this)
		}, a > 0 && (this.bind(D, S), setTimeout(function() {
			b || S.call(z)
		}, 1e3 * (a + f) + 25)), this.size() && this.get(0).clientLeft, this.css(P), 0 >= a && setTimeout(function() {
			z.each(function() {
				S.call(this)
			})
		}, 0), this
	}, f = null
}(Zepto);
//========================================================================

//设置scale缩放
$(document).ready(function() {
	function onResize(t) {
		if(window.innerHeight < 1040 || null != t) {
			$(".scaleBox").animate({
				scale: window.innerHeight / 1040
			}, 0);
		}
	}
	onResize();
	$(window).on("resize", onResize);
});

//定义变量
var isBegin = false;
var isSavingData = false;
var isSent = false;
var isLoadMoreBoo = false;
var loader;
var fileList;
var prizeCon = "";
var prizeIdArr = [];
var OrientationTip;
var pageSlider;
var rotateFunc;
var inputNameArr;
var inputArr;
var ruleScroll;
var myPrizeScroll;
var morePrizeScroll;
var curTime;
var ajaxDataBoo = false;
var ruleListDiv = "";
var selfListDiv = "";
var prizeListDiv = "";
var app = {
	$screen: $(".screen"),
	$loadingBox: $(".loadingBox"),
	$loader_txt: $(".loader_txt"),
	$aboutPrizeBtn: $("#aboutPrizeBtn"),
	$aboutRuleBtn: $("#aboutRuleBtn"),
	$goBtn: $("#goBtn"),
	$page2: $(".page2"),
	$page3: $(".page3"),
	$light: $("#light"),
	$subBtn: $("#subBtn"),
	$failBackBtn: $("#failBackBtn"),
	$tipsBox: $("#tipsBox"),
	$failTipsTxt: $("#failTipsTxt"),
	$prizeBackBtn: $("#prizeBackBtn"),
	$ruleBackBtn: $("#ruleBackBtn"),
	$prRoll: $("#prRoll"),
	$name_input: $("#name_input"),
	$tel_input: $("#tel_input"),
	$p4PrLvTxt: $("#p4PrLvTxt"),
	$p4PrTxt: $("#p4PrTxt"),
	$p5PrLvTxt: $("#p5PrLvTxt"),
	$p5PrTxt: $("#p5PrTxt"),
	$backMainBtn: $("#backMainBtn"),
	$aboutRuleTxtUl: $("#aboutRuleTxtUl"),
	$aboutPrizetxtUl: $("#aboutPrizetxtUl"),
	$banner: $(".banner"),
	$rotateMc: $("#rotateMc"),
	$name_txt: $("#name_txt"),
	$tel_txt: $("#tel_txt"),
	$code_txt: $("#code_txt"),
	$code_input: $("#code_input"),
	$codeBtnTxt: $(".codeBtnTxt"),
	$inputBox: $("#inputBox"),
	$cancelBtn: $("#cancelBtn"),
	$sureBtn: $("#sureBtn"),
	$mask: $("#mask"),
	$telMask: $(".telMask"),
	$inputCon: $(".inputCon"),
	$bindTips: $("#bindTips"),
	$myListBtn: $("#myListBtn"),
	$telInputMask: $(".telInputMask"),
	$wechatImg: $("#wechatImg"),
	$moreListBtn: $("#moreListBtn"),
	$wechatName: $("#wechatName"),
	$myPrizeList: $("#myPrizeList"),
	$moreList: $(".moreList"),
	$slideTips: $(".slideTips"),
	$listConUl: $("#scroller-content"),
	$listScroller: $("#listScroller"),
	$code: $("#code"),
	$hasExBox: $("#hasExBox"),
	$hasExBtn: $("#hasExBtn"),
	$lvName: $(".lvName"),
	$prizeName: $(".prizeName"),
	$prizeImg: $(".prizeImg")
};

var curEggIndex = -1;

//=============皮肤处理===============

//app.$banner.css({
//	"background-image": "url(" + userData.banPicUrl + ")"
//});
app.$wechatImg.attr("src", userData.wechatImgUrl);
app.$wechatName.text(userData.wechatName);
$(".bodySkin").addClass("bodySkin-" + userData.prizeStyle[0].skin);
app.$loadingBox.addClass("skinColor_" + userData.prizeStyle[0].skin);
//=============皮肤处理===============

/////////////////////////////// soundInit ////////////////////////////////////////////////
var _tap;
var isSupportTouch = "ontouchend" in document ? true : false;
_tap = isSupportTouch ? "touchend" : "click";

soundInit();

function soundInit() {
	var bgMusic = window.document.getElementById("bgMusic");
	bgMusic.src = $("#bgMusic").attr("src");
	if(bgMusic.paused) {
		$("body").one(_tap, bodyDown);
	}

	function bodyDown(event) {
		//alert("adfasdfa")
		console.info("onc body click");
		bgMusic.play();
		$(this).toggleClass("stopped");
		//$("body").unbind("touchstart",bodyDown)
	}
}

$("#music").on(_tap, function() {
	var bgMusic = window.document.getElementById("bgMusic");
	$(this).toggleClass("stopped");
	if($(this).hasClass("stopped")) {
		bgMusic.pause();
	} else {
		bgMusic.play();
	}
});

/////////////////////////////// soundInit ////////////////////////////////////////////////
$(document).ready(function() {
	function onLoadImg() {
		squares += 1;
		r = Math.ceil(squares / allFrames.length * 100);
		app.$loader_txt.text("loading..." + r + "%");
		if(100 == r) {
			$(".wrap").show();
			app.$loadingBox.animate({
				opacity: "0"
			}, 500, function(e) {
				loadComplete();
			});
		}
	}

	var isFirstLoaded = false;

	function loadComplete() {
		if(isFirstLoaded) {
			return;
		} else {
			isFirstLoaded = true;
		}

		//
		$(".egg1").addClass("egg1_wobble");
		$(".egg2").addClass("egg2_wobble");
		$(".egg3").addClass("egg3_wobble");

		app.$loadingBox.remove();
		$(".screen").eq(0).addClass("current");
		$(".hideMc").removeClass("hideMc");
		//
		$(".chicken_l").addClass("zoomIn33");
		$(".chicken_r").addClass("zoomIn22");

		//蛋上面的砸我，跳过来跳过去。
		var dalogLeftArr = [144, 324, 504];
		var count = 0;
		var offest = 1;
		setInterval(function() {
			$(".dalog_q").css("left", dalogLeftArr[count] + "px");
			if(count == 2) {
				offest = -1;
			} else if(count == 0) {
				offest = 1;
			}
			count += offest;
		}, 800);
	}

	allFrames = [
		"img/" + userData.prizeStyle[0].skin + "/bg.png",
		"img/aboutPrizeBtn.png",
		"img/aboutRuleBtn.png",
		"img/againBtn.png",
		"img/backBtn.png",
		"img/backMain.png",
		"img/bigHammer.png",
		"img/bigPanel.png",
		"img/chicken_l.png",
		"img/chicken_r.png",

		"img/closeBtn.png",
		"img/crack.png",
		"img/cry.png",
		"img/dalog_ok.png",
		"img/dalog_q.png",
		"img/dalogPanel.png",

		"img/detailBtn.png",
		"img/eggPanel.png",
		"img/firework.png",
		"img/hammer.png",

		"img/hammer_s.png",
		"img/icon.png",
		"img/icon_cong.png",
		"img/icon_cry.png",

		"img/moreBtn.png",
		"img/prize.png",
		"img/receiveBtn.png",
		"img/ruleBtn.png",

		"img/shade.png",
		"img/signBtn.png",
		"img/slideTips.png",
		"img/smDalogPanel.png",

		"img/text_cong.png",
		"img/txt_cong.png",
		"img/txt_detail.png",
		"img/txt_rule.png",

		"img/txt_thx.png"
	];

	var squares = 0;

	//添加转盘图片
	//	if (4 != userData.prizeStyle[0].prizeState) {
	//		var i = 0;
	//		for (; i < userData.initAllPrize.length; i++) {
	//			allFrames.push(userData.initAllPrize[i].prizeImgUrl);
	//		}
	//	}

	//添加蛋图片
	var eggIndexArr = userData.initAllPrize;
	for(var i = 0; i < eggIndexArr.length; i++) {
		var index = eggIndexArr[i];
		allFrames.push("img/egg" + index + ".png");
		allFrames.push("img/egg" + index + "_bigCracked.png");
		allFrames.push("img/egg" + index + "_smCracked.png");
	}

	console.log("allFrames " + allFrames);

	function onImgError() {
		//文件加载出错时，延时1秒直接显示完成
		console.log("加载出错");
		setTimeout(function() {
			$("#loader_txt").text("loading..." + 100 + "%");
			app.$loadingBox.animate({
				opacity: 0
			}, 500, function() {
				loadComplete();
			});
		}, 1000);
	}

	var index = 0;
	i = allFrames.length;
	for(; i > index; index++) {
		var img = new Image;
		img.onload = onLoadImg;
		img.onerror = onImgError;
		allFrames[index];
		img.src = basePath + allFrames[index];
	}

	var r;
	initPrizeData();
	if(null != window.navigator.userAgent.match(/linux|android/i)) {
		window.addEventListener("orientationchange", orientationchange);
	} else {
		OrientationTip = new WxMoment.OrientationTip;
	}

	function orientationchange() {
		if(90 == window.orientation || -90 == window.orientation) {
			alert("为了最佳体验，请使用竖屏浏览！");
		}
	}

	pageSlider = new WxMoment.PageSlider({
		pages: $(".screen"),
		direction: "vertical",
		animationPlayOnce: false,
		currentClass: "current",
		oninit: function() {},
		onbeforechange: function() {},
		onchange: function() {},
		onSwipeUp: function() {},
		onSwipeDown: function() {},
		onSwipeLeft: function() {},
		onSwipeRight: function() {}
	});

	//===========填充规则==============
	i = 0;
	for(; i < userData.initRule.length; i++) {
		ruleListDiv += '<li class="txtLi clearfloat"><div class="ruleTxt txt">' + userData.initRule[i] + "</div></li>";
	}
	app.$aboutRuleTxtUl.append("<pre>" + userData.initRule + "</pre>");
	//===========填充规则==============

	//--------------------------
	//
	ruleScroll = new IScroll("#ruleWrapper", {
		mouseWheel: true,
		preventDefault: false,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)/
		},
		scrollbars: true,
		interactiveScrollbars: true,
		shrinkScrollbars: "scale",
		fadeScrollbars: false
	});

	myPrizeScroll = new IScroll("#prizeWrapper", {
		mouseWheel: true,
		preventDefault: false,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)/
		},
		scrollbars: true,
		interactiveScrollbars: true,
		shrinkScrollbars: "scale",
		fadeScrollbars: false
	});

	morePrizeScroll = new IScroll("#prizeListWrapper", {
		mouseWheel: true,
		preventDefault: false,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)/
		},
		scrollbars: true,
		interactiveScrollbars: true,
		shrinkScrollbars: "scale",
		fadeScrollbars: false
	});

	//更多中奖名单
	app.$moreListBtn.on("click", function(e) {

		//		加入前清空----------------------
		getMoreListFun(true);

		app.$myPrizeList.addClass("hideList");
		app.$moreList.removeClass("hideList");
		morePrizeScroll.refresh();
	});

	morePrizeScroll.on("scroll", function() {
		var y = this.y;
		var dy0 = this.maxScrollY - y;
		return y >= 40 ? "" : 40 > y && y > 0 ? "" : dy0 >= 40 ? "" : 40 > dy0 && dy0 >= 0 ? "" : void 0;
	});

	morePrizeScroll.on("slideUp", function() {
		if(this.maxScrollY - this.y > 40) {
			if(0 == isLoadMoreBoo) {
				isLoadMoreBoo = true;
				app.$slideTips.removeClass("slideTipsImg").addClass("slideTipsTxt");
				app.$slideTips.text("loading...");
				getMoreListFun();
			}
		}
	});

	//	updateDataFun();

	if(0 == userData.prizeList.length) {
		app.$listConUl.html("暂无");
	} else {
		app.$listConUl.html("");
		index = 0;
		for(; index < userData.prizeList.length; index++) {
			prizeListDiv += '<li class="txtLi clearfloat"><div class="userTelTxt listTxt">恭喜' + userData.prizeList[index].tel + '</div><div class="userPrizeTxt listTxt">获得' + userData.prizeList[index].prizeName + "</div></li>";
		}
		app.$listConUl.append(prizeListDiv);
	}

	//弹出我的中奖页面
	app.$aboutPrizeBtn.on("click", function(e) {
		app.$myPrizeList.removeClass("hideList");
		app.$moreList.addClass("hideList");
		if(0 == app.$page2.hasClass("page2MoveIn") || 1 == app.$page2.hasClass("page2MoveOut")) {
			app.$page2.removeClass("page2MoveOut").addClass("page2MoveIn");
		}
		initPrizePageFun();
	});

	//弹出规则页面
	app.$aboutRuleBtn.on("click", function(e) {
		if(0 == app.$page3.hasClass("page3MoveIn") || 1 == app.$page3.hasClass("page3MoveOut")) {
			app.$page3.removeClass("page3MoveOut").addClass("page3MoveIn");
		}
		ruleScroll.refresh();
	});

	//返回奖品池
	app.$myListBtn.on("click", function(e) {

		//直接返回主页
		app.$page2.removeClass("page2MoveIn").addClass("page2MoveOut");

		//整理一下面板上面的内容
		app.$myPrizeList.removeClass("hideList");
		app.$moreList.addClass("hideList");

		myPrizeScroll.refresh();

	});

	//返回中奖页面返回按钮
	app.$prizeBackBtn.on("click", function(e) {
		//		if (1 == pageSlider.index) {
		//			pageSlider.moveTo(0, true);
		//		}
		app.$page2.removeClass("page2MoveIn").addClass("page2MoveOut");
	});

	//规则返回按钮
	app.$ruleBackBtn.on("click", function(e) {
		app.$page3.removeClass("page3MoveIn").addClass("page3MoveOut");
	});

	//失败提示框返回按钮
	app.$failBackBtn.on("click", function(e) {
		app.$tipsBox.removeClass("tipsBoxMoveIn").addClass("tipsBoxMoveOut");
	});

	//提交领奖
	app.$subBtn.on("click", function(e) {
		console.log("显示 输入框");

		if("" != userData.userTel) {
			app.$inputCon.addClass("inputConBind");
			app.$telInputMask.removeClass("telInputMaskHide");

			if("请输入姓名" == app.$name_txt.text()) {
				return app.$inputBox.removeClass("inputBoxHide"), app.$name_input.focus(), false;
			}

			var cx = /(^13\d{9}$)|(^14)[5,7]\d{8}$|(^15[0,1,2,3,5,6,7,8,9]\d{8}$)|(^17)[6,7,8]\d{8}$|(^18\d{9}$)/g;
			if(!cx.test(app.$tel_txt.text())) {
				return alert("请输入正确的手机号码！"), app.$inputBox.removeClass("inputBoxHide"), app.$tel_input.focus(), false;
			}
			console.log("fuck");
		} else {
			if("请输入姓名" == app.$name_txt.text()) {
				return app.$inputBox.removeClass("inputBoxHide"), app.$name_input.focus(), false;
			}
			cx = /(^13\d{9}$)|(^14)[5,7]\d{8}$|(^15[0,1,2,3,5,6,7,8,9]\d{8}$)|(^17)[6,7,8]\d{8}$|(^18\d{9}$)/g;
			if(!cx.test(app.$tel_txt.text())) {
				return alert("请输入正确的手机号码！"), app.$inputBox.removeClass("inputBoxHide"), app.$tel_input.focus(), false;
			}
			console.log("fuck1");
		}
		console.log("姓名: " + app.$name_txt.text(), "   手机号:" + app.$tel_txt.text());

		if(0 == isSavingData) {
			isSavingData = true;
			saveDataFun();
		}
	});

	//弹出输入框，并让name_txt获取焦点
	app.$name_txt.on("click", function(e) {
		if(userData.notWrite == 1) return;

		if("" == app.$name_input.val()) {
			app.$name_input.val("");
		}
		if("" == app.$tel_input.val()) {
			app.$tel_input.val("");
		}

		app.$inputBox.removeClass("inputBoxHide");
		if("" != userData.userTel) {
			app.$inputCon.addClass("inputConBind");
			app.$telInputMask.removeClass("telInputMaskHide");
		}
		app.$name_input.focus();
	});

	//弹出输入框，并让tel_txt获取焦点
	app.$tel_txt.on("click", function(e) {
		if(userData.notWrite == 1) return;

		if("" == app.$name_input.val()) {
			app.$name_input.val("");
		}
		if("" == app.$tel_input.val()) {
			app.$tel_input.val("");
		}

		app.$inputBox.removeClass("inputBoxHide");
		app.$tel_input.focus();
	});

	//输入号码框，确定按钮 
	app.$sureBtn.on("click", function(e) {
		evaluate();
	});
	//取消按钮
	app.$cancelBtn.on("click", function(e) {
		//		evaluate();
		app.$inputBox.addClass("inputBoxHide");
	});

	//返回首页按钮 
	app.$backMainBtn.on("click", function(e) {
		//		pageSlider.moveTo(0);
		if(0 == $("#page4").hasClass("page4MoveOut") || 1 == $("#page4").hasClass("page4MoveIn")) {
			$("#page4").removeClass("page4MoveIn").addClass("page4MoveOut");
		}
	});

	//前往登记按钮
	$("#errorBtn").click(function() {
		//前往登记
	});

	//领取成功右上角X
	$("#hasExBoxCloseBtn").click(function() {
		if(0 == app.$hasExBox.hasClass("hasExBoxMoveOut") || 1 == app.$hasExBox.hasClass("hasExBoxMoveIn")) {
			app.$hasExBox.removeClass("hasExBoxMoveIn").addClass("hasExBoxMoveOut");
		}

		reset();
	});

	//失败右上角X
	$("#tipsBoxCloseBtn").click(function() {
		if(0 == app.$tipsBox.hasClass("tipsBoxMoveOut") || 1 == app.$tipsBox.hasClass("tipsBoxMoveIn")) {
			app.$tipsBox.removeClass("tipsBoxMoveIn").addClass("tipsBoxMoveOut");
		}
	});

	//再来一次右上角X
	$("#againBoxCloseBtn").click(function() {
		if(0 == $("#againGameBox").hasClass("againBoxMoveOut") || 1 == $("#againGameBox").hasClass("againBoxMoveIn")) {
			$("#againGameBox").removeClass("againBoxMoveIn").addClass("againBoxMoveOut");
		}
		reset();
	});

	//错误提示右上角X
	$("#errorBoxCloseBtn").click(function() {
		if(0 == $("#erroBox").hasClass("errorBoxMoveOut") || 1 == $("#erroBox").hasClass("errorBoxMoveIn")) {
			$("#erroBox").removeClass("errorBoxMoveIn").addClass("errorBoxMoveOut");
		}
	});

	//点击了蛋
	$(".eggGroup .egg").on("click", function(e) {
		//为空
		if(userData.currentPrize == null || userData.currentPrize == "") {
			//新开始的
			if(userData.getPrizeCount <= 0) {
				console.log("刮奖次数已用完！");
				//				app.$failTipsTxt.html("机会已抽完!");
				if(0 == app.$tipsBox.hasClass("tipsBoxMoveIn") || 1 == app.$tipsBox.hasClass("tipsBoxMoveOut")) {
					app.$tipsBox.removeClass("tipsBoxMoveOut").addClass("tipsBoxMoveIn");
				}
			} else {
				console.log("开始刮奖！");
				//判断是否已经开始转
				if(0 == isBegin) {
					isBegin = true;

					//获取中奖数据
					oneStart();

					$(".prize").css("background-image", "url(" + userData.currentPrize.prizeImgUrl + ")");

					//					ajaxDataBoo = true;

					var crackLeftArr = [49, 230, 409];
					var hammerLeftArr = [148, 328, 508];
					var fireworkLeftArr = [15, 195, 375];
					var index = curEggIndex = $(this).index();

					var curEgg = this;
					$(".bigHammer").hide();
					$(".hammer_s").css("left", hammerLeftArr[index] + "px").show();
					setTimeout(function() {
						//处理蛋的动画
						$(".crack").css("left", crackLeftArr[index] + "px").show(500);

					}, 150);

					setTimeout(function() {
						//						$(curEgg).hide();
						//						$(".crack").hide();
						$(".dalog_q").hide();
						//
						$(".chicken_l").removeClass("zoomIn33").css("opacity", 1).addClass("tada1").show();
						$(".dalog_ok").addClass("pulse").show();
						$(".egg" + (index + 1) + "_bigCracked").show();
						$(".egg" + (index + 1) + "_smCracked").show();
						$(".firework").css("left", fireworkLeftArr[index] + "px").show().addClass("zoomInUp");

						setTimeout(function() {
							var eggIndexArr = userData.initAllPrize;
							$(".egg_bigCracked").css("background", "url(\"../img/egg" + eggIndexArr[index] + "_bigCracked.png\") no-repeat");
							$("#fireworkPanel").show();
						}, 400);
					}, 600);

				}
			}
		} else {
			//中途退出
			console.log("已有中奖信息，可能没填资料或者没点击领奖按钮！");
			//			ajaxDataBoo = false;

			//
			$(".prize").css("background-image", "url(" + userData.currentPrize.prizeImgUrl + ")");
			//
			"" != userData.userName && app.$name_txt.text(userData.userName);
			"" != userData.userTel && app.$tel_txt.text(userData.userTel);

			//填写奖品信息
			app.$p4PrLvTxt.html(userData.currentPrize.lvName);
			if(userData.currentPrize.prizeName.length > 7) {
				app.$p4PrTxt.html(userData.currentPrize.prizeName.substring(0, 7) + "...");
			} else {
				app.$p4PrTxt.html(userData.currentPrize.prizeName);
			}
			//跳到填写资料页面
			//			pageSlider.moveTo(1);
			if(0 == $("#page4").hasClass("page4MoveIn") || 1 == $("#page4").hasClass("page4MoveOut")) {
				$("#page4").removeClass("page4MoveOut").addClass("page4MoveIn");
			}
		}
	});

	//领取成功对话框，确定按钮
	app.$hasExBtn.on("click", function(e) {

		//重置游戏
		reset();

		//进入中奖明细，
		//初始化
		app.$myPrizeList.removeClass("hideList");
		app.$moreList.addClass("hideList");
		myPrizeScroll.refresh();

		//切换过去
		app.$hasExBox.removeClass("hasExBoxMoveIn");
		if(0 == app.$page2.hasClass("page2MoveIn") || 1 == app.$page2.hasClass("page2MoveOut")) {
			app.$page2.removeClass("page2MoveOut").addClass("page2MoveIn");
		}
	});
})

//重置游戏
function reset() {
	var index = curEggIndex;
	//
	$(".hammer_s").hide();
	$(".crack").hide();
	//
	$(".egg").eq(index).show();
	$(".dalog_q").show();
	$(".bigHammer").show();
	//
	$(".chicken_l").removeClass("tada1");
	$(".dalog_ok").removeClass("pulse").hide();
	$(".egg" + (index + 1) + "_cracked").hide();
	//
	$(".egg" + (index + 1) + "_bigCracked").hide();
	$(".egg" + (index + 1) + "_smCracked").hide();
	$(".firework").hide().removeClass("zoomInUp");
	//

	if($(".egg1").hasClass("egg1_wobble")) {
		$(".egg1").removeClass("egg1_wobble");
		$(".egg2").removeClass("egg2_wobble");
		$(".egg3").removeClass("egg3_wobble");
	}
}

//校验
function evaluate() {

	if("" != app.$name_input.val()) {
		app.$name_txt.text(app.$name_input.val());
	} else {
		app.$name_txt.text("请输入姓名");
	}
	//检验手机号码
	if("" != app.$tel_input.val()) {
		app.$tel_txt.text(app.$tel_input.val());

		var reg = /(^13\d{9}$)|(^14)[5,7]\d{8}$|(^15[0,1,2,3,5,6,7,8,9]\d{8}$)|(^17)[6,7,8]\d{8}$|(^18\d{9}$)/g;
		if(!reg.test(app.$tel_txt.text())) {
			alert("请输入正确的手机号码！");
		} else {
			app.$inputBox.addClass("inputBoxHide");
		}
	} else {
		app.$tel_txt.text("请输入手机号码");
		alert("请输入手机号码！")
	}
}

/**
 * oneStart 回调
 */
function startGetPrizeCallBackFun(data) {
	console.log("抽奖返回的json:", data);
	//	app.$prRoll.css("-webkit-transform", "rotateZ(0deg)");
	//	app.$rotateMc.css("-webkit-transform", "rotateZ(0deg)");
	//	rotateRollEvent(data, prizeIdArr.indexOf(Number(data.prizeId)));

	isBegin = false;

	console.log("startGetPrizeCallBackFun");
	setTimeout(function(e) {
		$("#fireworkPanel").hide();

		if(0 != prizeIdArr.indexOf(Number(data.prizeId))) {
			initInputFun(ajaxDataBoo);
			//		pageSlider.moveTo(1);

			if(0 == $("#page4").hasClass("page4MoveIn") || 1 == $("#page4").hasClass("page4MoveOut")) {
				$("#page4").removeClass("page4MoveOut").addClass("page4MoveIn");
			}

			app.$p4PrLvTxt.html(data.lvName);
			if(data.prizeName.length > 7) {
				app.$p4PrTxt.html(data.prizeName.substring(0, 7) + "...");
			} else {
				app.$p4PrTxt.html(data.prizeName);
			}
		} else {
			app.$failTipsTxt.html(data.msg);
			if(0 == app.$tipsBox.hasClass("tipsBoxMoveIn") || 1 == app.$tipsBox.hasClass("tipsBoxMoveOut")) {
				app.$tipsBox.removeClass("tipsBoxMoveOut").addClass("tipsBoxMoveIn");
			}
		}

	}, 4200);
}
/**
 *
 */
//function rotateRollEvent(v12, index) {
//	console.log("转盘总共几等份: " + userData.initAllPrize.length, "  中奖了: prizeId=" + v12.prizeId);
//
//	var r20 = 360 - 360 / userData.initAllPrize.length * (0.5 + index);
//	rotateFunc(v12, v12.prizeId, r20);
//}
//
////转盘转起来
//rotateFunc = function(data, prizeId, arg) {
//	app.$rotateMc.animate({
//		rotateZ: "-2160deg"
//	}, 6e3, "ease-in-out", function() {
//		setTimeout(function(e) {
//			isBegin = false;
//			if (0 != prizeId) {
//				initInputFun(ajaxDataBoo);
//				pageSlider.moveTo(1);
//				app.$p4PrLvTxt.html(data.lvName);
//				if (data.prizeName.length > 7) {
//					app.$p4PrTxt.html(data.prizeName.substring(0, 7) + "...");
//				} else {
//					app.$p4PrTxt.html(data.prizeName);
//				}
//			} else {
//				app.$failTipsTxt.html(data.msg);
//				if (0 == app.$tipsBox.hasClass("tipsBoxMoveIn") || 1 == app.$tipsBox.hasClass("tipsBoxMoveOut")) {
//					app.$tipsBox.removeClass("tipsBoxMoveOut").addClass("tipsBoxMoveIn");
//				}
//			}
//		}, 1E3);
//	});
//	app.$prRoll.animate({
//		rotateZ: Number(arg) + 1440 + "deg"
//	}, 6e3, "ease-in-out", function() {});
//};
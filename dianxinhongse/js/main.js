var _tap, mySwiper;
var anim_pre, anim_next, page3_swiper, isPage3SwiperAdded = false,
	moreNewsScroll;

var p2TxtArr = [
	'一九二九年，在丰宁路（现人民中路）建成的广州市自动电话所',
	'广州市自动电话所交换机机房',
	'广州市自动电话所测量室的登记器',
	'广州市自动电话所测量室的观察台',
	'电缆布置图',
	'上世纪二十年代，广州电信业起步，挖开路面铺设市话电缆',
	'中美技术人员铺设市话电缆',
	'挖开路面铺设市话电缆',
	'技术人员铺设市话电缆',
	'技术人员铺设市话电缆',
	'技术人员铺设市话电缆',
	'技术人员铺设市话电缆',
	'团结一心，艰苦作业',
	'架空电缆铺设',
	'广州市各大马路上的杆路明线、架空电缆',
	'用蜂音机听测架空电缆内部损坏情形',
	'一九二五年，广州开通长途人工电话',
];
var p3TxtArr = [
	'战备交换机',
	'传真机失真测试器',
	'旧时无线发报机',
	'邮电部55A型小型|报话发射机',
	'旧时摇柄电话机',
	'手摇式石式电话',
	'U1-1型晶体管|电缆故障遥测仪',
	'手提五门交换机',
	'旧时十门交换机',
	'手摇发电机',
	'70-I型晶体管单路|载波电话终端机',
	'邮电部55A型|超外差式收式机',
	'QF888I型|电平振荡器',
	'粤-4A型|交流会议电话用户机',
	'CUT-型|串门衰耗测试器',
	'OP32IIx型传输测试|器QZ-2型高阻计',
	'WS430I型|传输测试器',
	'磁石电话交换机',
	'50年代战备便携式|无线电首发报机',
	'40年代万用表',
	'40年代电阻箱',
	'60年代无线收电机',
	'50年代人工交换机|铃流发电机',
	'抗战时期电话本',
	'抗战时期电话本',
	'旧时50门交换总机',
	'手摇式防空警报器',
];

$(function() {
	console.log("onLoad");
	document.body.style.webkitUserSelect = 'none';
	mainInit();
});

//胶片的拨动声音
//var music = {
//	obj: null,
//	create: function() {
//		music.obj = new Audio();
//		music.obj.preload = 'auto';
//		music.obj.type = 'audio/mpeg';
//		var source = document.createElement('source');
//		source.src = 'img/play.mp3';
//		music.obj.appendChild(source);
//	},
//	play: function() {
//		music.obj.play();
//	},
//	stop: function() {
//		music.obj.pause();
//	}
//};
//music.create();
//music.play(); //播放
//music.stop(); //暂停
//然后在适当的地方   music.play();  播放。

function mainInit() {

	function onLoadImg() {
		squares += 1;
		r = Math.ceil(squares / allFrames.length * 100);
		$("#loader_txt").text("loading..." + r + "%");
		if(100 == r) {
			$(".wrap").show();
			$("#loading").transition({
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
		$("#loading").remove();
	}

	var page0LoadList = [
		"img/img_mainPage.png",
		"img/p1Bg.jpg",
		"img/loading_txt.png",
		"img/loading_bg.jpg",
		"img/p1TelBg.png",
		"img/pages/img_pages.png",
		"img/pages/img_iocn.png",
		"img/pages/p2Pic_9.png",
		"img/pages/p2Pic_1.png",
		"img/pages/p2Pic_17.png",
		"img/pages/p2Pic_2.png",
		"img/pages/p2Pic_3.png",
		"img/pages/p2Pic_4.png",
		"img/pages/p2Pic_5.png",
		"img/pages/p2Pic_6.png",
		"img/pages/p3Pic_2.jpg",
		"img/pages/p3Pic_26.jpg",
		"img/pages/p3Pic_27.jpg",
		"img/pages/p3Pic_3.jpg",
		"img/pages/p3Pic_4.jpg",
		"img/pages/p3Pic_5.jpg",
		"img/pages/p3Pic_6.jpg",
		"img/pages/p3Pic_7.jpg",
		"img/pages/p3Pic_8.jpg",
		"img/pages/p3Pic_9.jpg",
		"img/pages/p4_1837.png",
		"img/pages/p4_1871.png",
		"img/pages/p4_1877.png",
		"img/pages/p4_1881.png",
		"img/pages/p4_1887.png",
		"img/pages/p4_1901.png",
		"img/pages/p4_1911.png",
		"img/pages/p4_1930.png",

	];
	var page1LoadList = [
		"img/covers/1.jpg",
		"img/covers/10.jpg",
		"img/covers/14.jpg",
		"img/covers/16.jpg",
		"img/covers/2.jpg",
		"img/covers/3.jpg",
		"img/covers/34.jpg",
		"img/covers/5.jpg",
		"img/covers/6.jpg",
		"img/covers/7.jpg",
		"img/covers/8.jpg",
		"img/covers/9.jpg",
		"img/covers/30.jpg",
		"img/covers/31.jpg",
		"img/covers/33.jpg",
		"img/covers/public.jpg",
		"img/pages/p1_banner.jpg",
	];
	var page2LoadList = ["img/pages/bigFilmRells.png",
		"img/pages/film.png",
		"img/pages/light_film.png",
		"img/pages/light_r.png",
		"img/pages/smFilmRells.png",
		"img/pages/p2Pic_10.png",
		"img/pages/p2Pic_11.png",
		"img/pages/p2Pic_12.png",
		"img/pages/p2Pic_13.png",
		"img/pages/p2Pic_14.png",
		"img/pages/p2Pic_15.png",
		"img/pages/p2Pic_16.png",
		"img/pages/p2Pic_7.png",
		"img/pages/p2Pic_8.png",
		"img/pages/p2_bg.jpg",
	];
	var page3LoadList = ["img/pages/p3Pic_1.jpg",
		"img/pages/p3Pic_10.jpg",
		"img/pages/p3Pic_11.jpg",
		"img/pages/p3Pic_12.jpg",
		"img/pages/p3Pic_13.jpg",
		"img/pages/p3Pic_14.jpg",
		"img/pages/p3Pic_15.jpg",
		"img/pages/p3Pic_16.jpg",
		"img/pages/p3Pic_17.jpg",
		"img/pages/p3Pic_18.jpg",
		"img/pages/p3Pic_19.jpg",

		"img/pages/p3Pic_20.jpg",
		"img/pages/p3Pic_21.jpg",
		"img/pages/p3Pic_22.jpg",
		"img/pages/p3Pic_23.jpg",
		"img/pages/p3Pic_24.jpg",
		"img/pages/p3Pic_25.jpg",

	];
	var page4LoadList = [
		"img/pages/timelineBg.png",

		"img/pages/p4_1949.png",
		"img/pages/p4_1964.png",
		"img/pages/p4_1969.png",
		"img/pages/p4_1982.png",
		"img/pages/p4_1983.png",
		"img/pages/p4_1985.png",
		"img/pages/p4_1986.png",
		"img/pages/p4_1987.png",
		"img/pages/p4_1990.png",
		"img/pages/p4_2000.png",
		"img/pages/p4_2004.png",
		"img/pages/p4_2008.png",
		"img/pages/p4_2011.png",
		"img/pages/p4_2013.png",
		"img/pages/p4_2015.png",
		"img/pages/p4_2016.png"
	];

	//各个页面加载状态
	var pageLoadStatus = {
		page0: {
			loadStatus: false,
			loadList: page0LoadList
		},
		page1: {
			loadStatus: false,
			loadList: page1LoadList
		},
		page2: {
			loadStatus: false,
			loadList: page2LoadList
		},
		page3: {
			loadStatus: false,
			loadList: page3LoadList
		},
		page4: {
			loadStatus: false,
			loadList: page4LoadList
		},
	};
	//加载页面资源，如果已经加载过了那么直接显示执行回调函数，必须要有回调函数！
	function loadPage(index, callback) {
		var obj = pageLoadStatus["page" + index];
		var loadStatus = obj.loadStatus;
		if(loadStatus) {
			console.log("已经加载过了");
			if(callback != null) {
				callback();
			}
		} else {
			obj.loadStatus = true;
			showloading(obj.loadList, callback, true);
		}
	}

	function showloading(list, callBack, isShowLoading) {
		var iNow = 0;
		var len = list.length;
		$('#loading').show();
		$('#loading_valTxt').text("0%");
		for(var i = 0; i < len; i++) {
			var objImg = new Image();
			objImg.src = list[i];
			//						console.log("objImg.src " + objImg.src, i);
			objImg.onload = function() {
				iNow++;
				$('#loading_valTxt').text(Math.ceil(iNow / len * 100) + "%");
				if(iNow == len) {
					if(isShowLoading) {
						$('#loading').fadeOut();
						//					setTimeout(function() {
						//						$('#loading').fadeOut();
						//					}, 500);
					}
					if(callBack != null) {
						callBack();
					}
					return;
				}
			};
		}
	}

	//第一页链接返回检查
	function checkUrl() {
		console.log("window.location.href " + getQueryString("page"));
		//目前只判断页面1，其它页面不管
		if(getQueryString("page") == "1") {
			$("#startPage").hide();
			$("#loadingPage").hide();
			$(".footerBtn").siblings().removeClass("selected").eq(1).addClass("selected");
			//进入第一页
			loadPage(1, function() {
				console.log("加载page" + 1 + "完成");
				gotoSubPage(1);
			}, true);

		} else if(getQueryString("page") == "4") {
			$("#startPage").hide();
			$("#loadingPage").hide();
			$(".footerBtn").siblings().removeClass("selected").eq(4).addClass("selected");
			//进入第四页
			loadPage(4, function() {
				console.log("加载page" + 4 + "完成");
				gotoSubPage(4, true);
			}, true);
		} else {
			//预加载
			loadPage(0, function() {
				console.log("页面0加载完成");
				//	$("#loading").css("display", "none");
			}, true)
		}
	}
	checkUrl();

	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	}

	//
	//	function onImgError() {
	//		//文件加载出错时，延时1秒直接显示完成
	//		console.log("加载出错");
	//		setTimeout(function() {
	//			$("#loader_txt").text("loading..." + 100 + "%");
	//			$("#loading").transition({
	//				opacity: 0
	//			}, 500, function() {
	//				loadComplete();
	//			});
	//		}, 1000);
	//	}
	//
	//	var index = 0;
	//	i = allFrames.length;
	//	for(; i > index; index++) {
	//		var img = new Image;
	//		img.onload = onLoadImg;
	//		img.onerror = onImgError;
	//		img.src = allFrames[index];
	//	}

	//
	var isSupportTouch = "ontouchend" in document ? true : false;
	_tap = isSupportTouch ? "touchend" : "click";
	console.log("_tap:" + _tap);

	//	p8Init();
	$(window).on("resize", scalePage);
	//scalePage();
	setTimeout(scalePage, 200);
	swiperInit();
	soundInit();

	//延时侦听
	setTimeout(function() {
		$("#loadingPage").click(function() {
			console.log("点击");
			$("#startPage").show();
			//			setTimeout(function() {
			$(".loading_tel").removeClass("animated zoomIn").addClass("smTelzoomOut");
			//			}, 100);
		});
	}, 4200);

	//首页点击的哪个按钮
	var curMenuIndex = 1;
	//	$(".menuBtn").click(function() {
	//		$(".p1_tipArrow").fadeIn().addClass("tipArrow_ani");
	//		$(".p1Tip").hide();
	//		var index = $(this).data("index");
	//		curMenuIndex = index;
	//		$(".p1_tip" + index).show();
	//	});

	//	滑动处理  
	var startX, startY;
	var isStartPageTouched;
	var curRotateAngle = 0;
	//点击按钮时的角度
	var localAngle = 0;

	//转盘中心位置
	//	var centerX = (351 - 68 + 308 * 0.5);
	//	var centerY = (317 + 335 + 309 * 0.5);
	var centerX = 358;
	var centerY = 799.5;

	//	$(".dott").css("left", centerX).css("top", centerY);
	//
	//	var C = $('.p1Tel_dial').position().top;
	//	var D = $('.p1Tel_dial').position().left;
	//	console.log("相对 " + C, D);

	$(".menuBtn").on("touchstart", function(ev) {
		//		console.log("menuBtn touchstart");

		//显示箭头 和tip
		$(".p1_tipArrow").fadeIn();
		var index = $(this).data("index");
		curMenuIndex = index;
		$(".p1_tip" + index).show();
		//
		isStartPageTouched = true;

		//
		var curX = ev.originalEvent.touches[0].pageX;
		var curY = ev.originalEvent.touches[0].pageY;
		//
		var dy = centerY - curY;
		var dx = curX - centerX;
		//
		localAngle = GetSlideAngle(dx, dy);
		//		console.log("初始角度  " + localAngle);
	});

	$("#startPage").on("touchstart", function(ev) {
		//		console.log("startPage touchstart");
		if(isStartPageTouched) {
			startX = ev.originalEvent.touches[0].pageX;
			startY = ev.originalEvent.touches[0].pageY;

			$(".p1Tel_dial").css({
				"-webkit-transition": "",
				"transition": ""
			});
			cirles = 0;
			lastAngle = 0;
		}
	});
	//上次的角度
	var lastAngle = 0;
	var cirles = 0; //圈数
	$("#startPage").on("touchmove", function(ev) {
		//解决android不能触发touchend
		ev.preventDefault();
		if(isStartPageTouched) {
			var curX = ev.originalEvent.changedTouches[0].pageX;
			var curY = ev.originalEvent.changedTouches[0].pageY;
			//
			var dy = centerY - curY;
			var dx = curX - centerX;
			//
			var angle = curRotateAngle = -GetSlideAngle(dx, dy) + localAngle;
			//
			var realAngle = angle;
			if(realAngle < 0) {
				realAngle = 360 + angle;
			}

			//			console.log("astAngle - realAngle    ", (lastAngle - realAngle));

			//大于300则表明增加了一周，小于-300则表示减少一周
			var offest = lastAngle - realAngle;
			if(offest > 300) {
				cirles++;
			} else if(offest < -300) {
				cirles--;
			}

			//			console.log("angle " + angle, realAngle);
			$(".p1Tel_dial").css({
				rotate: realAngle + 'deg'
			});

			lastAngle = realAngle;

			//			$(".p1Tel_dial").css({
			//				"transform": "rotate(" + angle + "deg)",
			//				"-webkit-transform": "rotate(" + angle + "deg)"
			//			});
		}
	});

	var angleArr = [60, 135, 190, 260];
	$("#startPage").on("touchend", function(ev) {

		//  transform: rotate(495.12deg);
		//console.log("curRotateAngle " + curRotateAngle);
		if(isStartPageTouched) {

			//			console.log("touched " + (-curRotateAngle));

			var delay = (Math.abs(cirles) + 1) * 1000 * 0.5 + 200;
			var angle = (-cirles * 360);
			var telDialDelay = delay * 0.001 * 0.5;
			$(".p1Tel_dial").css({
				"transform": "rotate(" + angle + "deg)",
				"-webkit-transform": "rotate(" + angle + "deg)",
				"-webkit-transition": "all " + 0.6 + "s cubic-bezier(0.65, 0.45, 0.45, 1.37)",
				"transition": "all " + 0.6 + "s cubic-bezier(0.65, 0.45, 0.45, 1.37)",
			});
			//
			$(".p1_tipArrow").fadeOut();
			$(".p1Tip").fadeOut();

			isStartPageTouched = false;
			//
			//			console.log("delay " + delay);
			//			$(this).addClass("tel_dial_ani");

			console.log("转动角度 " + (cirles * 360 + lastAngle), angleArr[curMenuIndex - 1]);
			if((cirles * 360 + lastAngle) < angleArr[curMenuIndex - 1]) return;

			setTimeout(function() {
				//进入指定页面s
				$("#startPage").transition({
					"opacity": 0
				}, 1000, function() {
					$(this).hide().css("opacity", 1);
				});
				$("#loadingPage").hide();
				//
				$(".loading_tel").removeClass("smTelzoomOut");
				//
				$(".footerBtn").siblings().removeClass("selected").eq(curMenuIndex).addClass("selected");

				loadPage(curMenuIndex, function() {
					console.log("加载page" + curMenuIndex + "完成");
					gotoSubPage(curMenuIndex);
				}, true);
			}, delay);
		}
	});

	//滑动处理  
	//	var page2StartX, page2StartY;
	//	$("#prevPicBtn, #nextPicBtn").on("touchstart", function(ev) {
	//		page2StartX = ev.originalEvent.touches[0].pageX;
	//		page2StartY = ev.originalEvent.touches[0].pageY;
	//	});
	//	$("#prevPicBtn, #nextPicBtn").on("touchmove", function(ev) {
	//		//解决android不能触发touchend
	//		ev.preventDefault();
	//	});
	//	$("#prevPicBtn, #nextPicBtn").on("touchend", function(ev) {
	//		var endX, endY;
	//		endX = ev.originalEvent.changedTouches[0].pageX;
	//		endY = ev.originalEvent.changedTouches[0].pageY;
	//		var direction = GetSlideDirection(page2StartX, page2StartY, endX, endY);
	//		switch(direction) {
	//			case 0:
	//				//				alert("没滑动");
	//				break;
	//			case 1:
	//				//				alert("向上");
	//				//				break;
	//			case 2:
	//				//				alert("向下");
	//				//				break;
	//			case 3:
	//				//				alert("向左");
	//				//				break;
	//			case 4:
	//				//				alert("向右");
	//				//四个方向滑动都OK
	//				var id = $(ev.target).attr("id");
	//				if(id == "prevPicBtn") {
	//					prevPic();
	//				} else if(id == "nextPicBtn") {
	//					nextPic();
	//				}
	//				break;
	//			default:
	//		}
	//	});

	//----根据url参数来决定显示哪页

	//底部按钮

	$(".footerBtn").click(function() {
		$(this).siblings().removeClass("selected").end().addClass("selected");

		var index = $(this).index();

		loadPage(index, function() {
			console.log("加载page" + index + "完成");
			gotoSubPage(index);
		}, true);

	});

	var subpage1Loaded = false;
	var subpage2Loaded = false;
	var subpage3Loaded = false;
	var subpage4Loaded = false;

	function gotoSubPage(index, reload) {
		//去掉参数
		var href = window.location.href;
		var newHref = href.replace(/(\?|#)[^"]*/g, '');
		history.replaceState({}, "", newHref);
		//
		if(index == 0) {
			//去首页
			$(".subpage").hide();
			$("#startPage").show();
			$("#loadingPage").hide();
			$(".footer").hide();
			curMenuIndex = 1;
		} else {
			$(".footer").show();
			$(".subpage").hide().eq(index - 1).show();
		}
		//
		switch(index) {
			case 1:
				{
					//设置标记
					history.replaceState({}, "", window.location.href + "?page=1");

					if(!moreNewsScroll) {
						moreNewsScroll = new IScroll("#newsListWrapper", {
							mouseWheel: true,
							preventDefault: false,
							preventDefaultException: {
								tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)/
							},
							scrollbars: true,
							interactiveScrollbars: true,
							shrinkScrollbars: "scale",
							fadeScrollbars: false,
						});
						var htmlString = "";
						for(var i = 0; i < newsData.length; i++) {
							var title = newsData[i].title.split("|").join("<br>");
							var head = newsData[i].head || "img/covers/public.jpg";
							var url = newsData[i].url;
							//
							htmlString += '<li class="linkItem"><a href="' + url + '"><div class="pic" style="background-image:url(' + head + ')"></div><div class="title">' + title + '</div></a></li>';
						}
						$("#scroller-content").append(htmlString);
						setTimeout(function() {

							moreNewsScroll.refresh();
						}, 0);

					}
					break;
				}
			case 2:
				{
					$("#txtBox").addClass("animated fadeInUp");

					if(!anim_pre) {
						anim_pre = frameAnimation.anims($('#prevPicBtn'), 368, 5, 0.5, 2);
					}
					//					anim_s.start();
					//
					if(!anim_next) {
						anim_next = frameAnimation.anims($('#nextPicBtn'), 518, 5, 0.5, 2);
					}
					//					anim_b.start();

					$(".tips").show();
					setTimeout(function() {
						$(".tips").hide();
					}, 3500);

					break;
				}
			case 3:
				{

					if(!page3_swiper) {
						console.log("初始");
						$("#tx_title").html(p3TxtArr[0].split("|").join("<br>"));

						//初始swiper
						page3_swiper = new Swiper('#smallSwiper', {
							//							pagination: '.swiper-pagination',
							//							paginationClickable: '.swiper-pagination',
							nextButton: '.swiper-button-next',
							prevButton: '.swiper-button-prev',
							loop: true,
							//							spaceBetween: 30,
							observer: true, //修改swiper自己或子元素时，自动初始化swiper
							observeParents: true, //修改swiper的父元素时，自动初始化swiper
							onSlideChangeStart: function(swiper) {
								if(isPage3SwiperAdded == false) {
									isPage3SwiperAdded = true;
									//切换的时候迅速加入后面的17个。
									var slideStrArr = [];
									for(var i = 11; i < 28; i++) {
										slideStrArr.push('<div class="swiper-slide"><div class="img" style="background-image: url(img/pages/p3Pic_' + i + '.jpg);"></div></div>');
									}
									swiper.appendSlide(slideStrArr);
								}

								var curIndex = swiper.activeIndex;
								var curtitle = p3TxtArr[curIndex].split("|").join("<br>");
								console.log("p3TxtArr " + p3TxtArr.length);
								//
								$("#tx_title").removeClass("animated fadeInUp").transition({
										"top": "800px",
										"opacity": 0
									}, 300, function() {
										$("#tx_title").html(curtitle);
										$(this).transition({
											"top": "568px",
											"opacity": 1
										}, 300);
									})
									//
							},
							onInit: function() {
								setTimeout(function() {
									page3_swiper.slidePrev();
									page3_swiper.slideNext();
								}, 0);
							}
						});
					} else {
						page3_swiper.slidePrev();
						page3_swiper.slideNext();
					}
					break;
				}
			case 4:
				{
					//设置标记
					history.replaceState({}, "", window.location.href + "?page=4");
					
					if(subpage4Loaded) {
						return;
					}
					subpage4Loaded = true;
					//
					var startAt = 1;
					if(reload)
					{
						startAt = 25;
//						$('#dates li').eq(24).find('a').trigger('click');
					}
					
					$().timelinr({
						orientation: 'horizontal',
						issuesTransparency: 0,
						touchEnabled: "true",
						startAt: startAt
					});
					
//					$("#videoPlayer").html('<iframe frameborder="0" width="640" height="498" src="http://v.qq.com/iframe/player.html?vid=u033830nzn4&tiny=0&auto=0" allowfullscreen></iframe>');
					break;
				}
		}
	}

	$("#prevPicBtn").click(function() {
		prevPic();
	});
	$("#nextPicBtn").click(function() {
		nextPic();
	});
	$("#playVideoBtn").click(function() {
		window.location.href = "http://v.qq.com/iframe/player.html?vid=u033830nzn4&tiny=0&auto=0";
	});
//	$(".videoPlayer").click(function() {
//		if($(this).attr("id") == "videoPlayer") {
//			$(this).hide();
//		}
//	});
}

//-------------第二页图片切换处理------

var curPicIndex = 0;

function prevPic() {
	curPicIndex--;
	if(curPicIndex < 0) {
		curPicIndex = 16;
	}
	//	music.play();

	//	console.log(" prev " + curPicIndex);
	//
	//
	anim_next.start(true);
	anim_pre.start(true);
	gotoPic();

}

function nextPic() {
	curPicIndex++;
	if(curPicIndex > 16) {
		curPicIndex = 0;
	}

	//	music.play();
	//		console.log(" next " + curPicIndex);
	//
	//
	anim_pre.start(false);
	anim_next.start(false);
	gotoPic();

}

function gotoPic() {
	$("#picBox").removeClass("fadeIn").transition({
			"opacity": 0
		}, 500, function() {
			$(this).css("background-image", 'url("img/pages/p2Pic_' + (curPicIndex + 1) + '.png")').transition({
				"opacity": 1
			}, 500);
		})
		//
	$("#txtBox").removeClass("animated fadeInUp").transition({
		"top": "900px",
		"opacity": 0
	}, 500, function() {
		var title = p2TxtArr[curPicIndex];
		$(this).html(title).transition({
			"top": "619px",
			"opacity": 1
		}, 500);
	})
}
//////////////////////////////////////////////////////////////////////////////////////////////////
var mouseDownY;

function swiperInit() {
	mySwiper = new Swiper('#bigSwiper', {
		//  当为vertical时，与iscroll相冲突！！！
		//		direction: 'vertical',
		speed: 800,
		onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeStart: function(swiper) {
			console.log("onSlideChangeStart:" + swiper.activeIndex);
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			if(swiper.activeIndex == 7) {
				if(isp8MovEnd == false) {
					p8MovPlay();
				}
			}
		},
		initialSlide: 1,
		virtualTranslate: true, // 禁用拖动0919
		/*onTouchStart:function(swiper,event){
		    //console.log("s:"+swiper.activeIndex,event.changedTouches[0].clientY);
		    mouseDownY=event.changedTouches[0].clientY;
		},
		onTouchEnd:function(swiper,event){
		    if(swiper.activeIndex==2){
		        if(event.changedTouches[0].clientY-mouseDownY<-100){
		            showTip();
		        }
		    }
		},*/
	});

	mySwiper.lockSwipeToNext();
	//mySwiper.slideTo(6);
}
/////////////////////////////// scalePage ////////////////////////////////////////////////
function scalePage(e) {
	//////////长图适配，上下被裁切
	//$(".page_bg").css({top:(window.innerHeight-1151)/2+"px"});

	//	alert(window.innerHeight)

	var sNum = window.innerHeight / 1040;
	if((window.innerHeight < 1030 && window.innerHeight > 700)) {
		$(".scaleCon").css({
			transform: "scale(" + sNum + "," + sNum + ")"
		});
	} else {
		$(".scaleCon").css({
			transform: "scale(" + 1 + "," + 1 + ")"
		});

	}

	if(window.innerHeight == 1030) {
		$(".footer").css("bottom", 10);
	}

	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isiOS) {
		//底部设置
		//		$(".footer").css("top", $(window).height() - $(".footer").height());
	}

	/*
	 else if(window.innerHeight<700){
	 $(".scaleCon").css({transform:"scale("+1+","+1+") translateY("+(window.innerHeight-1000)+"px)"});
	 }

	if(window.innerHeight>700){
	    $(".swiper-container").css("top","0px");
	}else{

	}
	*/
	//alert("innerHeight:"+window.innerHeight);
}
/////////////////////////////// soundInit ////////////////////////////////////////////////
function soundInit() {
	var bgMusic = window.document.getElementById("bgMusic");
	bgMusic.src = $("#bgMusic").attr("srcUrl");
	$("#soundIcon").on(_tap, soundIconDown);
	$("#soundIcon").addClass("bgmusic-btn-mov");
	if(bgMusic.paused) {
		$("body").one(_tap, bodyDown);
	}

	function bodyDown(event) {
		//alert("adfasdfa")
		console.info("onc body click");
		bgMusic.play();
		//$("body").unbind("touchstart",bodyDown)
	}
}

function soundIconDown(event) {
	var bgMusic = window.document.getElementById("bgMusic");
	console.log(bgMusic.paused);
	if(bgMusic.paused) {
		bgMusic.play();
		//$("#soundIcon").css({backgroundImage:"url(images/soundIcon.png)"});
		$("#soundIcon").removeClass("soundIconae");
		$("#soundIcon").addClass("bgmusic-btn-mov");
	} else {
		bgMusic.pause();
		//$("#soundIcon").css({backgroundImage:"url(images/soundIconae.png)"});
		$("#soundIcon").addClass("soundIconae");
		$("#soundIcon").removeClass("bgmusic-btn-mov");
		//myAuto.currentTime = 0.0;
	}
}

//返回角度  
function GetSlideAngle(dx, dy) {
	return Math.atan2(dy, dx) * 180 / Math.PI;
}
//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动  
function GetSlideDirection(startX, startY, endX, endY) {
	var dy = startY - endY;
	var dx = endX - startX;
	var result = 0;

	//如果滑动距离太短  
	if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
		return result;
	}

	var angle = GetSlideAngle(dx, dy);
	if(angle >= -45 && angle < 45) {
		result = 4;
	} else if(angle >= 45 && angle < 135) {
		result = 1;
	} else if(angle >= -135 && angle < -45) {
		result = 2;
	} else if((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
		result = 3;
	}

	return result;
}

//----------------------------序列帧动画（依赖JQ）--------------------------------
//function play() {
//	var anim = frameAnimation.anims($('#animbg'), 720, 6, 1, 0);
//	anim.start();
//}
(function(window) {
	window.frameAnimation = {
		anims: (function() {
			/*
			obj=>需要执行背景动画的对象；
			width:图片的总宽度
			steps=>需要的帧数；
			eachtime=>一次完整动画需要的时间；
			times=>动画执行的次数 0表示无限反复
			isReverse=>是否倒序播放
			*/
			return function(obj, width, steps, eachtime, times, callback) {
				var runing = false;
				var handler = null; //obj,width,steps,eachtime,times定时器
				var step = 0; //当前帧
				var time = 0; //当前第几轮
				var speed = eachtime * 1000 / steps; //间隔时间
				var oneStepWidth = width / steps;

				function _play(isReverse) {
					if(isReverse) {
						if(step <= 0) {
							step = steps;
							time++;
						}
					} else {
						if(step >= steps) {
							step = 0;
							time++;
						}
					}

					if(0 == times || time < times) {
						obj.css('background-position', -oneStepWidth * step + 'px 0px');

						if(isReverse) {
							step--;
						} else {
							step++;
						}
					} else {
						control.stop();
						callback && callback();
					}
				}

				var control = {
					start: function(isReverse) {
						if(!runing) {
							runing = true;
							step = time = 0;
							if(isReverse == undefined) isReverse = false;
							if(isReverse) step = steps;
							handler = setInterval(_play, speed, isReverse);
						}
						return this;
					},
					stop: function(restart) {
						if(runing) {
							runing = false;
							if(handler) {
								clearInterval(handler);
								handler = null;
							}
							if(restart) {
								obj.css('background-position', '0 0');
								step = 0;
								time = 0;
							}
						}
					},
					dispose: function() {
						this.stop();
						//console.log('anim dispose');
					}
				};
				return control;
			}
		})()
	}
})(window);
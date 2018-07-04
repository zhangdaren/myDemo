$(function() {

	//顶部布局处理
	var $tabNav = $("#tabNav");
	window.addEventListener("scroll", function(b) {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var m_common_header_height = 0;
		if(scrollTop > m_common_header_height) {
			$tabNav.css("position", "fixed");
		} else {
			$tabNav.css("position", "relative");
		}
	});

	//初始化环形进度条
	initCircleProgress();

	var $ballBox_data = $("#ballBox_data");
	var $ballBox_tel = $("#ballBox_tel");
	//流量球
	initWaterPolo($ballBox_data, percent_data, 236, waterColor_gray);
	//通话球
	initWaterPolo($ballBox_tel, percent_tel, 314, waterColor_white);

	//////////////////////////////////////左右滑动处理/////////////////////////////////////////////////
	var $banner = $("#banner");
	var $bannerBox = $("#bannerBox");
	var $tabContent = $("#tabContent");
	var moveY = $(window).height() - $banner.height();
	var $bannerHeight = $banner.height();
	//圆环index
	var curCircleIndex = 0;
	//tab index
	var curTabIndex = 0;

	var $style_orange = $("#style_orange");
	var $style_blue = $("#style_blue");
	var $style_pink = $("#style_pink");
	var $style_panelGroup = $("#panelGroup");
	var $circleNav = $("#circleNav");
	var $txt_orange = $(".txt_orange");
	var $txt_blue = $(".txt_blue");
	//
	var $dataBall_data = $("#dataBall_data");

	$banner.swipe({
		//Generic swipe handler for all directions
		swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
			console.log("You swiped " + direction, event.target);

			if(direction == "left" || direction == "right") {
				var $target = $(event.target);
				if($target.closest(".circleNav").length == 0) {
					//////////////////////////拖动翻页//////////////////////////
					if(direction == "left") {
						curTabIndex++;
					} else if(direction == "right") {
						curTabIndex--;
					}
					if(curTabIndex >= 3) curTabIndex = 0;
					if(curTabIndex < 0) curTabIndex = 2;

					gotoTabBody(curTabIndex);
				} else {
					////////////////////////////拖动圆环////////////////////////
					if(direction == "left") {
						curCircleIndex--;
					} else if(direction == "right") {
						curCircleIndex++;
					}
					if(curCircleIndex >= 3) curCircleIndex = 0;
					if(curCircleIndex < 0) curCircleIndex = 2;
					console.log(curCircleIndex);

					//0309
					//当前角度
					var oldDeg = cssTransform($circleNav, "rotate");
					turnCircle(curCircleIndex, direction, oldDeg);
				}
			}
		},
		//0309
		tap: function(e, target) {
			if($(target).parents(".circleNav").length > 0) {
				curCircleIndex++;
				if(curCircleIndex >= 3) curCircleIndex = 0;
				if(curCircleIndex < 0) curCircleIndex = 2;
				turnCircle(curCircleIndex);
			}

			//			if($(target).attr("id") == "circleLeft") {
			//				curCircleIndex++;
			//				if(curCircleIndex >= 3) curCircleIndex = 0;
			//				if(curCircleIndex < 0) curCircleIndex = 2;
			//				turnCircle(curCircleIndex);
			//			} else if($(target).attr("id") == "circleRight") {
			//				curCircleIndex++;
			//				if(curCircleIndex >= 3) curCircleIndex = 0;
			//				if(curCircleIndex < 0) curCircleIndex = 2;
			//				turnCircle(curCircleIndex);
			//			}
		}
	});

	//0309
	var curAngleIndex = 3;
	var angleArr = [-360, -270, -90, 0, 90, 270, 360];
	var isTurning = false;

	function turnCircle(curCircleIndex, direction, oldDeg) {
		//					if(direction == "left") {
		//						curAngleIndex++;
		//					} else if(direction == "right") {
		//						curAngleIndex--;
		//					}
		//					if(curAngleIndex >6) curAngleIndex = 3;
		//					if(curAngleIndex < 0) curAngleIndex = 3;

		if(isTurning) return;

		isTurning = true;

		var angle;
		switch(curCircleIndex) {
			case 0:
				//旋转盘盘
				angle = direction == "left" ? 360 : 0;
				$circleNav.transition({
					rotate: angle + "deg",
					duration: 200,
					easing: 'linear',
				});

				//切换内容
				$style_panelGroup.transition({
					y: moveY,
					opacity: 0,
					duration: 200,
					easing: 'easeOutCubic',
					complete: function() {
						$style_orange.show().css({
							y: 0,
							opacity: 1,
						});
						$style_blue.show().css({
							y: $style_orange.height() + 40 * offestScale,
							opacity: 1,
						});

					}
				}).transition({
					y: 0,
					opacity: 1,
					duration: 200,
					easing: 'easeOutCubic',
					complete: function() {
						//
						if(direction == "left") {
							$circleNav.css({
								rotate: "0deg"
							});
						} else if(direction == "right") {
							$circleNav.css({
								rotate: "0deg"
							});
						}
						isTurning = false;
					}
				});

				$style_pink.transition({
					y: $style_orange.height() + $style_blue.height() + 80 * offestScale
				});

				//初始化水波球，这里的百分比需要预先获取
				initWaterPolo($ballBox_data, percent_data, 236, waterColor_gray);

				//更新颜色
				$dataBall_data.attr("class", "data-ball");

				break;
			case 1:
				//orange
				//旋转盘盘
				angle = direction == "left" ? 270 : -90;
				$circleNav.transition({
					rotate: angle + "deg",
					duration: 200,
					easing: 'linear',
				});
				//切换内容
				$style_blue.transition({
					y: moveY,
					opacity: 0,
					duration: 200,
					easing: 'easeOutCubic',
					complete: function() {
						$style_blue.hide();
					}
				});
				$style_orange.show().css({
					y: moveY,
					opacity: 0,
				}).transition({
					y: 0,
					opacity: 1,
					delay: 200,
					duration: 200,
					easing: 'easeOutCubic',
					complete: function() {
						isTurning = false;
					}
				});

				$style_pink.transition({
					y: $style_orange.height() + 40 * offestScale
				});

				//初始化水波球，这里的百分比需要预先获取
				initWaterPolo($ballBox_data, percent_data, 236, waterColor_orange);

				//更新颜色
				$dataBall_data.attr("class", "data-ball orange");
				break;
			case 2:
				//blue
				//旋转盘盘
				angle = direction == "left" ? 90 : -270;
				$circleNav.transition({
					rotate: angle + "deg",
					duration: 200,
					easing: 'linear',
				});
				//切换内容
				$style_orange.transition({
					y: moveY,
					opacity: 0,
					duration: 200,
					easing: 'easeOutCubic',
					complete: function() {
						$style_orange.hide();
					}
				});
				$style_blue.show().css({
					y: moveY,
					opacity: 0,
				}).transition({
					y: 0,
					opacity: 1,
					delay: 200,
					duration: 200,
					easing: 'easeOutCubic',
					complete: function() {
						isTurning = false;
					}
				});

				$style_pink.transition({
					y: $style_blue.height() + 40 * offestScale
				});

				//初始化水波球，这里的百分比需要预先获取
				initWaterPolo($ballBox_data, percent_data, 236, waterColor_blue);

				//更新颜色
				$dataBall_data.attr("class", "data-ball blue");
				break;
		}
		//		$txt_orange.css({
		//			rotate: -angle
		//		});
		//		$txt_blue.css({
		//			rotate: -angle
		//		});

		initCircleLeft(percent_data, -angle);
		initCircleRight(percent_tel, -angle);

		$('html,body').animate({
			scrollTop: '0px'
		}, 200);

	}
	//					

	$("#tabNav").on("click", "li", function() {
		var index = $(this).index();
		gotoTabBody(index);
	});

	//tab切换调用
	function gotoTabBody(index) {
		$("#tabNav li").eq(index).addClass("active").siblings().removeClass("active");
		//
		var $li = $("#tabContent .tabBody").eq(index);

		var $item = $("#banner .item").eq(index);
		$banner.attr("data-navIndex", index);

		$tabContent
			//		.css("padding-top", $bannerBox.height())
			.transition({
				y: moveY,
				opacity: 0,
				duration: 200,
				easing: 'easeOutCubic',
				complete: function() {
					$li.show().siblings().hide();
				}
			}).transition({
				y: 0,
				opacity: 1,
				duration: 200,
				easing: 'easeOutCubic',
				complete: function() {}
			});

		$("#banner .item").css({
			opacity: 0
		});
		$item.transition({
			opacity: 1,
			duration: 200,
			easing: 'easeOutCubic',
			complete: function() {}
		});

		$('html,body').animate({
			scrollTop: '0px'
		}, 200);
	}
	initCircleLeft(percent_data, 0);
	initCircleRight(percent_tel, 0);

	function initCircleLeft(percent, rotate) {
		console.log(percent);
		var tp_left = drawHalfCircle("circleLeft", "left", percent * 0.01, rotate);
		//		if(percent > 99) {
		//			tp_left.x = tp_left.x - $txt_orange.width() / 2 - 20;
		//		} else if(percent >= 90) {
		//			tp_left.x = tp_left.x - $txt_orange.width() / 2 - 0;
		//		} else if(percent >= 80) {
		//			tp_left.x = tp_left.x - $txt_orange.width() / 2 + 10;
		//		} else if(percent >= 70) {
		//			tp_left.x = tp_left.x - $txt_orange.width() / 2 + 10;
		//		} else if(percent >= 60) {
		//			tp_left.x = tp_left.x - $txt_orange.width() / 2 + 20;
		//		} else if(percent < 3) {
		//			tp_left.x = tp_left.x - $txt_orange.width() + 10;
		//		} else {
		//			tp_left.x = tp_left.x - $txt_orange.width() / 2 + 25
		//		}
		//		$txt_orange.css({
		//			"left": tp_left.x,
		//			"top": tp_left.y - $txt_orange.height() / 2
		//		});
	}

	function initCircleRight(percent, rotate) {
		var tp_right = drawHalfCircle("circleRight", "right", percent * 0.01, rotate);

		//		if(percent > 99) {
		//			tp_right.x = tp_right.x + 20;
		//		} else if(percent >= 90) {
		//			tp_right.x = tp_right.x + 8 + (percent - 100) - 5;
		//		} else if(percent >= 80) {
		//			tp_right.x = tp_right.x - $txt_blue.width() / 2 + 25
		//		} else if(percent >= 70) {
		//			tp_right.x = tp_right.x - $txt_blue.width() / 2 + 25
		//		} else if(percent >= 60) {
		//			tp_right.x = tp_right.x - $txt_blue.width() / 2 + 25
		//		} else if(percent >= 50) {
		//			tp_right.x = tp_right.x - $txt_blue.width() / 2 + 25
		//		} else if(percent >= 40) {
		//			tp_right.x = tp_right.x - $txt_blue.width() / 2 + 25
		//		} else if(percent >= 30) {
		//			tp_right.x = tp_right.x - $txt_blue.width() / 2 + 20
		//		} else if(percent >= 20) {
		//			tp_right.x = tp_right.x - $txt_blue.width() / 2 + 10
		//		} else if(percent >= 10) {
		//			tp_right.x = tp_right.x - $txt_blue.width() / 2
		//		} else if(percent < 3) {
		//			tp_right.x = tp_right.x + 10;
		//		} else {
		//			tp_right.x = tp_right.x - $txt_blue.width() / 2
		//		}
		//
		//		$txt_blue.css({
		//			"left": tp_right.x,
		//			"top": tp_right.y - $txt_blue.height() / 2
		//		});
	}

	$style_blue.show().transition({
		y: $style_orange.height() + 40 * offestScale,
		opacity: 1,
	});
	$style_pink.transition({
		y: $style_orange.height() + $style_blue.height() + 80 * offestScale
	});

	setTimeout(function() {
		//		$tabContent.css("padding-top", $bannerBox.height());
		$('html,body').animate({
			scrollTop: '0px'
		}, 200);
	}, 200)

});
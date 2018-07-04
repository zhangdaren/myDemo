//解决IOS微信webview后退不执行JS的问题
window.onpageshow = function(event) {
	if(event.persisted) {
		window.location.reload();
	}
};

//千分位处理
function toThousands(num) {
	return(num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

/*
 * 参数说明
 * obj : 动画的节点，本例中是ul
 * top : 动画的高度，本例中是-35px;注意向上滚动是负数
 * time : 动画的速度，即完成动画所用时间，本例中是500毫秒，即marginTop从0到-35px耗时500毫秒
 * function : 回调函数，每次动画完成，marginTop归零，并把此时第一条信息添加到列表最后;
 * 
 */
function noticeUp(obj, top, time) {
	$(obj).animate({
		marginTop: top
	}, time, function() {
		$(this).css({
			marginTop: "0"
		}).find(":first").appendTo(this);
	})
}

//ctx canvas
//obj 参数列表
//anticlockwise true表示逆时针，false 表示顺时针,默认为顺时针
var drawArc = function(ctx, obj, anticlockwise) {
	ctx.beginPath();
	ctx.lineWidth = obj.lineWidth;
	ctx.strokeStyle = obj.stroke;
	ctx.lineCap = 'round';
	if(anticlockwise) {
		anticlockwise = true;
	} else {
		anticlockwise = false;
	}
	ctx.arc(obj.x, obj.y, obj.r, obj.start, obj.end, anticlockwise);
	ctx.stroke();
};

var offestScale = lib.flexible.dpr / 2;

// 参数依次是canvasId,  外圈本月百分比（0-1），外圈本月显示文本，内圈本日百分比（0-1），内圈本日显示文本
//mouthPercent或 dayPercent 当等于-1是，代表不显示此环
var drawCircle = function(canvasId, mouthPercent, mouthTxt, dayPercent, dayTxt) {

	//					
	function getSmOffestX() {
		var result = 0;
		if(dayPercent < 0.4) {
			result = -25;
		} else if(dayPercent < 0.45) {
			result = -20;
		} else if(dayPercent < 0.55) {
			result = -40;
		} else if(dayPercent < 0.75) {
			result = -80;
		} else if(dayPercent < 0.85) {
			result = -80;
		} else if(dayPercent < 0.95) {
			result = -90;
		} else if(dayPercent <= 1) {
			result = -100;
		}
		return result;
	}

	function getSmOffestY() {
		var result = 0;
		if(dayPercent < 0.4) {
			result = -15;
		} else if(dayPercent < 0.45) {
			result = -40;
		} else if(dayPercent < 0.55) {
			result = -50;
		} else if(dayPercent < 0.75) {
			result = -60;
		} else if(dayPercent < 0.85) {
			result = -80;
		} else if(dayPercent < 0.95) {
			result = +20;
		} else if(dayPercent <= 1) {
			result = 0;
		}
		return result;
	}

	var canvas = document.getElementById(canvasId);
	var mW = canvas.width = 750;
	var mH = canvas.height = 545;

	var ctx = canvas.getContext('2d');
	var width = mW;

	//底部环形line宽带
	var bgCircleLineWidth = 8;
	//顶部环形line宽度
	var circleLineWidth = 44;
	//内部小环形line宽度
	var smCircleLineWidth = 30;
	//圆的半径
	var bigCircleRadius = 267;
	var smCircleRadius = 210;

	//起始结束角
	var initBigStartAngle = 0.815;
	var initBigEndAngle = 2.185;
	//内部小环形line宽度
	var smCircleLineWidth = 30;
	var smCircleRadius = 210;
	var initSmStartAngle = 0.77;
	var initSmEndAngle = 2.23;

	mouthPercent = parseFloat(mouthPercent);
	dayPercent = parseFloat(dayPercent);

	//fix
	if(mouthPercent == 0) {
		mouthPercent = 0.0005;
	}
	if(dayPercent == 0) {
		dayPercent = 0.0005;
	}

	var bigEndAngle = initBigStartAngle + (initBigEndAngle - initBigStartAngle) * mouthPercent;
	var smEndAngle = initSmStartAngle + (initSmEndAngle - initSmStartAngle) * dayPercent;

	//y坐标偏移值
	var offest_y = 65;

	var circle_x = width * 0.5;
	//底部圆y坐标
	var bigCircle_y_1 = bigCircleRadius + bgCircleLineWidth * 0.5 + 17 + offest_y;
	//顶部圆y坐标
	var bigCircle_y_2 = bigCircleRadius + circleLineWidth * 0.5 + offest_y;
	var smCircle_y_1 = smCircleRadius + bgCircleLineWidth * 0.5 + 76 + offest_y;
	var smCircle_y_2 = smCircleRadius + smCircleLineWidth * 0.5 + 65 + offest_y;

	if(mouthPercent >= 0) {
		//外圈
		drawArc(ctx, {
			x: circle_x, // x 坐标
			y: bigCircle_y_1, // y 坐标
			r: bigCircleRadius, // 半径
			start: 0.8 * Math.PI, // 起点
			end: 2.210 * Math.PI, // 终点
			lineWidth: bgCircleLineWidth, // 线宽
			stroke: '#EDE6D9' // 填充背景色
		});

		//颜色
		var gradient = ctx.createLinearGradient(0, 0, 480, 0);
		gradient.addColorStop("0", "#FDB164");
		gradient.addColorStop("1.0", "#F97E40");

		drawArc(ctx, {
			x: circle_x, // x 坐标
			y: bigCircle_y_2, // y 坐标
			r: bigCircleRadius, // 半径
			start: initBigStartAngle * Math.PI, // 起点
			end: bigEndAngle * Math.PI, // 终点
			lineWidth: circleLineWidth, // 线宽
			stroke: gradient // 填充背景色
		});
	}

	if(dayPercent >= 0) {
		//内圈			
		drawArc(ctx, {
			x: circle_x, // x 坐标
			y: smCircle_y_1, // y 坐标
			r: smCircleRadius, // 半径
			start: 0.753 * Math.PI, // 起点
			end: 2.247 * Math.PI, // 终点
			lineWidth: bgCircleLineWidth, // 线宽
			stroke: '#EDE6D9' // 填充背景色
		});
		drawArc(ctx, {
			x: circle_x, // x 坐标
			y: smCircle_y_2, // y 坐标
			r: smCircleRadius, // 半径
			start: initSmStartAngle * Math.PI, // 起点
			end: smEndAngle * Math.PI, // 终点
			lineWidth: smCircleLineWidth, // 线宽
			stroke: '#FFF' // 填充背景色
		});
	}

	var offest_mouth_x = 20;
	if(mouthPercent <= 0.05) {
		offest_mouth_x = 26;
	} else if(mouthPercent < 0.5) {
		if(mouthPercent > 0.10 && mouthPercent < 0.16) {
			offest_mouth_x = 20;
		} else {
			offest_mouth_x = 20;
		}
	} else {
		offest_mouth_x = 25;
	}

	// 文字位置
	var textMouth_x = circle_x + Math.cos(bigEndAngle * Math.PI) * (bigCircleRadius + offest_mouth_x + (mouthPercent < 0.5 ? 50 : 0));
	var textMouth_y = bigCircle_y_2 + Math.sin(bigEndAngle * Math.PI) * (bigCircleRadius + 40);

	var textDay_x = circle_x + Math.cos(smEndAngle * Math.PI) * (smCircleRadius + getSmOffestX());
	var textDay_y = smCircle_y_2 + Math.sin(smEndAngle * Math.PI) * (smCircleRadius + getSmOffestY());

	ctx.fillStyle = '#F68925';

	ctx.font = 18 * 1.2 + "px" + ' Arial';
	if(mouthPercent >= 0) {
		if(mouthPercent >= 0.6) {
			ctx.textAlign = "left";
		} else {
			ctx.textAlign = "center";
		}
		ctx.fillText(mouthTxt, textMouth_x, textMouth_y);
	}
	if(dayPercent >= 0) {
		ctx.textAlign = "left";
		ctx.fillText(dayTxt, textDay_x, textDay_y);
	}
	ctx.stroke();
};

//画半圆, 返回文字位置pos
function drawHalfCircle(canvasId, type, percent, rotate) {
	var canvas = document.getElementById(canvasId);
	//清空画布
	var ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, ctx.width, ctx.height);
	//
	var width = canvas.width = 465 / 2;
	var height = canvas.height = 465;

	var circleLineWidth = 60;
	var circleRadius = 465 / 2 - circleLineWidth / 2;

	//起始结束角
	var initStartAngle = 0.5;
	var initEndAngle = 1.5;

	if(type == "right") {
		initStartAngle = 0.5;
		initEndAngle = -0.5;
	}

	//fix
	if(percent == 0) {
		percent = 0.00001;
	}

	var endAngle = initStartAngle + (initEndAngle - initStartAngle) * percent;

	//y坐标偏移值
	var offest_y = 65;

	var circle_x = 0;
	var circle_y = 0;
	if(type == "left") {
		circle_x = width;
	} else {
		circle_x = 0;
	}
	circle_y = width;

	if(percent >= 0) {
		//颜色
		var gradient = ctx.createLinearGradient(0, 0, height, 0);

		var anticlockwise = false;
		if(type == "left") {
			gradient.addColorStop("0", "#FDB164");
			gradient.addColorStop("1.0", "#F97E40");
		} else {
			gradient.addColorStop("0", "#6EBFF7");
			gradient.addColorStop("1.0", "#40B3F5");
			anticlockwise = true;
		}

		//		$('canvas').drawArc({
		//			strokeStyle: gradient,
		//			strokeWidth: circleLineWidth,
		//			x: circle_x,
		//			y: circle_y,
		//			radius: circleRadius,
		//			// start and end angles in degrees
		//			start: initStartAngle,
		//			end: endAngle
		//		});

		//		
		drawArc(ctx, {
			x: circle_x, // x 坐标
			y: circle_y, // y 坐标
			r: circleRadius, // 半径
			start: initStartAngle * Math.PI, // 起点
			end: endAngle * Math.PI, // 终点
			lineWidth: circleLineWidth, // 线宽
			stroke: gradient // 填充背景色
		}, anticlockwise);
	}
	ctx.save();

	//	ctx.fillStyle = '#FFF';
	//	ctx.textAlign = "center";
	//	ctx.font = $(".txt_orange").css("font-size") + "" + ' Arial';

	var text_x = circle_x + Math.cos(endAngle * Math.PI) * (circleRadius);
	var text_y = circle_y + Math.sin(endAngle * Math.PI) * (circleRadius);
	var align = "center";
	if(type == "left") {
		if(percent > 0.97) {
			align = "right";
			text_x -= 30;
		} else if(percent < 0.03) {
			align = "right";
			text_x -= 20;
		}
	} else {
		//		text_x += width;
		if(percent > 0.97) {
			align = "left";
			text_x += 30;
		} else if(percent < 0.03) {
			align = "left";
			text_x += 20;
		}
	}

	//	$('#' + canvasId).addLayer({
	//		type: 'text',
	//		fillStyle: '#fff',
	//		name: canvasId + "_txt",
	//		text: parseInt(percent * 100) + "%",
	//		x: text_x,
	//		y: text_y,
	//		fontSize: 20,
	//		fontFamily: 'Arial',
	//		width: width,
	//		height: height,
	//		rotate: 0,
	//		align: 'center'
	//	}).drawLayers();

	$('#' + canvasId).drawText({
		fillStyle: '#FFF',
		strokeWidth: 2,
		x: text_x,
		y: text_y,
		fontSize: 20,
		fontFamily: 'Arial',
		text: parseInt(percent * 100) + "%",
		rotate: rotate,
		align: align
	});

	return {
		x: text_x * offestScale,
		y: text_y * offestScale
	}

	//	if(type == 'left') {
	//		if(percent > 0.96 && percent < 0.99) {
	//			text_y = text_y + 8;
	//			ctx.textAlign = "right";
	//		} else if(percent >= 0.99) {
	//			text_x = text_x - 8;
	//			text_y = text_y + 8;
	//			ctx.textAlign = "right";
	//		} else if(percent < 0.03) {
	//			text_x = text_x - 8;
	//			text_y = text_y + 8;
	//			ctx.textAlign = "right";
	//		} else {
	//			text_y = text_y + 8;
	//		}
	//	} else {
	//
	//		if(percent > 0.96 && percent < 0.99) {
	//			text_y = text_y + 8;
	//			ctx.textAlign = "left";
	//		} else if(percent >= 0.99) {
	//			text_x = text_x + 8;
	//			text_y = text_y + 8;
	//			ctx.textAlign = "left";
	//		} else if(percent < 0.03) {
	//			text_x = text_x + 8;
	//			text_y = text_y + 8;
	//			ctx.textAlign = "left";
	//		} else {}
	//	}
	//	ctx.translate(circle_x, circle_y);
	//	ctx.rotate(60 * Math.PI / 180);
	//		ctx.stroke();
	//	ctx.fillText(parseInt(percent * 100) + "%", text_x, text_y);
	//	ctx.restore();
}

var style_orange_colors = ["#F97E40", "#FDB164"];
var style_blue_colors = ["#6EBFF7", "#40B3F5"];
var style_pink_colors = ["#fd5f48", "#ff8372"];
//初始化initCircleProgress
function initCircleProgress() {
	$(".circleProgress").each(function(i, item) {
		if($(this).attr("data-init") != true) {
			var fillColors;
			var $dataPanel = $(this).parents(".dataPanel");
			if($dataPanel.hasClass("style_blue")) {
				fillColors = style_blue_colors;
			} else if($dataPanel.hasClass("style_orange")) {
				fillColors = style_orange_colors;
			} else if($dataPanel.hasClass("style_pink")) {
				fillColors = style_pink_colors;
			}

			var value = $(this).attr("data-value");
			$(this).circleProgress({
				emptyThickness: 10 * offestScale, // new attribute
				thickness: 16 * offestScale,
				value: value,
				size: $(".circleProgress").width(),
				startAngle: -Math.PI / 4 * 2,
				emptyFill: "#F5F5F5",
				lineCap: "round",
				fill: {
					gradient: fillColors
				}
			}).on('circle-animation-progress', function(event, progress, stepValue) {
				$(this).find('span').text(Math.round(100 * stepValue) + '%');
			});

			$(this).attr("data-init", true);
		}
	});
}

//波浪颜色
const waterColor_gray = 'rgba(182, 182, 182,0.2)';
const waterColor_orange = 'rgba(246, 137, 37,0.2)';
const waterColor_white = 'rgba(255,255,255,0.7)';
const waterColor_blue = 'rgba(85, 184, 246,0.2)';

//通话球内颜色
const waterColor_tel = ['rgba(249,126,64,0.8)', 'rgba(253,177,100,0.8)'];

//初始波浪球,参数: 放置canvs的窗口,百分比，宽度，颜色
function initWaterPolo($parent, percent, width, color) {
	//进度球
	var option = {
		wrapW: 0,
		cW: width,
		cH: width,
		lineWidth: 0,
		baseY: percent,
		nowRange: 0,
		lineColor: 'transparent',
		oneColor: color,
		twoColor: color,
		oneWaveWidth: 0.04,
		twoWaveWidth: 0.04,
		oneWaveHeight: 9,
		twoWaveHeight: 9,
	};
	var $canvas = $parent.find("canvas");
	//清空画布
	var ctx = $canvas[0].getContext('2d');
	ctx.clearRect(0, 0, ctx.width, ctx.height);
	new WaterPolo($canvas[0], option);
}

//el:需要获取或设置transform值的元素
//attr:获取或设置的transform的属性
//val:设置的transform的属性值
//demo:
//var box= document.querySelector("#box");
//cssTransform(box,"translateX","200");
//console.log(cssTransform(box,"translateX"));//200
//console.log(cssTransform(box,"scale"));//1
//console.log(cssTransform(box,"skew"));//0
function cssTransform(el, attr, val) {
	if(!el.tranform) { //判断只在无el.tranform属性时新创建el.tranform
		el.tranform = {} //为元素el设置一个属性，为一个空对象
	}
	if(arguments.length > 2) { //判断是否有传入val，有则执行封装函数设置transform值的功能
		el.tranform[attr] = val;
		var sVal = ""; //用于储存多个transform值

		for(var attrs in el.tranform) {
			switch(attrs) {
				case "rotate":
				case "rotateX":
				case "rotateY":
				case "rotateZ":
				case "rotate":
				case "skewX":
				case "skewY":
					sVal += attrs + "(" + el.tranform[attrs] + "deg) "; //注意此处的空格要加上
					break;

				case "translateX":
				case "translateY":
				case "translateZ":
					sVal += attrs + "(" + el.tranform[attrs] + "px) "; //注意单位的变化
					break;

				case "scale":
				case "scaleX":
				case "scaleY":
					sVal += attrs + "(" + el.tranform[attrs] + ") "; //注意单位的变化
					break;
			}
		}
		el.style.webkitTransform = el.style.transform = sVal;
	} else { //判断是否有传入val，无则执行封装函数获取transform值的功能
		var val = el.tranform[attr]; //获取由该函数设置的transform值的元素的获取transform值
		if(typeof val == "undefined") { //如果想要获取默认值的话
			if(attr == "scale" || attr == "scaleX" || attr == "scaleY") {
				val = 1;
			} else {
				val = 0;
			}
		}
		return val;
	}
}
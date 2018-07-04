/** * Created by lipei on 2015/5/20. */var pageindex = [];var BaseMgr;!function () {    BaseMgr = function (element_,pageName_) {        this.element_ = element_;        this.pageName_ = pageName_;    };    BaseMgr.prototype = {        init : function () {            console.log(this.pageName_+ " run!");        },        addDom : function (Callback_) {            var self_ = this;            $(this.element_).load(this.pageName_, function (responseTxt, statusTxt, xhr) {                console.log(self_.pageName_ + " add!");                if(Callback_)Callback_();            });        },        //n:需要合并的对象 override:是否重写        extend : function (n,override) {            for(var p in n)if(n.hasOwnProperty(p) && (!this.hasOwnProperty(p) || override))this[p]=n[p];        }    }}();var loadingMgr;!function () {    loadingMgr = {        loadImages: function (loadArr,callback,isshow,onceCallback) {            var element = $("body");            if(element.find("#loading").size()>0 && !isshow){                $("#loading").stop(true).fadeIn(200);            }else{            }            element.find("#loading").find(".percent").remove();            element.find("#loading").append("<div class='percent'>0%</div>");            var self_ = this;            var sources = loadArr;            var loadingPercent = "";            var count = 0;            var images = {};            var imgNum = sources.length;            for (var src in sources) {                var path = src;                images[path] = new Image();                images[path].onload = function () {                    count++;                    if(onceCallback)onceCallback();                    loadingPercent = self_.fix(Math.ceil(100/imgNum*count),2)+"%";                    element.find("#loading").find(".percent").html(loadingPercent);                    //console.log(loadingPercent);                    if (count >= imgNum) {                        element.find("#loading").find(".percent").html(loadingPercent);                        $("#loading").stop(true).fadeOut(200);                        callback(images);                    }                };                images[path].src = sources[path];            }        },        fix :function (num, length) {            return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;        }    }}();var PageMgr;!function () {    PageMgr = function(element_,pageName_){        BaseMgr.call(this,element_,pageName_);        this.pageid = pageindex.length;        pageindex.push(this);        this.extend({            init : function (Callback_) {                Callback_();            },            work : function () {                var self = this;                self.addDom(function(){                    self.loading(function(){                        self.init(function(){                            self._onEnter("none");                        })                    })                });            },            loading : function (Callback_) {                var self = this;                var arr = [];                var reg = /url\((.*)\)/ig;                //$(self.element_).find("img").each(function(){                //    arr.push($(this).attr("src"));                //});                //$(self.element_).find("[class]").each(function(){                //    var img = reg.exec($(this).css("background"));                //    if(img != null){arr.push(img[1])}                //});                if(self.loadImg instanceof Array){arr = arr.concat(self.loadImg);}                if(arr.length == 0 || test[self.pageid] == 1){                    Callback_();                    return;                }                loadingMgr.loadImages(arr,function(){console.log("loading finish!");test[self.pageid] = 1;Callback_()});                //console.log(arr);            },            onEnter : function () {                console.log("版块进入无执行数据");            },            _onEnter : function (mode_) {                var self = this;                if(this.beforeEnter)this.beforeEnter();                self._pageAnimate("enter",mode_);            },            onLeave : function () {                console.log("版块离开无执行数据");            },            _onLeave : function (mode_) {                var self = this;                self._pageAnimate("leave",mode_);            },            gotoNext : function (leave_config,enter_config){                var self = this;                self.gotoPage(self.pageid+1,leave_config,enter_config)            },            gotoPrev : function (leave_config,enter_config) {                var self = this;                self.gotoPage(self.pageid-1,leave_config,enter_config)            },            gotoPage : function (pageid,leave_config,enter_config) {                var self = this;                var numargs = arguments.length; // 获取被传递参数的数值。                var expargs = this.gotoPage.length; // 获取期望参数的数值。                pageindex[pageid].addDom(function(){                    pageindex[pageid].loading(function(){                        pageindex[pageid].init(function(){                            self._onLeave(leave_config.mode);                            if(numargs==2){                                pageindex[pageid]._onEnter(leave_config.mode);                            }else{                                pageindex[pageid]._onEnter(enter_config.mode);                            }                        });                    });                });            },            _pageAnimate : function(status_,mode_) {                var self = this;                var value1,value2;                var h = document.documentElement.clientHeight;                var w = document.documentElement.clientWidth;                switch (mode_){                    case "up" :                    case "down" :                    case "left" :                    case "right" :                        if (status_ == "enter"){                            value2 = 0;                            if (mode_ == "up")value1 = h;                            if (mode_ == "down")value1 = -h;                            if (mode_ == "left")value1 = w;                            if (mode_ == "right")value1 = -w;                        }else{                            value1 = 0;                            if (mode_ == "up")value2 = -h;                            if (mode_ == "down")value2 = h;                            if (mode_ == "left")value2 = -w;                            if (mode_ == "right")value2 = w;                        }                        if (mode_ == "up" || mode_ == "down"){                            $(self.element_).css({"position":"absolute","left":0,"top":0,"transform":"translate3d(0,"+ value1 +"px,0)"});                            setTimeout(function(){                                $(self.element_).css({"transition":"all 500ms","transform":"translate3d(0,"+ value2 +"px,0)"});                            },100);                        }else{                            $(self.element_).css({"transform": "matrix(1, 0, 0, 1, " + value1 + ", 0)"});                            $(self.element_).css({"transition":"all 1000ms"});                            $(self.element_).css({"transform":"matrix(1, 0, 0, 1, " + value2 + ", 0)"});                        }                        setTimeout(function () {                            $(self.element_).css({"transition":""});                            if (status_ == "enter"){self.onEnter();}else{self.onLeave();}                        },1100);                        //$(self.element_).one("webkitTransitionEnd otransitionEnd transitionEnd",function(){                        //                        //});                        break;                    case "none" :                        if (status_ == "enter"){self.onEnter();}else{self.onLeave();}                        break;                    default :                        self._animateExtend[mode_](arguments);                        break;                }            },            _animateExtend : {}        })    };    PageMgr.prototype = new BaseMgr();}();
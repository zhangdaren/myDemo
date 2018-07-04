/**
 * Created by lipei on 2015/5/20.
 */


var test = [];
var indexcur = 0;
var loadingcur = 0;
var percent = 0;
var isAndroid = navigator.userAgent.toLowerCase().match(/android/i) == "android";

var Loading;
!function () {
    Loading = [
        [baseUrl+"img/loading_bottom.jpg",baseUrl+"img/music_off.png"],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [baseUrl+"img/logo.png"]
    ];

    Loading[0] = Loading[0].concat(ink_arr[0][0]).concat(ink_arr[0][1]);
    Loading[1] = Loading[1].concat(ink_arr[1][0]).concat(ink_arr[1][1]);
    Loading[2] = Loading[2].concat(ink_arr[2][0]).concat(ink_arr[2][1]);
    Loading[3] = Loading[3].concat(ink_arr[3][0]).concat(ink_arr[3][1]);
    Loading[4] = Loading[4].concat(ink_arr[4][0]).concat(ink_arr[4][1]);
    Loading[5] = Loading[5].concat(ink_arr[5][0]).concat(ink_arr[5][1]);
    Loading[6] = Loading[6].concat(ink_arr[6][0]).concat(ink_arr[6][1]);
    Loading[7] = Loading[7].concat(ink_arr[7][0]).concat(ink_arr[7][1]);
    Loading[8] = Loading[8].concat(ink_arr[8][0]).concat(ink_arr[8][1]);
    Loading[9] = Loading[9].concat(ink_arr[9][0]).concat(ink_arr[9][1]);
}();

var page_0_Mgr = new PageMgr(".loading","loading.html");
!function(){
    page_0_Mgr.extend({
        onLeave : function () {
            var self = this;

            this.mc.stop();
            this.mcA.stop();
        },
        onEnter : function () {
            var self = this;

            $("body").css("background","#493d92");

            this.mc = new mcMgr(".star",ink_arr[0][0],0);
            this.mc.init();
            this.mc.play({repeat:-1});

            TweenMax.to($(".arrow").find(".box"),0.5,{top:-10,repeat:-1,yoyo:true});

            self.loadingProcess();


        },
        loadingProcess : function () {
            var self = this;

            var loadingtotal = Loading[0].length+Loading[1].length+Loading[2].length+Loading[3].length+Loading[4].length;

            loadingMgr.loadImages(Loading[loadingcur],function(){
                console.log("loading page_"+ loadingcur +" ok!");
                test[loadingcur] = 1;
                if(loadingcur == 4){
                    TweenMax.to($(self.element_).find(".star"),0.5,{marginTop:-400,onComplete:function(){
                        self.mcA = new mcMgr(".loading .text",ink_arr[0][1],0);
                        self.mcA.init();
                        self.mcA.playAndStop({end:13,repeat:1,complete:function(){
                            self.mcA.gotoAndPlay({start:14,repeat:-1})
                        }});
                    }});
                    TweenMax.to($(self.element_).find(".percent"),0.5,{opacity:0});
                    TweenMax.to($(self.element_).find("footer").find(".box").fadeIn(500),0.5,{bottom:56,repeat:-1,yoyo:true});

                    $(self.element_).off().one({
                        swipeup : function () {
                            self.gotoPage(1,{mode:"up"});
                        },
                        swipeleftup : function () {
                            self.gotoPage(1,{mode:"up"});
                        },
                        swiperightup : function () {
                            self.gotoPage(1,{mode:"up"});
                        }
                    });

                    $(self.element_).on("touchstart",function(e){
                        e.preventDefault();
                    });


                }

                loadingcur++;

                if (loadingcur != Loading.length){self.loadingProcess();}
            },true,function(){
                if(percent<loadingtotal){
                    percent++;
                    $(".percent").html("LOADING... "+Math.round(percent/loadingtotal*100)+"%");
                    //console.log(percent,loadingtotal,Math.round(percent/loadingtotal*100));
                }
            })
        }
    },true);
}();

var page_1_Mgr = new PageMgr(".page_1","page_1.html");
!function(){
    page_1_Mgr.extend({
        onLeave : function () {
            var self = this;
            this.mcA.stop();
            this.mcB.stop();
            clearInterval(this.mc);
        },
        beforeEnter : function () {
            if(!isAndroid)AudioMgr.play("flip");
            var self = this;
            self.mcB = new mcMgr(".page_1 .main",ink_arr[1][1],0);
            self.mcB.init();
            self.mcB.rate = 8;

            self.mc = setInterval(function(){
                if(!isAndroid)AudioMgr.play("01");
                self.mcB.play({repeat:3,complete:function(){

                }});
            },3000)

        },
        onEnter : function () {
            var self = this;

            AudioMgr.stop("02");

            $("body").css("background","#493d92");

            self.mcA = new mcMgr(".page_1 .text",ink_arr[1][0],0);
            self.mcA.init();
            self.mcA.playAndStop({end:6,repeat:1,complete:function(){
                self.mcA.gotoAndPlay({start:7,repeat:-1})
            }});

            $(this.element_).off().one({
                swipeup : function () {
                    AudioMgr.stop("01");
                    self.gotoPage(2,{mode:"up"});
                },
                swipeleftup : function () {
                    AudioMgr.stop("01");
                    self.gotoPage(2,{mode:"up"});
                },
                swiperightup : function () {
                    AudioMgr.stop("01");
                    self.gotoPage(2,{mode:"up"});
                }
            });

            $(this.element_).on("touchstart",function(e){
                e.preventDefault();
            });
        }
    },true);
}();

var page_2_Mgr = new PageMgr(".page_2","page_2.html");
!function(){
    page_2_Mgr.extend({
        onLeave : function () {
            var self = this;
            this.mcA.stop();
            this.mcB.stop();
            clearInterval(this.mc);
        },
        beforeEnter : function () {
            if(!isAndroid)AudioMgr.play("flip");
            var self = this;
            self.mcB = new mcMgr(".page_2 .main",ink_arr[2][1],0);
            self.mcB.init();
            self.mcB.rate = 8;

            self.mc = setInterval(function(){
                if(!isAndroid)AudioMgr.play("02");
                self.mcB.play({repeat:2,complete:function(){

                }});
            },3000);
        },
        onEnter : function () {
            var self = this;

            AudioMgr.stop("01");
            AudioMgr.stop("03");

            $("body").css("background","#3e9785");

            self.mcA = new mcMgr(".page_2 .text",ink_arr[2][0],0);
            self.mcA.init();
            self.mcA.playAndStop({end:7,repeat:1,complete:function(){
                self.mcA.gotoAndPlay({start:8,repeat:-1})
            }});

            $(this.element_).off().one({
                swipeup : function () {
                    AudioMgr.stop("02");
                    self.gotoPage(3,{mode:"up"});
                },
                swipeleftup : function () {
                    AudioMgr.stop("02");
                    self.gotoPage(3,{mode:"up"});
                },
                swiperightup : function () {
                    AudioMgr.stop("02");
                    self.gotoPage(3,{mode:"up"});
                },
                swipedown : function () {
                    AudioMgr.stop("02");
                    self.gotoPage(1,{mode:"down"});
                },
                swipeleftdown : function () {
                    AudioMgr.stop("02");
                    self.gotoPage(1,{mode:"down"});
                },
                swiperightdown : function () {
                    AudioMgr.stop("02");
                    self.gotoPage(1,{mode:"down"});
                }
            });

            $(this.element_).on("touchstart",function(e){
                e.preventDefault();
            })
        }
    },true);
}();

var page_3_Mgr = new PageMgr(".page_3","page_3.html");
!function(){
    page_3_Mgr.extend({
        onLeave : function () {
            var self = this;
            this.mcA.stop();
            this.mcB.stop();
            clearInterval(this.mc);
        },
        beforeEnter : function () {
            if(!isAndroid)AudioMgr.play("flip");
            var self = this;
            self.mcB = new mcMgr(".page_3 .main",ink_arr[3][1],0);
            self.mcB.init();
            self.mcB.rate = 8;

            self.mc = setInterval(function(){
                if(!isAndroid)AudioMgr.play("03");
                self.mcB.play({repeat:2,complete:function(){

                }});
            },3000);
        },
        onEnter : function () {
            var self = this;

            AudioMgr.stop("02");
            AudioMgr.stop("04");

            $("body").css("background","#fec537");

            self.mcA = new mcMgr(".page_3 .text",ink_arr[3][0],0);
            self.mcA.init();
            self.mcA.playAndStop({end:5,repeat:1,complete:function(){
                self.mcA.gotoAndPlay({start:6,repeat:-1})
            }});

            $(this.element_).off().one({
                swipeup : function () {
                    AudioMgr.stop("03");
                    self.gotoPage(4,{mode:"up"});
                },
                swipeleftup : function () {
                    AudioMgr.stop("03");
                    self.gotoPage(4,{mode:"up"});
                },
                swiperightup : function () {
                    AudioMgr.stop("03");
                    self.gotoPage(4,{mode:"up"});
                },
                swipedown : function () {
                    AudioMgr.stop("03");
                    self.gotoPage(2,{mode:"down"});
                },
                swipeleftdown : function () {
                    AudioMgr.stop("03");
                    self.gotoPage(2,{mode:"down"});
                },
                swiperightdown : function () {
                    AudioMgr.stop("03");
                    self.gotoPage(2,{mode:"down"});
                }
            });

            $(this.element_).on("touchstart",function(e){
                e.preventDefault();
            })
        }
    },true);
}();

var page_4_Mgr = new PageMgr(".page_4","page_4.html");
!function(){
    page_4_Mgr.extend({
        onLeave : function () {
            var self = this;
            this.mcA.stop();
            this.mcB.stop();
            clearInterval(this.mc);
        },
        beforeEnter : function () {
            if(!isAndroid)AudioMgr.play("flip");
            var self = this;
            self.mcB = new mcMgr(".page_4 .main",ink_arr[4][1],0);
            self.mcB.init();
            self.mcB.rate = 8;

            self.mc = setInterval(function(){
                if(!isAndroid)AudioMgr.play("04");
                self.mcB.play({repeat:2,complete:function(){

                }});
            },3000);
        },
        onEnter : function () {
            var self = this;

            AudioMgr.stop("03");
            AudioMgr.stop("05");

            $("body").css("background","#c10c15");

            self.mcA = new mcMgr(".page_4 .text",ink_arr[4][0],0);
            self.mcA.init();
            self.mcA.playAndStop({end:5,repeat:1,complete:function(){
                self.mcA.gotoAndPlay({start:6,repeat:-1})
            }});

            $(this.element_).off().one({
                swipeup : function () {
                    AudioMgr.stop("04");
                    self.gotoPage(5,{mode:"up"});
                },
                swipeleftup : function () {
                    AudioMgr.stop("04");
                    self.gotoPage(5,{mode:"up"});
                },
                swiperightup : function () {
                    AudioMgr.stop("04");
                    self.gotoPage(5,{mode:"up"});
                },
                swipedown : function () {
                    AudioMgr.stop("04");
                    self.gotoPage(3,{mode:"down"});
                },
                swipeleftdown : function () {
                    AudioMgr.stop("04");
                    self.gotoPage(3,{mode:"down"});
                },
                swiperightdown : function () {
                    AudioMgr.stop("04");
                    self.gotoPage(3,{mode:"down"});
                }
            });

            $(this.element_).on("touchstart",function(e){
                e.preventDefault();
            })
        }
    },true);
}();

var page_5_Mgr = new PageMgr(".page_5","page_5.html");
!function(){
    page_5_Mgr.extend({
        onLeave : function () {
            var self = this;
            this.mcA.stop();
            this.mcB.stop();
            clearInterval(this.mc);
        },
        beforeEnter : function () {
            if(!isAndroid)AudioMgr.play("flip");
            var self = this;
            self.mcB = new mcMgr(".page_5 .main",ink_arr[5][1],0);
            self.mcB.init();
            self.mcB.rate = 8;

            self.mc = setInterval(function(){
                if(!isAndroid)AudioMgr.play("05");
                self.mcB.play({repeat:1,complete:function(){

                }});
            },4000);
        },
        onEnter : function () {
            var self = this;

            AudioMgr.stop("04");
            AudioMgr.stop("06");

            $("body").css("background","#54b6e6");

            self.mcA = new mcMgr(".page_5 .text",ink_arr[5][0],0);
            self.mcA.init();
            self.mcA.playAndStop({end:7,repeat:1,complete:function(){
                self.mcA.gotoAndPlay({start:8,repeat:-1})
            }});

            $(this.element_).off().one({
                swipeup : function () {
                    AudioMgr.stop("05");
                    self.gotoPage(6,{mode:"up"});
                },
                swipeleftup : function () {
                    AudioMgr.stop("05");
                    self.gotoPage(6,{mode:"up"});
                },
                swiperightup : function () {
                    AudioMgr.stop("05");
                    self.gotoPage(6,{mode:"up"});
                },
                swipedown : function () {
                    AudioMgr.stop("05");
                    self.gotoPage(4,{mode:"down"});
                },
                swipeleftdown : function () {
                    AudioMgr.stop("05");
                    self.gotoPage(4,{mode:"down"});
                },
                swiperightdown : function () {
                    AudioMgr.stop("05");
                    self.gotoPage(4,{mode:"down"});
                }
            });

            $(this.element_).on("touchstart",function(e){
                e.preventDefault();
            })
        }
    },true);
}();

var page_6_Mgr = new PageMgr(".page_6","page_6.html");
!function(){
    page_6_Mgr.extend({
        onLeave : function () {
            var self = this;
            this.mcA.stop();
            this.mcB.stop();
            clearInterval(this.mc);
        },
        beforeEnter : function () {
            if(!isAndroid)AudioMgr.play("flip");
            var self = this;
            self.mcB = new mcMgr(".page_6 .main",ink_arr[6][1],0);
            self.mcB.init();
            self.mcB.rate = 8;

            self.mc = setInterval(function(){
                if(!isAndroid)AudioMgr.play("06");
                self.mcB.play({repeat:2,complete:function(){

                }});
            },3000);
        },
        onEnter : function () {
            var self = this;

            AudioMgr.stop("05");
            AudioMgr.stop("07");

            $("body").css("background","#66a53b");

            self.mcA = new mcMgr(".page_6 .text",ink_arr[6][0],0);
            self.mcA.init();
            self.mcA.playAndStop({end:4,repeat:1,complete:function(){
                self.mcA.gotoAndPlay({start:5,repeat:-1})
            }});

            $(this.element_).off().one({
                swipeup : function () {
                    AudioMgr.stop("06");
                    self.gotoPage(7,{mode:"up"});
                },
                swipeleftup : function () {
                    AudioMgr.stop("06");
                    self.gotoPage(7,{mode:"up"});
                },
                swiperightup : function () {
                    AudioMgr.stop("06");
                    self.gotoPage(7,{mode:"up"});
                },
                swipedown : function () {
                    AudioMgr.stop("06");
                    self.gotoPage(5,{mode:"down"});
                },
                swipeleftdown : function () {
                    AudioMgr.stop("06");
                    self.gotoPage(5,{mode:"down"});
                },
                swiperightdown : function () {
                    AudioMgr.stop("06");
                    self.gotoPage(5,{mode:"down"});
                }
            });

            $(this.element_).on("touchstart",function(e){
                e.preventDefault();
            })
        }
    },true);
}();

var page_7_Mgr = new PageMgr(".page_7","page_7.html");
!function(){
    page_7_Mgr.extend({
        onLeave : function () {
            var self = this;
            this.mcA.stop();
            this.mcB.stop();
            clearInterval(this.mc);
        },
        beforeEnter : function () {
            if(!isAndroid)AudioMgr.play("flip");
            var self = this;
            self.mcB = new mcMgr(".page_7 .main",ink_arr[7][1],0);
            self.mcB.init();
            self.mcB.rate = 8;

            self.mc = setInterval(function(){
                if(!isAndroid)AudioMgr.play("07");
                self.mcB.play({repeat:2,complete:function(){

                }});
            },3000);
        },
        onEnter : function () {
            var self = this;

            AudioMgr.stop("06");
            AudioMgr.stop("08");

            $("body").css("background","#f79437");

            self.mcA = new mcMgr(".page_7 .text",ink_arr[7][0],0);
            self.mcA.init();
            self.mcA.playAndStop({end:6,repeat:1,complete:function(){
                self.mcA.gotoAndPlay({start:7,repeat:-1})
            }});

            $(this.element_).off().one({
                swipeup : function () {
                    AudioMgr.stop("07");
                    self.gotoPage(8,{mode:"up"});
                },
                swipeleftup : function () {
                    AudioMgr.stop("07");
                    self.gotoPage(8,{mode:"up"});
                },
                swiperightup : function () {
                    AudioMgr.stop("07");
                    self.gotoPage(8,{mode:"up"});
                },
                swipedown : function () {
                    AudioMgr.stop("07");
                    self.gotoPage(6,{mode:"down"});
                },
                swipeleftdown : function () {
                    AudioMgr.stop("07");
                    self.gotoPage(6,{mode:"down"});
                },
                swiperightdown : function () {
                    AudioMgr.stop("07");
                    self.gotoPage(6,{mode:"down"});
                }
            });

            $(this.element_).on("touchstart",function(e){
                e.preventDefault();
            })
        }
    },true);
}();

var page_8_Mgr = new PageMgr(".page_8","page_8.html");
!function(){
    page_8_Mgr.extend({
        onLeave : function () {
            var self = this;
            this.mcA.stop();
            this.mcB.stop();
            clearInterval(this.mc);
        },
        beforeEnter : function () {
            if(!isAndroid)AudioMgr.play("flip");
            var self = this;
            self.mcB = new mcMgr(".page_8 .main",ink_arr[8][1],0);
            self.mcB.init();
            self.mcB.rate = 8;

            self.mc = setInterval(function(){
                if(!isAndroid)AudioMgr.play("08");
                self.mcB.play({repeat:2,complete:function(){

                }});
            },3000);
        },
        onEnter : function () {
            var self = this;

            AudioMgr.stop("07");

            $("body").css("background","#0b4e9a");

            self.mcA = new mcMgr(".page_8 .text",ink_arr[8][0],0);
            self.mcA.init();
            self.mcA.playAndStop({end:6,repeat:1,complete:function(){
                self.mcA.gotoAndPlay({start:7,repeat:-1})
            }});

            $(this.element_).off().one({
                swipeup : function () {
                    AudioMgr.stop("08");
                    self.gotoPage(9,{mode:"up"});
                    $(".arrow").fadeOut(300);
                },
                swipeleftup : function () {
                    AudioMgr.stop("08");
                    self.gotoPage(9,{mode:"up"});
                    $(".arrow").fadeOut(300);
                },
                swiperightup : function () {
                    AudioMgr.stop("08");
                    self.gotoPage(9,{mode:"up"});
                    $(".arrow").fadeOut(300);
                },
                swipedown : function () {
                    AudioMgr.stop("08");
                    self.gotoPage(7,{mode:"down"});
                },
                swipeleftdown : function () {
                    AudioMgr.stop("08");
                    self.gotoPage(7,{mode:"down"});
                },
                swiperightdown : function () {
                    AudioMgr.stop("08");
                    self.gotoPage(7,{mode:"down"});
                }
            });

            $(this.element_).on("touchstart",function(e){
                e.preventDefault();
            })
        }
    },true);
}();

var page_9_Mgr = new PageMgr(".page_9","page_9.html");
!function(){
    page_9_Mgr.extend({
        onLeave : function () {
            var self = this;
            this.mcA.stop();
            this.mcB.stop();
            clearInterval(this.mc);
            $(".music").show();//离开时显示声音控件
        },
        beforeEnter : function () {
            if(!isAndroid)AudioMgr.play("flip");
            //var self = this;
            //self.mcB = new mcMgr(".page_9 .main",ink_arr[9][1],0);
            //self.mcB.init();
            //self.mcB.rate = 8;
            //
            //self.mc = setInterval(function(){
            //    self.mcB.play({repeat:2,complete:function(){
            //
            //    }});
            //},3000);
        },
        onEnter : function () {
            var self = this;

$(".music").hide();//进入时显示声音控件

            if(!isAndroid)AudioMgr.stop("08");

            $("body").css("background","#083870");

            self.mcA = new mcMgr(".page_9 .text",ink_arr[9][0],0);
            self.mcA.init();
            self.mcA.playAndStop({end:4,repeat:1,complete:function(){
                self.mcA.gotoAndPlay({start:5,repeat:-1})
            }});

            self.mcB = new mcMgr(".page_9 .main",ink_arr[9][1],0);
            self.mcB.init();
            self.mcB.rate = 8;

            $(this.element_).find(".main").fadeIn(600);
            $(this.element_).find(".logo").fadeIn(600);

            self.mc = setInterval(function(){
                self.mcB.play({repeat:2,complete:function(){

                }});
            },3000);

            $(this.element_).off().one({
                swipedown : function () {
                    self.gotoPage(8,{mode:"down"});
                    $(".arrow").fadeIn(300);
                },
                swipeleftdown : function () {
                    self.gotoPage(8,{mode:"down"});
                    $(".arrow").fadeIn(300);
                },
                swiperightdown : function () {
                    self.gotoPage(8,{mode:"down"});
                    $(".arrow").fadeIn(300);
                }
            });

            $(this.element_).find(".link").off().on("touchend",function(){
            	_hmt.push(['_trackEvent', 'nav', 'download', '']);
                window.location.href = "http://www.189.cn/js/";
            }).next().off().on("touchend",function(){
                $(".share").fadeIn(200);
            });

            $(this.element_).on("touchstart",function(e){
                e.preventDefault();
            })
        }
    },true);
}();



$(document).ready(function(){
    page_0_Mgr.work();

    $(".music").on("touchend",function(){
       if($(this).hasClass("off")){
           $(this).removeClass("off");
           AudioMgr.play("bg");
       }else{
           $(this).addClass("off");
           AudioMgr.pause("bg");
       }
    });

    $(".share").on("click",function(){
       $(this).fadeOut(200);
    });

    AudioMgr.load([
        {name: "bg", src: baseUrl+"music/bg.mp3", autoplay: true,loop:true},
        {name: "flip", src: baseUrl+"music/flip.mp3"},
        {name: "01", src: baseUrl+"music/1.mp3"},
        {name: "02", src: baseUrl+"music/2.mp3"},
        {name: "03", src: baseUrl+"music/3.mp3"},
        {name: "04", src: baseUrl+"music/4.mp3"},
        {name: "05", src: baseUrl+"music/5.mp3"},
        {name: "06", src: baseUrl+"music/6.mp3"},
        {name: "07", src: baseUrl+"music/7.mp3"},
        {name: "08", src: baseUrl+"music/8.mp3"}
    ], function() {
        //AudioMgr.play("0",function(){
        //    AudioMgr.play("1")
        //});
    });
});



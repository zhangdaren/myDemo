function createHuskys(){$("#huskyGroup").empty();for(var e="",t=0;t<pointData.length;t++){pointData[t];e+='<div class="huskyBox flipY">\t<div class="husky"></div>\t<div class="circle"><span>空</span></div></div>'}$("#huskyGroup").append(e),$("#huskyGroup .huskyBox").each(function(e,t){$(t).velocity({translateX:pointData[e].x,translateY:pointData[e].y},"linear",0)})}function setPrizeIndex(){curAnsIndex=parseInt(10*Math.random()),console.log("curAnsIndex "+curAnsIndex),$("#huskyGroup .huskyBox").eq(curAnsIndex).addClass("active")}function countdown(e){$("#timeTxt").show().text(count).addClass("zoomIn_big"),setTimeout(function(){$("#timeTxt").removeClass("zoomIn_big")},800),setTimeout(function(){return count<=0?void(null!=e&&(e(),count=3,$("#timeTxt").hide())):($("#timeTxt").removeClass("zoomIn_big"),void countdown(e))},1e3),count--}function showTips(e,t){$("#tips .tipsTxt").text(e),$("#tips").removeClass("bounceIn"),setTimeout(function(){$("#tips").addClass("bounceIn")},200)}function abs(e){var t=e>>31,a=e^t;return a-t}function arrRotate(e,t){return t%=e.length,e.slice(-t).concat(e.slice(0,-t))}function startHusky(e,t){var a,s,n,i=gameData[curLevel],t=i.isReverse,o=i.aniTime,p=Math.min(parseInt(Math.random()*pointData.length),4),l=0,u=pointData.length;$("#huskyGroup .huskyBox").each(function(e,i){a=parseInt($(i).css("left")),s=parseInt($(i).css("top")),l=0,n=[],u=pointData.length;var r=pointData.length+p+e;if(t){var c=[];for(l=0;l<30;l++){var h=10-l%10;10==h&&(h=0),c.push(h)}for(l=e;l>=0;l--)n.push(l);for(l=u-1;l>=e;l--)n.push(l);var g=n[n.length-1],d=(10-g)%10;for(l=0;l<p;l++)n.push(c[d+l+1])}else for(l=e;l<r;l++)n.push(l%u);for(l=0;l<n.length;l++){var v=n[l];pointData[v];$(i).velocity({translateX:pointData[v].x,translateY:pointData[v].y},"linear",o)}}),$(".huskyBox:last-child").velocity({complete:function(t){null!=e&&e()}})}function resetGame(){createHuskys(),setPrizeIndex(),showTips("红包要开始转动了，用你的火眼金睛看紧它哦！"),setTimeout(function(){countdown(function(){console.log("-----"),$(".huskyBox").removeClass("flipY"),setTimeout(function(){startHusky(function(){showTips("请找出隐藏在二哈后面的红包吧！"),$(document).on("tap","#huskyGroup .huskyBox",huskyBoxTapFun)},!0)},1e3)})},2200)}function huskyBoxTapFun(){return isBegin=!1,curLevel>=3?void console.log("游戏结束"):($(document).off("tap","#huskyGroup .huskyBox",huskyBoxTapFun),$(this).addClass("flipY"),void($(this).hasClass("active")?(curLevel++,curLevel==totalLevel?showTipsPage(6):showTipsPage(7,curLevel,10*curLevel)):(setTimeout(function(){$(".huskyBox.active").addClass("flipY")},200),setTimeout(function(){showTipsPage(5)},700))))}function init(){$("#ruleTxt").html(userData.initRule)}function showTipsPage(e,t,a){$("#tipsTitle").css("top",650).css("font-size",40).removeClass("whiteTxt yellowTxt"),$("#tipsTxt").css("top",712).css("font-size",32).removeClass("whiteTxt yellowTxt"),$("#tipsSureBtn").css("display","none"),$("#shareBtn").css("display","none"),$("#continueBtn").css("display","none"),$("#receiveBtn").css("display","none"),$(".btnGroup").data("id",e),1==e?($("#tipsTitle").addClass("whiteTxt").text("您还未获得任何奖励 加油啊"),$("#tipsTxt").text(""),$("#tipsSureBtn").css("display","inline-block")):2==e?($("#tipsTitle").text("真厉害"),$("#tipsTxt").html("您已经获得<span>"+t+"元话费</span>，不可以再玩啦！"),$("#tipsSureBtn").css("display","inline-block"),$("#shareBtn").css("display","inline-block")):3==e?($("#tipsTitle").css("top",594).text("很抱歉"),$("#tipsTxt").css("top",662).css("font-size",29).text("本活动仅限河源移动本地用户领取奖品，请正确填写一个河源移动手机号码！ "),$("#tipsSureBtn").css("display","inline-block")):4==e?($("#tipsTitle").text("领取成功"),$("#tipsTxt").text("您领取的话费将在下月月底前发放"),$("#tipsSureBtn").css("display","inline-block"),$("#shareBtn").css("display","inline-block")):5==e?($("#tipsTitle").css("font-size",32).addClass("whiteTxt").text("哇哦，差一点就找到了"),$("#tipsTxt").css("font-size",40).text("再试一次吧！"),$("#continueBtn").css("display","inline-block")):6==e?($("#tipsTitle").css("font-size",32).text("赞！通关成功"),$("#tipsTxt").css("font-size",40).html("获得最高奖励：<span>30元话费</span>"),$("#receiveBtn").css("display","inline-block")):7==e&&($("#tipsTitle").html("赞！成功闯过第"+t+"关"),$("#tipsTxt").html("获得<span>"+a+"元话费</span>"),$("#continueBtn").css("display","inline-block"),$("#receiveBtn").css("display","inline-block")),0!=app.$tipsPage.hasClass("pageMoveIn")&&1!=app.$tipsPage.hasClass("pageMoveOut")||app.$tipsPage.removeClass("pageMoveOut").addClass("pageMoveIn")}function showPop(e,t){0!=e.hasClass("pageMoveIn")&&1!=e.hasClass("pageMoveOut")||e.removeClass("pageMoveOut").addClass("pageMoveIn")}function hidePop(e){e.removeClass("pageMoveIn").addClass("pageMoveOut")}function hideTipsPage(){isSavingBoo=!1,0!=app.$tipsPage.hasClass("pageMoveOut")&&1!=app.$tipsPage.hasClass("pageMoveIn")||app.$tipsPage.removeClass("pageMoveIn").addClass("pageMoveOut")}function showShareCb(){hidePop(app.$shareTipPage),hideTipsPage(),showPop(app.$shareCbPage)}var prizeCon="",prizeIdArr=[],count=3,curAnsIndex=0,curLevel=0,totalLevel=3,gameData=[{aniTime:500,isReverse:!1},{aniTime:400,isReverse:!0},{aniTime:300,isReverse:!1}],pointData=[{x:168,y:0},{x:291,y:0},{x:416,y:0},{x:542,y:0},{x:540,y:106},{x:540,y:212},{x:416,y:212},{x:290,y:212},{x:168,y:212},{x:168,y:106}],timeoutId=0;init();var allFrames,isSavingBoo=!1;$(document).ready(function(){function e(){a+=1,o=Math.ceil(a/allFrames.length*100),app.$loaderTxt.text("loading..."+o+"%"),100==o&&(app.$loadingBox.remove(),t())}function t(){}allFrames=["sprite/style-promo.png","img/banner.png","img/bottomBg.png","img/man.png","img/btnBg.png","img/prize.png"];for(var a=0,s=0,n=allFrames.length;s<n;s++){var i=new Image;i.onload=e,i.src=basePath+allFrames[s]}var o;$("#continueBtn").on("tap",function(e){hideTipsPage(),setTimeout(function(){resetGame()},500)}),$("#telInput").focus(function(e){$(".inputBg").css("top",30)}),$("#telInput").blur(function(e){$(".inputBg").css("top",328)}),$("#receiveBtn").on("tap",function(e){hideTipsPage(),showPop(app.$inputPage)});var p=!1;app.$startBtn.on("tap",function(e){return userData.bind?void showTipsPage(2,10*userData.grade):(console.log("$startBtn isBegin "+p),void(p||(p=!0,$("#part1").animate({left:-800},500),$("#part2").animate({left:0},500),setTimeout(function(){resetGame()},500))))}),app.$saveBtn.on("tap",function(e){var t=/(^13\d{9}$)|(^14)[5,7]\d{8}$|(^15[0,1,2,3,5,6,7,8,9]\d{8}$)|(^17)[6,7,8]\d{8}$|(^18\d{9}$)/g;if(!t.test(app.$telInput.val()))return showTipsPage(3),app.$telInput.focus(),!1;var a={tel:app.$telInput.val(),level:curLevel};if(isSavingBoo)return!1;isSavingBoo=!0;var s=window.saveData(a);s&&(1==s.code?showTipsPage(4):3==s.code?showTipsPage(3):(isSavingBoo=!1,alert(s.msg))),isSavingBoo=!1}),app.$inputBtn.on("tap",function(e){hidePop(app.$prizePage),showPop(app.$inputPage)}),app.$closeRuleBtn.on("tap",function(e){hidePop(app.$rulePage)}),app.$tipsSureBtn.on("tap",function(e){4==$(this).parent().data("id")&&app.$inputPage.hasClass("pageMoveIn")&&1==userData.bind&&app.$inputPage.removeClass("pageMoveIn"),app.$shareCbPage.hasClass("pageMoveIn")&&app.$shareCbPage.removeClass("pageMoveIn"),hideTipsPage()}),app.$closeFailBtn.on("tap",function(e){hidePop(app.$failPage),setTimeout(function(e){app.$failTitle.removeClass("failTitle1").removeClass("failTitle2").removeClass("failTitle3"),app.$monkey.removeClass("fMonkey1").removeClass("sMonkey1"),app.$failTxt1.html(""),app.$failTxt2.html("")},600)}),app.$myPrBackBtn.on("tap",function(e){hidePop(app.$myPrizebPage)}),app.$shareTipPage.on("tap",function(e){hidePop(app.$shareTipPage)}),app.$ruleBtn.on("tap",function(e){showPop(app.$rulePage)}),app.$shareCbBtn.on("tap",function(e){hidePop(app.$shareCbPage)}),$("#startShareBtn").on("tap",function(e){userData.bind?showPop(app.$shareTipPage):showTipsPage(1)}),$("#shareBtn").on("tap",function(e){4==$(this).parent().data("id")&&app.$inputPage.hasClass("pageMoveIn")&&1==userData.bind&&app.$inputPage.removeClass("pageMoveIn"),userData.bind?showPop(app.$shareTipPage):showTipsPage(1)})});
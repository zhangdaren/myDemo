/**
 * Created by lipei on 2015/8/4.
 */

//var baseUrl = "http://img.wmy-ad.com/baidu/20150809/";
var baseUrl = "";
var ink_arr = [
    [[],[]],
    [[],[]],
    [[],[]],
    [[],[]],
    [[],[]],
    [[],[]],
    [[],[]],
    [[],[]],
    [[],[]],
    [[],[]]
];

!function(){

    var i;
    for (i = 0;i<6; i++){
        ink_arr[0][0].push(baseUrl+"img/loading/1/"+i+".png");
    }

    for (i = 0;i<16; i++){
        ink_arr[0][1].push(baseUrl+"img/loading/2/"+i+".png");
    }

    for (i = 0;i<9; i++){
        ink_arr[1][0].push(baseUrl+"img/page_1/1/"+i+".png");
    }

    for (i = 0;i<2; i++){
        ink_arr[1][1].push(baseUrl+"img/page_1/2/"+i+".png");
    }


    for (i = 0;i<10; i++){
        ink_arr[2][0].push(baseUrl+"img/page_2/1/"+i+".png");
    }

    for (i = 0;i<6; i++){
        ink_arr[2][1].push(baseUrl+"img/page_2/2/"+i+".png");
    }


    for (i = 0;i<8; i++){
        ink_arr[3][0].push(baseUrl+"img/page_3/1/"+i+".png");
    }

    for (i = 0;i<4; i++){
        ink_arr[3][1].push(baseUrl+"img/page_3/2/"+i+".png");
    }


    for (i = 0;i<8; i++){
        ink_arr[4][0].push(baseUrl+"img/page_4/1/"+i+".png");
    }

    for (i = 0;i<4; i++){
        ink_arr[4][1].push(baseUrl+"img/page_4/2/"+i+".png");
    }


    for (i = 0;i<10; i++){
        ink_arr[5][0].push(baseUrl+"img/page_5/1/"+i+".png");
    }

    for (i = 0;i<15; i++){
        ink_arr[5][1].push(baseUrl+"img/page_5/2/"+i+".png");
    }


    for (i = 0;i<7; i++){
        ink_arr[6][0].push(baseUrl+"img/page_6/1/"+i+".png");
    }

    for (i = 0;i<4; i++){
        ink_arr[6][1].push(baseUrl+"img/page_6/2/"+i+".png");
    }


    for (i = 0;i<9; i++){
        ink_arr[7][0].push(baseUrl+"img/page_7/1/"+i+".png");
    }

    for (i = 0;i<8; i++){
        ink_arr[7][1].push(baseUrl+"img/page_7/2/"+i+".png");
    }


    for (i = 0;i<9; i++){
        ink_arr[8][0].push(baseUrl+"img/page_8/1/"+i+".png");
    }

    for (i = 0;i<4; i++){
        ink_arr[8][1].push(baseUrl+"img/page_8/2/"+i+".png");
    }


    for (i = 0;i<7; i++){
        ink_arr[9][0].push(baseUrl+"img/page_9/1/"+i+".png");
    }

    for (i = 0;i<2; i++){
        ink_arr[9][1].push(baseUrl+"img/page_9/2/"+i+".png");
    }
}();

console.log(ink_arr);

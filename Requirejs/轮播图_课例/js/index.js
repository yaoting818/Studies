var oContainer = document.getElementById("container");
var oImg = document.getElementById("imgs");
var aImg = oImg.getElementsByTagName("img");
var oNav = document.getElementById("navigate");
var aDiv = oNav.getElementsByTagName("div");
var oDir = document.getElementById("direction");
var oLeft = document.getElementById("left");
var oRight = document.getElementById("right");
var nowIndex = 0;
var timer;
for(var i=0; i<aDiv.length; i++){
    aDiv[i].index = i;
    aDiv[i].onmouseover = function(){
        nowIndex = this.index;
        imgChange();
    };
}
oLeft.onclick = oRight.onclick = function () {
    if(this == oLeft){
        nowIndex--;
        if(nowIndex == -1){
            nowIndex = aDiv.length - 1;
        }
    }
    else{
        nowIndex++;
        if(nowIndex == aDiv.length){
            nowIndex = 0;    //注意此处是赋值
        }
    }
    imgChange();
};
play();
oContainer.onmouseover = function(){
    clearInterval(timer);
};
oContainer.onmouseout = function(){
    play();
};
function play(){
    timer = setInterval(function(){
        oRight.onclick();
    },1000);
}
function imgChange(){
    for(var j=0; j<aDiv.length; j++){
        aDiv[j].className = "";
        aImg[j].className = "";
    }
    aDiv[nowIndex].className = "selected";
    aImg[nowIndex].className = "selected";
}/**
 * Created by 18327 on 2017/8/22.
 */

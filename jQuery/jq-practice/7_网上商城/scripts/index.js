/**
 * Created by 18327 on 2017/8/14.
 */
$(function(){
  //ËÑË÷¿ò
    $("#inputSearch").on("focus",function(){
       if(this.value == this.defaultValue){
           this.value = "";
       }
    }).on("blur",function(){
        if(this.value == ""){
            this.value = this.defaultValue;
        }
    });
    // µ¼º½²Ëµ¥
    $("#nav li").hover(function(){
        $(this).children(".jnNav").show();
    },function(){
        $(this).children(".jnNav").hide();
    });
    //hot
    $("#jnCatalog .promoted").append("<span class='hot'></span>");
    //ÂÖ²¥Í¼
    $("#jnImageroll div a").on("mousemove",function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#JS_imgWrap img").eq($(this).index()).stop(false,true).fadeIn("fast").siblings().stop(false,true).fadeOut("fast");
    });
    //tooltip
    tooltip("#jnNoticeInfo .tooltip");
    //Æ·ÅÆ»î¶¯ÂÖ²¥Í¼
    $("#jnBrandTab li").on("click",function(){
        $(this).addClass("chos").siblings().removeClass("chos");
        $("#jnBrandList").animate({
            left: -$("#jnBrandList li").innerWidth() * 4 * $(this).index()
        },1000);
    });



















});
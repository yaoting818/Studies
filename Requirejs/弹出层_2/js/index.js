/**
 * Created by 18327 on 2017/8/22.
 */
requirejs.config({
    path: {
        jquery: 'jquery-1.12.4.js'
    }
});
require(['jquery-1.12.4','drag'],function($,Drag){
    $("#btn").on("click",function(){
        var setting = {

        };
        var drag = new Drag();
        drag.open();

    });

});



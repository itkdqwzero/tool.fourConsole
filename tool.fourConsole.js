'use strict';
/**
 * 移动端四角控台
 // use: 使用:
 console.logTL("TLTL");
 console.logTR("TRRR");
 console.logBL("BLBLB");
 console.logBR("BRBR");
 */
(function(){

    var tagTL = DC('div');
    var tagTR = DC('div');
    var tagBR = DC('div');
    var tagBL = DC('div');

    var commonStyle = {
        position:'fixed',
        background:'rgba(0,0,0,.2)'
    }
    for(var i in commonStyle){
        tagTL.style[i]=commonStyle[i];
        tagTR.style[i]=commonStyle[i];
        tagBR.style[i]=commonStyle[i];
        tagBL.style[i]=commonStyle[i];
    }

    tagTL.style["left"]=0;
    tagTL.style["top"]=0;
    tagTR.style["right"]=0;
    tagTR.style["top"]=0;


    tagBL.style["left"]=0;
    tagBL.style["bottom"]=0;
    tagBR.style["right"]=0;
    tagBR.style["bottom"]=0;

    document.body.appendChild(tagTL);
    document.body.appendChild(tagTR);
    document.body.appendChild(tagBR);
    document.body.appendChild(tagBL);
    // ##################################################

    console.logTL=function(content){
        tagTL.innerHTML=content;
    }
    console.logTR=function(content){
        tagTR.innerHTML=content;
    }
    console.logBL=function(content){
        tagBL.innerHTML=content;
    }
    console.logBR=function(content){
        tagBR.innerHTML=content;
    }


    // ##################################################

    function DC(name){
        return document.createElement(name);
    }

})(this);
"use strict";

function $(id){
    return document.getElementById(id);
}

function $create(str){
	if(str.charAt(0)=="<" && str.charAt(str.length-1)==">"){
		return document.createElement(str.substring(1,str.length-1));
	}else {
		return document.createTextNode(str);
	}
}

//已知dom元素，获取它的样式属性
function getStyleAtt(domObj,attributeName){
	var isIE = false;
	if(navigator.userAgent.indexOf("MSIE")>-1){
		isIE = true;
	}

	if(isIE){
		return domObj.currentStyle[attributeName];
	}else{
		var styles = window.getComputedStyle(domObj);
	    return styles[attributeName];
	}	
}
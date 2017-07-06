function  getId(id){
	return document.getElementById(id);
}
function calcDate(n){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+n);
	return oDate;
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];
	}
}
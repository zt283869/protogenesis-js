//请求地址：getSaleData.php 
//请求方式：get;
//同步还是异步：
//请求参数：起始年 yearStart；终止年：yearEnd；
//回调函数；
//返回的数据类型：dataType；  json：表示返回的是json对象或者json数组，str：表示字符串


function ajax1701(method,url,str,isAsy,func,dataType){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、准备工作（设置请求方式，请求地址，同步异步），回调函数
	let urlAndParam=url;
	if(method.toLowerCase()=="get"){
		urlAndParam = urlAndParam+"?"+str;
	}
	xhr.open(method,urlAndParam,isAsy);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(dataType=="json"){
				let data = eval("("+xhr.responseText+")");
				func(data);
			}else{
				func(xhr.responseText);
			}
		}
	}
	
	//3、发送
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(str);
	}else{
		xhr.send();		
	}
}

/*
function ajax1701(obj){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、准备工作（设置请求方式，请求地址，同步异步），回调函数
	let urlAndParam=url;
	if(method.toLowerCase()=="get"){
		urlAndParam = urlAndParam+"?"+str;
	}
	xhr.open(method,urlAndParam,isAsy);
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(dataType=="json"){
				let data = eval("("+xhr.responseText+")");
				func(data);
			}else{
				func(xhr.responseText);
			}
		}
	}
	
	//3、发送
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(str);
	}else{
		xhr.send();		
	}
}
*/
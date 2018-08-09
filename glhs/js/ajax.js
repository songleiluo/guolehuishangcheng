
//ajax请求的封装
//参数：
// 请求方式: 字符串类型
// url: 字符串类型
// 是否异步：boolean类型
// 请求参数：字符串类型
// 回调函数

//返回值：无

function ajax180301(url,method,params,isAsync,func){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	//2、设置请求参数
	let urlAndParams = url;
	if(method.toLowerCase()=="get"){
		if(params!=""){
			urlAndParams += "?"+params;
		}
	}
	xhr.open(method,urlAndParams,isAsync);		
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func(xhr.responseText);			
		}
	}
	//4、发送请求
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(params);
	}else{
		xhr.send();
	}
}

//封装ajax
//url:请求地址
//params:请求参数
//    键值对的字符串   
//isAsync:是否异步

// function ajaxByGet(url,params,isAsync,func){
	
	
// 	let xhr = new XMLHttpRequest();
// 	if(params!=""){
// 		xhr.open("get",url+"?"+params,isAsync);		
// 	}else{
// 		xhr.open("get",url,isAsync);
// 	}
// 	xhr.onreadystatechange = function(){
// 		if(xhr.readyState==4 && xhr.status==200){
// 			func(xhr.responseText);			
// 		}
// 	}		
// 	xhr.send();
// }

//封装ajax
//url:请求地址
//params:请求参数
//    键值对的字符串   
//isAsync:是否异步

function ajaxByPost(url,params,isAsync,func){
	
	
	let xhr = new XMLHttpRequest();
	xhr.open("post",url,isAsync);		
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func(xhr.responseText);			
		}
	}
	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xhr.send(params);
	
}


//url,method,params,isAsync,func
/*
ajax180302({
	url:"",
	params:"",
	method:"",
	isAsync:"",
	func:""
});
*/
function ajax180302(obj){
	let xhr = new XMLHttpRequest();
	
	let urlAndParams = obj.url;
	if(obj.method.toLowerCase()=="get"){
		if(obj.params!=""){
			urlAndParams += "?"+obj.params;
		}
	}
	
	xhr.open(obj.method,urlAndParams,obj.isAsync);		
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			obj.func(xhr.responseText);			
		}
	}
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.params);
	}else{
		xhr.send();
	}
}
/*
ajax180303({
	url:"a.php",
	params:"pageIndex=1",
	func:show
});
*/
function ajax180303(obj){
	//默认值
	let defaultObj = {
		url:"#",//a.php
		params:"",//"pageIndex=1"
		method:"get",
		isAsync:true,
		func:null//show
	};
	
	for(let key in obj){
		defaultObj[key] = obj[key];
	}
	
	let xhr = new XMLHttpRequest();
	
	let urlAndParams = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get"){
		if(defaultObj.params!=""){
			urlAndParams += "?"+defaultObj.params;
		}
	}
	
	xhr.open(defaultObj.method,urlAndParams,defaultObj.isAsync);		
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func&&defaultObj.func(xhr.responseText);	
		}
	}
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.params);
	}else{
		xhr.send();
	}
}

/*
ajax1803usePromise({
	url:"a.php",
	params:"pageIndex=1"
});
*/

function ajax1803usePromise(obj){
	//默认值
	let defaultObj = {
		url:"#",//a.php
		params:"",//"pageIndex=1"
		method:"get",
		isAsync:true
	};
	
	for(let key in obj){
		defaultObj[key] = obj[key];
	}
	
	let xhr = new XMLHttpRequest();
	
	let urlAndParams = defaultObj.url;
	if(defaultObj.method.toLowerCase()=="get"){
		if(defaultObj.params!=""){
			urlAndParams += "?"+defaultObj.params;
		}
	}
	
	xhr.open(defaultObj.method,urlAndParams,defaultObj.isAsync);		
	
	let p =  new Promise(function(resolve,reject){
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				resolve&&resolve(xhr.responseText);	
			}else{
				reject&&reject();
			}
		}
	});
	
	
	if(defaultObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.params);
	}else{
		xhr.send();
	}
	
	return p;
}
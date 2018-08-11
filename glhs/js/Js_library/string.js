//获得id

function $S(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
//3.封装函数：实现官方函数substring的功能
//功能：在已知的字符串中截取子串
//参数：
// 原始字符串:字符串类型
// 起始位置：数字类型
// 结束位置（不含）：数字类型
//返回值：截取后的结果字符串

function mySubstring(str,start,end){
	var newStr="";
	for(var i=start;i<end;i++){
		newStr+=str.charAt(i);
	}
	return newStr;
}
//4.封装函数：将URL按key-value分割，获取值，返回到一个json结构中
//功能：在已知的字符串中截取子串
//参数：
// 原始字符串:字符串类型
// 起始位置：数字类型
// 结束位置（不含）：数字类型
//返回值：截取后的结果字符串
function splitURL(str){
	let arr = str.split('?');
	let strs = arr[1];
	let obj = {};
	arr = strs.split(/[&=]/g);
	for(let i=0;i<=arr.length;i++){
		console.log(arr[i]);
		if(i % 2 == 0 ){
			obj[arr[i]] = arr[i+1];
		}
	}
	if((arr.length-1) % 2 == 0){
		obj[arr[arr.length-1]] = 'undefined';
	}
	return obj;
}
//5.封装函数：将URL按key-value形式返回到一个json结构中
//功能：在已知的字符串中截取子串
//参数：
// 原始字符串:字符串类型
// 分割符号：？ & =
//返回值：截取后的结果字符串组成的JSON对象

 function jiequjzd(url){
 	var result={};
 	str1=url.split("?")[1];
 	var arr=str1.split("&");
 	for(var i=0;i<arr.length;i++){
 		result [arr[i].split("=")[0]]=arr[i].split("=")[1];
 	}
 	
 	return result;
 }
 
 //编写函数获得随机的颜色字符串（#20cd4f）
function getColor(){
	//分别随机r g b的值
	var r = parseInt(Math.random()*256);
	var g = parseInt(Math.random()*256);
	var b = parseInt(Math.random()*256);
	return "#"+r.toString(16)+g.toString(16)+b.toString(16);
}
//功能：获取随机的颜色
//函数: huoColor
//参数：无
//返回值：str
function  huoColor(){
	let str="#";
	for(let i=0;i<6;i++){
		let temp=parseInt(Math.random()*16).toString(16);
		str+=temp;
	}
	return str;
}
//函数名：removekong
//函数功能：去掉字符串的空格
//参数：字符串
//返回值：新的字符串
function removekong(str){
	var str1="";
	for(var i=0;i<str.length-1;i++){
		if(str[i]!= " "){
			str1+=str[i];
		}
	}
	return str1
}
//函数名：qingkongqh
//函数功能：用正则去掉字符串的空格
//参数：字符串
//返回值：新的字符串

 function qingkongqh(str){
var str1=str.replace(/\s/g,"");
 console.log(str1);
}
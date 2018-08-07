//封装正则
//参数：
//    验证的类型(如：emial,phone,card)
//    要验证的字符串
//返回值： true  false;

function myRegExp(type,str){
	var regObj = null;
	switch(type){
		case "user" :regobj=/^\w[a-zA-Z]\w{4,14}$/;break;
		case "pass" :regobj=/^[a-zA-Z0-9_-]{6,16}$/;break;
		case "emial":regobj=/^\w+@\w+\.(com|cn|net)$/;break;
		case "phone":regobj=/^1[1-9][0-9]{9}$/;break;
		case "card" :regobj=/^[1-9][0-9]{16}(\d|x)$/i;break;
		case "date" :regobj=/^(19|20)\d{2}[\.\/\-](0[1-9]|1[0-2])[\.\/\-](0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;break;
		case "post" :regobj=/^[1-9]{2}[0-9]{4}$/;;break;
		case "ip"   :regobj=/^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;break;
	}
	if(regobj!=null){
		return regobj.test(str);
	}
}
/*
//强：字母+数字+特殊字符 
 ^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$
    
     
//中：字母+数字，字母+特殊字符，数字+特殊字符
     ^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$
 
//弱：纯数字，纯字母，纯特殊字符
^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$
 
 
//校验是否全由数字组成
 
function isDigit(s)
{
var patrn=/^[0-9]{1,20}$/;
if (!patrn.exec(s)) return false
return true
}
 
//校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
function isRegisterUserName(s) 
{ 
var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/; 
if (!patrn.exec(s)) return false
return true
}
 
function isRegisterUserName(s)
{
var patrn=/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
if (!patrn.exec(s)) return false
return true
}
 
 
//校验用户姓名：只能输入1-30个以字母开头的字串
Javascript代码
function isTrueName(s) { 
var patrn=/^[a-zA-Z]{1,30}$/; 
if (!patrn.exec(s)) return false
return true
} 

 
//校验密码：只能输入6-20个字母、数字、下划线 
function isPasswd(s) 
{ 
var patrn=/^(\w){6,20}$/; 
if (!patrn.exec(s)) return false
return true
} 
 
//校验普通电话、传真号码：可以“+”开头，除数字外，可含有“-” 
function isTel(s) 
{ 
//var patrn=/^[+]{0,1}(\d){1,3}[ ]?([-]?(\d){1,12})+$/; 
var patrn=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/; 
if (!patrn.exec(s)) return false
return true
} 
 
//校验手机号码：必须以数字开头，除数字外，可含有“-” 
function isMobil(s) 
{ 
var patrn=/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/; 
if (!patrn.exec(s)) return false
return true
} 
 
//校验邮政编码 
function isPostalCode(s) 
{ 
//var patrn=/^[a-zA-Z0-9]{3,12}$/; 
var patrn=/^[a-zA-Z0-9 ]{3,12}$/; 
if (!patrn.exec(s)) return false
return true
} 
 
//校验搜索关键字 
function isSearch(s) 
{ 
var patrn=/^[^`~!@#$%^&*()+=|\\\][\]\{\}:;'\,.<>/?]{1}[^`~!@$%^&()+=|\\\] 
 [\]\{\}:;'\,.<>?]{0,19}$/; 
if (!patrn.exec(s)) return false
return true
} 
 
function isIP(s) //by zergling 
{ 
var patrn=/^[0-9.]{1,20}$/; 
if (!patrn.exec(s)) return false
return true
} 
*/

//已知字符求编码(得到4位的16进制码)
window.onload = function(){
	var str="草你妈";
	for(var i=0;i<str.length;i++){
		console.log(str.charCodeAt(i).toString(16));	
	}
}
//敏感词过滤
//把敏感词：傻逼，sb,SB,妈,日替换为*
//把得到的16进制码前面加上u,再用转义字符表示
$("#sendId").onclick =function(){
	var regObj =/sb|日|逼|傻|擦|\u8349|\u4f60|\u5988/ig;
	var str=$("#inputId").value;
	var temp=str.replace(regObj,'*');
	$("#comment").innerHTML=temp;
}
//函数名：qingkongqh
//函数功能：用正则去掉字符串的空格
//参数：字符串
//返回值：新的字符串

 function qingkongqh(str){
var str1=str.replace(/\s/g,"");
 console.log(str1);
}

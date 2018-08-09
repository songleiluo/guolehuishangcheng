

//获取某个DOM对象的某个样式属性
//参数：DOM对象，属性名
//返回值：属性值

function getStyle(domObj,attr){
	//if(window.navigator.userAgent.indexOf("Trident")>-1){
	if(domObj.currStyle){//如果domObj有currentStyle属性。
		//domObj.currStyle.attr;//这是不行的，因为，这个找到attr属性，
		return domObj.currStyle[attr];//当对象的属性是变量时，用方括号。不能用点。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}
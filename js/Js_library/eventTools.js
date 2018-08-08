
//阻止事件的默认行为

//参数：event对象
//返回值：无

function preventDefault1803(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}

//功能：绑定事件的函数
//参数：
//  DOM对象:domObj
//  事件类型:type (不含on)
//  函数（事件对应的函数）
//  是否冒泡
//返回值：无

function addEvent1803(domObj,type,func,isBuHuo){
	if(domObj.addEventListener){//其它主流浏览器，DOM2级
		domObj.addEventListener(type,func,isBuHuo);		
	}else if(domObj.attachEvent){//是IE浏览器，IE级
		domObj.attachEvent("on"+type,func);
	}else{//DOM0级
		domObj["on"+type] = func;
	}
}


//功能：阻止事件冒泡
//参数：
//  事件对象
//返回值：无

function stopPropagation1803(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
}


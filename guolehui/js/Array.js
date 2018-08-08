//封装函数时的特点（注意点）
//1、不需要关注已知条件（参数）来自何处（如：不需要关注已知条件来自变量还是输入框）
//2、返回值不需要输出（即：不要用document.write,alert,console.log），要return。
//即：一般来说，函数内部不出现document.getElementById()等等，和document.write,alert,console.log。

//1、
//功能：数组去重
//参数：数组;
//返回值：去重后新的数组；
function clearRepeatnum(arr){
		for(var i=0;i<arr.length-1;i++){
			var curnum=arr[i];
			for(j=i+1;j<arr.length;j++){
				if(curnum==arr[j]){
					arr.splice(j,1);
					j--;
				}
			}
		}
		return arr;
}
//功能：数组去重
//参数：数组(可能有重复)
//返回值：无重复的数字（不要改变原数组）
function noRepeat(arr){
	var arrnew= [];
	
	for(var i=0;i<arr.length;i++){
		//1、看看旧数组的当前元素在新数组中是否存在；
		var count=0//记录相等的次数
		for(var j=0;j<arr.length;j++){
			if(arr[i]==arr[j]){
				count++;
				break;
			}
		}
		//如果不存在，则把当前数放入新数组中。
		if(count==0){
			arrnew.push(arr[i]);
		}
	}
	return arrnew;
}
//2、
//功能：随机点名
//参数：数组;
//返回值：名字；
function mingzi(){
	
	var arr2 = [6];
	arr2[0] = "George"
	arr2[1] = "John"
	arr2[2] = "Thomas"
	arr2[3] = "James"
	arr2[4] = "Adrew"
	arr2[5] = "Martin"
	
	var i=parseInt(Math.random()*6);
	
	document.write(arr2[i]);
}
//3、
//功能：获取n位数字和字母的验证码
//参数：验证码位数;
//返回值：验证码；
function getMa(n){
	
	var arr=["1","2","3","4","5","6","7","8","9","0","a","b","c","d","e","f","g","h","i","j","k","l","m","n", "o","p","q","r","s","t","u","v","A","B","C","D",];
	var str="";
	for(i=0;i<n;i++){
		//随机下标
		var index=parseInt(Math.random()*arr.length);
		//根据下标取出对应的元素
		str=str+arr[index];
	}
	//document.write(str);
	return str;
}
//4、
//功能：过滤重复和敏感词
//参数：留言语句
//返回值：过滤后的留言语句；

  //保存曾经说过的话（发言内容）
	var says=[];
function test(){
	//1、得到用户的输入
	var str=document.getElementById("sayId").value;
	//2、逻辑部分
	//1)、敏感词汇判断
	var arr=["sb","SB","傻狗","妈","傻逼"];
	var strnew=str;
	for(var i=0;i<arr.length;i++){
	//for(var i in arr){           //这两个写法是一样的
		if(str.indexOf(arr[i])>-1){
			//alert("亲，有敏感词");
			strnew=strnew.replace(arr[i],"*");
			document.getElementById("sayId").value=strnew;
			return;
		}
	}
	//document.getElementById("sayId").value=strnew;
	//2)、限制重复发言
	if(says.indexOf(str)>-1){
		alert("请不要重复输入");
		return;
	}
	says.push(str);
	//3、显示
	return str ;
}

//5、
//求一组数之和
//参数：数组
//返回值：和
function sumByArr(arr){
	var sum = 0;
	for(var i=0;i<arr.length;i++){
		sum = sum+arr[i];
	}
	return sum;
}
//6、
//求一组数平均值
//参数：数组
//返回值：平均值
function avgerageByArr(arr){
	var sum = sumByArr(arr);	
	return sum/arr.length;
}
//7、
//求一组数的最大数
//参数：数组
//返回值：最大数
function maxByArr(arr){
	var max = arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]>max){
			max = arr[i];
		}
	}
	return max;
}
//8、
//求一组数的最大数
//参数：数组
//返回值：最大数
function maxByArr(arr){
	var max = arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]>max){
			max = arr[i];
		}
	}
	return max;
}
//9、
//功能：计算数组中的最大数和最小数
//参数：数组;
//返回值：最大数，最小数；
function minandmax(arr){
	var min=arr[0];
	var max=arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]<min){
			min=arr[i];
		}else if(arr[i]>max){
			max=arr[i];
		}
	}
	var info={"min1":min,"max1":max};
		return info;	  
}
//10、
//功能：冒泡排序
//参数：数组（无序的）
//返回值：有序的数组
function bubble(arr){	
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

//功能：封装一个函数，过滤节点   getElements:获得所有元素
//参数：
       //1.包含各种类型节点的数组（集合）
       //2.节点类型
//返回值：只包含指定类型节点的数组
/*
function getElements(nodes,nodeType){
	var t = document.getElementById("t");//获取一个表格
	var tbody=t.firstChild;
	//只要元素节点
	var arr=[];
	for(var i=0;i<nodes.length;i++){
		if(nodes[i].nodeType==nodeType){
			arr.push(nodes.[i]);
		}
	}
	return arr;
}*/
//求一组数之和
//参数：数组
//返回值：和
function sumByArr(arr){
	var sum = 0;
	for(var i=0;i<arr.length;i++){
		sum = sum+arr[i];
	}
	return sum;
}



//求一组数平均值
//参数：数组
//返回值：平均值
function avgerageByArr(arr){
	var sum = sumByArr(arr);	
	return sum/arr.length;
}


//求一组数的最大数
//参数：数组
//返回值：最大数
function maxByArr(arr){
	var max = arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]>max){
			max = arr[i];
		}
	}
	return max;
}

//数组去重
//参数：数组(可能有重复)
//返回值：无重复的数字（不要改变原数组）
function noRepeat(arr){
	var arrnew= [];
	
	for(var i=0;i<arr.length;i++){
		//1、看看旧数组的当前元素在新数组中是否存在；
		var count=0//记录相等的次数
		for(var j=0;j<Arr.length;j++){
			if(arr[i]==Arr[j]){
				count++;
				break;
			}
		}
		//如果不存在，则把当前数放入新数组中。
		if(count==0){
			arrnew.push(arr[i]);
		}
	}
	return arrnew;
}


/*函数名：turnArray
函数功能：颠倒数组中元素的顺序。
参数：数组*/
function turnArry(arr){
	var arrNew = [];
	for(var i=arr.length-1;i>=0;i--){
		arrNew.push(arr[i]);
	}
	return arrNew;
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
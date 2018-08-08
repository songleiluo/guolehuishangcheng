//封装函数时的特点（注意点）
//1、不需要关注已知条件（参数）来自何处（如：不需要关注已知条件来自变量还是输入框）
//2、返回值不需要输出（即：不要用document.write,alert,console.log），要return。
//即：一般来说，函数内部不出现document.getElementById()等等，和document.write,alert,console.log。


//1、
//如：闰年判断；
//参数：年
//返回值：是否是闰年（true和false）
function isLeapYear(year){
/*
	if((year%4==0 && year%100!=0)||(year%400==0)){
		return true;
	}else{
		return false;
	}
	*/
	if((year%4==0 && year%100!=0)||(year%400==0)){
		return true;
	}
	return false;
}
//2、
//如：素数判断
//参数：数
//返回值：是否是素数，true：是素数；false：不是素数
function isSuShu(num){	
	for(var i=2;i<=num-1;i++){
		if(num%i==0){
			return false;
		}
	}
	return true;	
}
//3、
//功能：求一个数的阶乘
//参数：数
//返回值：阶乘的结果
function jie(num){
	var jieNum = 1;
	//1、求阶乘
	for(var i=1;i<=num;i++){
		jieNum=jieNum*i;		
	}
	//2、返回
	return jieNum;
}
//4、
//功能：求一个数的阶乘之和
//参数：数
//返回值：阶乘之和的结果
function jieSum(num){//5
	var sum = 0;
	for(var i=1;i<=num;i++){
		sum = sum+jie(i);
	}
	return sum;
}
//5、
//功能：生成一个4位的数字验证码
//参数：无
//返回值：4位验证码
function checkMa(){
	//逻辑
	var str="";
	for(var i=0;i<4;i++){
		//1、产生一个一位随机数
		var num = parseInt(Math.random()*10);
		//2、拼接
		str=str+num;	
	}
	//输出
	return str;
}
//6、
//功能：生成一个n位的数字验证码
//参数：位数
//返回值：n位验证码
function checkMaN(n){
	//逻辑
	var str="";
	for(var i=0;i<n;i++){
		//1、产生一个一位随机数
		var num = parseInt(Math.random()*10);
		//2、拼接
		str=str+num;	
	}
	//输出
	return str;
}
//7、
//功能：计算m到n之间的数组成的奇数个数
//参数：
//		起始数：m;
//		终止数：n;
//返回值：个数；
function jishu(m,n){
var count=0; 
	for(var i=m;i<=n;i=i+1){
		for(var j=m; j<=n;j=j+1){
			if(i==j){
				continue;
			}
			var num=i*10+j;
			if(num%2!=0){
				console.log(num);
				count++;
			}			
		}
	}
	return count;


//封装函数的优点：
//1、复用性好
//2、代码简洁
//3、模块化

//函数的概念：完成一个特定的功能（如：闰年判断，素数的判断等等）
//参数：已知条件
//返回值：结果

//闰年判断：
//已知：年
//返回值：是否是闰年（true和false）

//素数判断:
//已知数字
//返回：是不是素数（true和false）


//封装函数时的特点（注意点）
//1、不需要关注已知条件（参数）来自何处（如：不需要关注已知条件来自变量还是输入框）
//2、返回值不需要输出（即：不要用document.write,alert,console.log），要return。
//即：一般来说，函数内部不出现document.getElementById()等等，和document.write,alert,console.log。

//如：闰年判断；
//参数：年
//返回值：是否是闰年（true和false）
function isLeapYear(year){
/*
	if((year%4==0 && year%100!=0)||(year%400==0)){
		return true;
	}else{
		return false;
	}
	*/
	
	if((year%4==0 && year%100!=0)||(year%400==0)){
		return true;
	}
	
	return false;
	
}

//如：素数判断
//参数：数
//返回值：是否是素数，true：是素数；false：不是素数
function isSuShu(num){	
	for(var i=2;i<=num-1;i++){
		if(num%i==0){
			return false;
		}
	}
	return true;	
}

//功能：求一个数的阶乘
//参数：数
//返回值：阶乘的结果
function jie(num){
	var jieNum = 1;
	//1、求阶乘
	for(var i=1;i<=num;i++){
		jieNum=jieNum*i;		
	}
	//2、返回
	return jieNum;
}

//功能：求一个数的阶乘之和
//参数：数
//返回值：阶乘之和的结果
function jieSum(num){//5
	var sum = 0;
	for(var i=1;i<=num;i++){
		sum = sum+jie(i);
	}
	return sum;
}


//功能：根据日期计算该日期是当年的第几天
//参数：
//     year:年
//     month:月
//     date:日
//返回值：第几天

function getDaysByDate(year,month,date){
	//1、二月份的天数
	var erDays = 28;//假定是平年
	if(isLeapYear(year)==true){
		erDays = 29;
	}
	
	/*
	//2、计算总天数
	switch(month){
		case 1:return date;
		case 2:return 31+date;
		case 3:return 31+erDays+date;
		case 4:return 31+erDays+31+date;
	}
	*/
	/*
	//2、计算总天数
	var days = 0;
	switch(month){
		case 1:days += date; break;
		case 2:days +=31+date;break;
		case 3:days +=31+erDays+date;break;
		case 4:days +=31+erDays+31+date;break;
	}
	//3、输出
	return days;
	*/
}


function getDaysByDate(year,month,date){
	//1、二月份的天数
	var erDays = 28;//假定是平年
	if(isLeapYear(year)==true){
		erDays = 29;
	}	
	
	//2、计算总天数
	var days = 0;
	switch(month){
		case 12:;
		case 11:;
		case 10:;
		case 4:days+=31;
		case 3:days+=erDays;
		case 2:days+=31;
		case 1:days=date;
	}
	return days;
}





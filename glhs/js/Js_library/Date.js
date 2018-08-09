//功能：输出自己的日期时间格式
//参数：时间，分隔符
//返回值：个性化的时间格式
function Datetostring(d,fenge){
	var year =d.getFullYear();
	var month =d.getMonth()+1;
	var date =d.getDate();

	var str=" "+d.getHours()+":";
	str += d.getMinutes()+":";
	str += d.getSeconds();
	str+="  "+getWeek(d.getDay());
	if(fenge==undefined){
		return year+"年"+month+"月"+date+"日"+str;
	}
	return year+fenge+month+fenge+date+str;
}
function getWeek(num){
	switch(num){
		case 0:str="星期天";break;
		case 1:str="星期一";break;
		case 2:str="星期二";break;
		case 3:str="星期三";break;
		case 4:str="星期四";break;
		case 5:str="星期五";break;
		case 6:str="星期六";break;
		default:str="您的输入有误";break;
	}
	return str;
}
//功能：两个日期差几天
//参数：时间1，时间2
//返回值：时间戳之间的差值
function cha(){
	var day1=new Date(),day2=new Date(2018,6,30);
	var days=day1.getTime()-day2.getTime();
	days=parseInt(days/(1000*60*60*24));
	return days;
}

//输出自己的日期格式(如：yyyy-MM-dd; yyyy/MM/dd yyyy MM dd  yyyy年MM月dd日)
//参数:
// 日期，分隔符
//返回值：字符串类型

function dateToString(d,fenge){
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var date = d.getDate();
	if(fenge==undefined){
		return year+"年"+month+"月"+date+"日";
	}
	return year+fenge+month+fenge+date;	
}


function dateTimeToString(d,fenge){
	var year = d.getFullYear();
	var month = d.getMonth()+1;
	var date = d.getDate();
	
	var str = " "+d.getHours()+":";
	str += d.getMinutes()+":";
	str += d.getSeconds();
	
	if(fenge==undefined){
		return year+"年"+month+"月"+date+"日"+str;
	}
	return year+fenge+month+fenge+date+str;	
}

//求两个日期的差，就是计算两个日期之间差多少天。

//参数：日期1，日期2
//返回值：相差的天数

function differentDate(d1,d2){	
	var time = Math.abs(d1.getTime()-d2.getTime());
	return  Math.ceil(time/(24*3600*1000));
}

//计算两个日期的月份差 ;
//参数：日期1，日期2
//返回值：相差的月数，如果返回的是负数，表示日期2小于日期1；如果返回正数：表示日期2大于日期1

//2018-2-5   2018-6-8   4个月

//2017-2-5   2018-6-8   12+4
//2017-10-5  2018-2-8   12+(-8)

//2018-5-5   2017-2-8   Math.abs(-12-3)
//2018-2-5   2017-5-8   Math.abs(-12+3)

function differentMonth(d1,d2){	
	var year1 = d1.getFullYear();
	var month1 = d1.getMonth();
	var year2 = d2.getFullYear();
	var month2 = d2.getMonth();
	
	return (year2-year1)*12+(month2-month1);
}


//JS操作cookies方法! 

//写cookies 

// function setCookie(name,value) 
// { 
//     var Days = 30; 
//     var exp = new Date(); 
//     exp.setTime(exp.getTime() + Days*24*60*60*1000); 
//     document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
// } 

//读取cookies 
function getCookie(c_name)
{
	if (document.cookie.length>0)
	{ 
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1)
		{ 
			c_start=c_start + c_name.length+1 
			c_end=document.cookie.indexOf(";",c_start)
			if (c_end==-1) c_end=document.cookie.length
			return unescape(document.cookie.substring(c_start,c_end))
		} 
	}
	return null
}
// function getCookie(name) 
// { 
// 	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
// 	if(arr=document.cookie.match(reg))
// 		return unescape(arr[2]); 
// 	else 
// 		return null; 
// } 

//删除cookies 
function delCookie(name,path='/')
{ 
	var exp = new Date(); 
	exp.setTime(exp.getTime() - 100); 
	var cval=getCookie(name); 
	if(cval!=null) 
		document.cookie = name + "=;expires="+exp.toGMTString()+";path="+path; 
} 
//使用示例 
// setCookie("name","hayden"); 
// alert(getCookie("name")); 

//如果需要设定自定义过期时间 
//那么把上面的setCookie　函数换成下面两个函数就ok; 


//程序代码 
function setCookie(name,value,time)
{ 
	var strsec = getsec(time); 
	var exp = new Date(); 
	exp.setTime(exp.getTime() + strsec*1); 
	document.cookie = name + "=" + escape (value) + ";expires=" + exp.toGMTString(); 
} 
function getsec(str)
{ 
	// alert(str); 
	var str1=str.substring(1,str.length)*1; 
	var str2=str.substring(0,1); 
	if (str2=="s")
	{ 
		return str1*1000; 
	}
	else if (str2=="h")
	{ 
		return str1*60*60*1000; 
	}
	else if (str2=="d")
	{ 
		return str1*24*60*60*1000; 
	} 
} 
//这是有设定过期时间的使用示例： 
// setCookie("name","hayden","s20"); 
//s20是代表20秒 
//h是指小时，如12小时则是：h12 
//d是天数，30天则：d30 


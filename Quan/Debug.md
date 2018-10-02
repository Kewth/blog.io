---
layout: page
title: Debug
description: This a test only 
header-img: img/HY_zly.jpg
hide: true
---

test only.

<button type="button" onclick="alert('Welcome!')">点击这里</button>

<script>
function changeImage()
{
	var element = document.getElementById('t_cg_pic');
		if(element.src.match("/img/HY_zly.jpg"))
		{
			element.src="/img/HY_mr.jpg";
		}
		else
		{
			element.src="/img/HY_zly.jpg";
		}
}
</script>

<script>
function see_Quan_name()
{
	alert("A");
	var x_Quan_name = document.getElementById("Quan_name");
	alert("B");
	x_Quan_name.innerHTML = "当前权限:"+getCookie('Quan_name');
	alert("C");
}
</script>

<img src="/img/HY_zly.jpg" onclick="changeImage()" id="t_cg_pic" alt="img test" /> 
这个图片可以点哦  

<button type="button" onclick="setCookie('test_c','666','s10')" >Set Cookie</button>
<button type="button" onclick="alert(getCookie('test_c'))">Get Cookie</button>
<button type="button" onclick="delCookie('test_c')">Del Cookie</button>

<p id="Quan_name"></p>
<button onclick="see_Quan_name()" type="button" class="btn btn-block btn-info">查看权限</button>
<button onclick="delCookie('Quan_name')" type="button" class="btn btn-block btn-info">删除权限</button>
<button onclick="delCookie('Long_Time_No_See')" type="button" class="btn btn-block btn-info">删除初始</button>
<button onclick="alert(document.cookie)" type="button" class="btn btn-block btn-info">Cookies</button>

<a href="/Files/Y" download="Y">下载</a>

<p id="Key_code">当前按键</p>
<script>
function For_KeyCode(event)
{
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==38)
	{
		alert('Up');
	}
	if(e && e.shiftKey && e.keyCode==71)
	{
		alert('G');
		// document.write('<p>You click the G</p>');
	}
	if(e && e.ctrlKey && e.keyCode==71)
	{
		alert('ctrl-g');
	}
	if(e && e.metaKey && e.keyCode==71)
	{
		alert('met-g');
	}
	if(e && e.altKey && e.keyCode==71)
	{
		alert('alt-g');
	}

	if(e)
	{
		document.getElementById("Key_code").innerHTML="当前按键keycode:"+e.keyCode;
	}
}
</script>

<div class="wrap">
<p class="content" id="content">一言测试</p>
<p class="content2" id="content2">一言测试</p>
<!-- 这里是 JS 输出的“一言”句子 -->
</div>
<script src="https://cdn.bootcss.com/jquery/2.0.2/jquery.min.js"></script>
<script>
$.post("https://sslapi.hitokoto.cn/", function(hitokoto) {
		$(".content").html(hitokoto.hitokoto);
		});
$.getJSON("https://sslapi.hitokoto.cn/", function(hitokoto) {
		$(".content2").html(hitokoto.hitokoto);
		});
</script>

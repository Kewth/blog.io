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

<img src="/img/HY_zly.jpg" onclick="changeImage()" id="t_cg_pic" alt="img test" /> 
这个图片可以点哦  

<button type="button" onclick="setCookie('test_c','666','s10')" >Set Cookie</button>
<button type="button" onclick="alert(getCookie('test_c'))">Get Cookie</button>
<button type="button" onclick="delCookie('test_c')">Del Cookie</button>

<p id="Quan_name"></p>
<button onclick="delCookie('Quan_name')" type="button" class="btn btn-block btn-info">删除权限</button>
<button onclick="delCookie('Long_Time_No_See')" type="button" class="btn btn-block btn-info">删除初始</button>
<button onclick="alert(document.cookie)" type="button" class="btn btn-block btn-info">Cookies</button>

<a href="/Files/Y" download="Y">下载</a>

<p id="Key_code">当前按键</p>
<script>
function For_KeyCode(event)
{
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e)
	{
		document.getElementById("Key_code").innerHTML="当前按键keycode:"+e.keyCode;
	}
}
</script>

<!-- <link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css"> !-->
<script src="https://cdn.bootcss.com/jquery/2.1.1/jquery.min.js"></script>

<div class="container" style="padding: 100px 50px 10px;" >
<button type="button" class="btn btn-default" title="Popover title"
data-container="body" data-toggle="popover" data-placement="left"
data-content="左侧的 Popover 中的一些内容">
左侧的 Popover
</button>
<button type="button" class="btn btn-primary" title="Popover title"
data-container="body" data-toggle="popover" data-placement="top"
data-content="顶部的 Popover 中的一些内容">
顶部的 Popover
</button>
<button type="button" class="btn btn-success" title="Popover title"
data-container="body" data-toggle="popover" data-placement="bottom"
data-content="底部的 Popover 中的一些内容">
底部的 Popover
</button>
<button type="button" class="btn btn-warning" title="Popover title"
data-container="body" data-toggle="popover" data-placement="right"
data-content="右侧的 Popover 中的一些内容">
右侧的 Popover
</button>
</div>

<script>
$(function (){
		$("[data-toggle='popover']").popover();
		});
</script>

<a onclick="debug_test()">点击这里进行当前的js测试</a>

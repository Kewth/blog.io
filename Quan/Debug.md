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
<button type="button" onclick="alert(delCookie('test_c'))">Del Cookie</button>

<p id="Quan_name"></p>
<button onclick="see_Quan_name()" type="button" class="btn btn-block btn-info">查看权限</button>

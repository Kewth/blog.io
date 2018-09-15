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

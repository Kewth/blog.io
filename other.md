---
layout: page
chtitle: 其他
title: link
description: some links of others
header-img: img/green.jpg
---

**友链**  
[一个简单的oier](http://tchoi.club/)  

**YZZL**  
[2.0](/blog/2018/08/26/YZZL_new2.0/)  


<p><a href="#" onclick="creadiv(100,100,'Hello你好')">点一下我</a></p>
<p><a href="#" onclick="creadiv(400,500,'哈哈哈')">再点一下</a></p>

<script language="javascript">
function creadiv(l,r,t){ //l是距左的距离,r是距右的距离,t是要显示的文本内容
var dd=document.createElement("div");
dd.style.position="absolute";
dd.style.left=l+"px";
dd.style.right=r+"px"
dd.innerText=t;
document.body.appendChild(dd);
}
</script>

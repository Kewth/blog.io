---
layout: page
chtitle: 文章
title: Archive
description: 文章归档
header-img: img/orange.jpg
---

一堆乱七八糟的东西。

找不到想要的文章？

建议试试 [**TAGS**](/tags/) 。

<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    <li class="listing-seperator"><strong>{{ y }}年</strong></li>
  {% endif %}
  {% capture m %}{{post.date | date:"%m"}}{% endcapture %}
  {% if month != m %}
    {% assign month = m %}
    <li class="listing-seperator"><strong>{{ m }}月</strong></li>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

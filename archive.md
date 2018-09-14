---
layout: page
title: "Archive"
description: "文章归档"
header-img: "img/orange.jpg"
---

一堆乱七八糟的东西

找不到想要的文章?  
试试[TAGS](https://kewth.github.io/tags/)  

<ul class="listing">
{% for post in site.posts %}
  {% capture y %}{{post.date | date:"%Y"}}{% endcapture %}
  {% if year != y %}
    {% assign year = y %}
    <li class="listing-seperator"><strong>{{ y }}</strong></li>
  {% endif %}
  {% capture m %}{{post.date | date:"%m"}}{% endcapture %}
  {% if month != m %}
    {% assign month = m %}
    <li class="listing-seperator"><strong>{{ m }}</strong></li>
  {% endif %}
  <li class="listing-item">
    <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>

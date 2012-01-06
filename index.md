---
layout: page
title: Hola
header: Esto es mi pagina
---

    
<p class="subtitle">Hi! I'm a web developer based on Mexico City, glad you stopped by!</p>

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

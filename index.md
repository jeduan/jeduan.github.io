---
layout: page
title: Hola - Jeduan Cornejo
header: Esto es mi pagina
---
<h2>Posts</h2>
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>


<h2>Projects</h2>
<section class="projects">
  {% for page in site.pages %}
    {% if page.group == 'project' %}
<li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</section>

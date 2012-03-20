---
layout: page
title: Hola - Jeduan Cornejo
header: Esto es mi pagina
---

    
<p class="subtitle">Hi! I'm a web developer from Mexico City, glad you stopped by</p>

<h2>Portfolio</h2>
<section class="projects">
  {% for page in site.pages %}
    {% if page.group == 'project' %}
      <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</section>

I'm an active member of Mexico City's growing startup ecosystem. I've worked with [Nuflick][nuflick] on the past and also worked on several hackathons.

Right now there's not much to show on this site, but meanwhile you can check out the code I've released on [my github][gh]. I'm interested on web development on Ruby and Javascript, and right now I'm toying with CoffeeScript and iOS Development.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

  [nuflick]: http://www.nuflick.com
  [ntalk]: http://ntalkapp.com
  [gh]: http://github.com/jeduan
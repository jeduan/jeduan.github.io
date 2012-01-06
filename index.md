---
layout: page
title: Hola
header: Esto es mi pagina
---

    
<p class="subtitle">Hi! I'm a web developer based on Mexico City, glad you stopped by</p>

I work at [Out of the box][oob], an interactive agency in Mexico City, as Lead Developer.

Also I've worked on many interesting projects on my side time. The latest was [N-talk][ntalk] a multiplatform panic button which intended to generate a positive impact on Mexico's insecurity problem, although sadly, it is no longer under active development.

Right now there's not much to show on this site, but meanwhile you can check out the code I've released on [my github][gh]. I'm interested on web development on Ruby and Javascript, and right now I'm toying with CoffeeScript and iOS Development.

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

  [oob]: http://outofthebox.mx
  [ntalk]: http://ntalkapp.com
  [gh]: http://github.com/jeduan
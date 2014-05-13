---
layout: page
title: Philadelphia Mexico
header: Philadelphia Mexico
group: project
---

## Philadelphia

I worked for a year improving Kraft Foods' [Philadelphia Cream Cheese online presence](http://www.philadelphia.com.mx).

For the new website the whole spec was to do something innovative, while keeping eye on usability for Philadelphia's demographics (25-45 year old women).

We came up with a scrolling navigation single page site. I looked up on the plugins to achieve this and neither was realy what I was looking for so I just [built a plugin for it][jqglide] (which I released with the company's consentment).

[![Philadelphia site][philly_home]](http://www.philadelphia.com.mx)

The site gets a decent amount of traffic (150-200k monthly pageviews) so we had to implement some interesting stuff to make it fast, such as

 * All the [assets are precompiled and copied to S3](https://github.com/rumblelabs/asset_sync), they are also served gzipped where possible.
 * It runs on unicorn so it gets the most of each dyno.
 * The images are lazily loaded so we can get long, descriptive pages without making the initial site load too slow.
 * It gets a 90+ score on Pagespeed.

We also designed the [recipe finder][recipes] to be fast while having a great browsing experience

[![Philadelphia Recipes](/assets/philadelphia/recipes.jpg)](http://www.philadelphia.com.mx/recetas)

  [jqglide]: https://github.com/jeduan/jquery-glideto
  [philly_home]: /assets/philadelphia/newsite.jpg
  [recipes]: http://philadelphia.com.mx/recetas

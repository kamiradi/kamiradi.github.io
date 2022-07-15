---
layout: default
---
I am a Robotics researcher. I program robots to learn dexterous human physical behaviour. Turns out this is difficult! This part of the digital world is where I will catalogue my findings. Expect a graveyard of failed experiments and ideas, or at the least - scar tissue.

<!--<h2>{{ site.data.navigation.toc }}</h2>-->
<!--<ul>
    {% for item in site.data.navigation[page.sidebar] %}
       <li><a href="{{ item.url }}">{{ item.title }}</a></li>
    {% endfor %}
</ul>-->
<ul>
  {% for item in site.data.navigation.toc %}
    <h3>{{ item.title }}</h3>
      <ul>
        {% for entry in item.Chapters %}
          <li><a href="{{ entry.url }}">{{ entry.page }}</a></li>
        {% endfor %}
      </ul>
  {% endfor %}
</ul>

More tutorials coming soon ..	

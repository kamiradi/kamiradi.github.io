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

<h3>Linear Algebra for Robotics</h3>
<ul>
    {% for doc in site.la %}
    	<li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
    {% endfor %}
</ul>
<h3>Real Robotics</h3>
<ul>
    {% for post in site.posts %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>

More tutorials coming soon ..	

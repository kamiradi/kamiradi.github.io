---
permalink: /markdown/
title: "Markdown"
author_profile: true
redirect_from: 
  - /md/
  - /markdown.html
---

{% include toc %}

## Research Statement

I am a PhD researcher in robot learning and probabilistic inference, interested in how robots can perceive, reason, and act in the presence of uncertainty. Many manipulation tasks require understanding aspects of the world that are only partially observable, particularly when interactions involve contact, occlusion, or ambiguous sensory information. Rather than relying solely on point estimates, my research develops probabilistic representations that allow robots to maintain and update beliefs about hidden states while interacting with their environment.

My work combines vision, force–torque sensing, physics simulation, and probabilistic programming to perform simulation-based inference for contact-rich manipulation. I investigate how robots can actively gather information through interaction, selecting actions that reduce uncertainty and improve task observability. More broadly, I am interested in the intersection of perception, active sensing, decision-making, and robot learning, with the goal of building physical agents that can reason about uncertainty and adapt their behavior accordingly.

## Locations of key files/directories

* Basic config options: _config.yml
* Top navigation bar config: _data/navigation.yml
* Single pages: _pages/
* Collections of pages are .md or .html files in:
  * _publications/
  * _portfolio/
  * _posts/
  * _teaching/
  * _talks/
* Footer: _includes/footer.html
* Static files (like PDFs): /files/
* Profile image (can set in _config.yml): images/profile.png

## Tips and hints

* Name a file ".md" to have it render in markdown, name it ".html" to render in HTML.
* Go to the [commit list](https://github.com/academicpages/academicpages.github.io/commits/master) (on your repo) to find the last version GitHub built with Jekyll. 
  * Green check: successful build
  * Orange circle: building
  * Red X: error
  * No icon: not built

* Academic Pages uses [Jekyll Kramdown](https://jekyllrb.com/docs/configuration/markdown/), GitHub Flavored Markdown (GFM) parser, which is similar to the version of Markdown used on GitHub, but m[...]

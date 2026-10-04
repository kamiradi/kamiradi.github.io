---
permalink: /
title: "Research"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I work on **robot learning and contact-rich manipulation**, with a focus on how robots can use physical interaction to act reliably under uncertainty.

My research combines **probabilistic inference, geometric representations, and sampling-based control**. I develop methods that use vision and contact to infer uncertain properties of the environment, then use that information to guide manipulation.

A recurring question in my work is: **How can a robot use contact not only to manipulate the world, but also to understand it?**

My current research explores this question through contact-aware perception, Bayesian inference, and model-predictive control for fine manipulation tasks such as robotic insertion.

[Projects](/portfolio/) · [Publications](/publications/) · [GitHub](https://github.com/kamiradi)

## Publications

{% include publications-list.html %}

## Talks

### ROSCon 2024 — Integrating Drake into MoveIt

Part of my broader work on contact-rich manipulation is enabling robots to plan and execute motions safely around obstacles. Trajectory optimization and model-predictive control (MPC) provide powerful tools for reasoning about these motions.

As part of this effort, I contributed to integrating Drake's optimization tools into MoveIt, working with Sebastian Castro and Sebastian Jahr. We presented this work at ROSCon 2024.

<div style="margin-top:0.4rem;padding:56.25% 0 0 0;position:relative;">
  <iframe src="https://player.vimeo.com/video/1024970427" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="ROSCon 2024 — Integrating Drake into MoveIt"></iframe>
</div>

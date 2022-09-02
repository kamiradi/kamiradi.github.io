---
layout: default
title: "Writing ROS nodes with python3"
---
# Running ROS nodes with other python3 scripts

Last Edited: August 22, 2022 10:53 AM

### Applicability

Only read on if you are using `ros-kinetic` on Ubuntu 16.04. If you are using this setup, my first suggestion is to upgrade the setup to better LTS versions. But I get how Robotics stacks work, you don’t wanna touch the setup because it is working!!

### Dilemma

ROS1 runs only on python 2. Which means that when you install `ros` python related packages, they are only symlinked with python2 because they are built for ptyhon2. This has to be the single biggest reason why ROS2 needs to be adopted quickly.

### Quickfix

Enter `roslibpy` …

This is a rosbridge library that connects to rosmaster via a bridge node. Your standalone non-ros code (in this case some python3 deep learning ) speaks to the bridge, and the bridge speaks to the `roscore`.

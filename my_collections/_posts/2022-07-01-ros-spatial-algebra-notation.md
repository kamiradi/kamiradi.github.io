---
layout: default
title: "ROS and spatial algebra semantics"
---
# ROS and spatial algebra semantics

Last Edited: September 1, 2022 2:32 PM

When looking up transformation on ROS `tf`, keep in mind that if you want a transformation $^{A}X^{B}$, (read as transformation from the frame $A$ to frame $B$), then the way you would articulate the lookup in `lookup_transform` function in `tf` would be 

```python
buf = tf2_ros.Buffer()
tf_listener = tf2_ros.TransformListener(buf)
transform = buf.lookup_transform(A, B, rospy.Time(0))
```

Don’t let the target to source terminology confuse you here. More about [this](https://answers.ros.org/question/330580/tf2-listener-transform-has-child_frame_id-as-the-source-and-frame_id-as-the-target/). The above function returns the transformation $^{A}X^{B}$.

In [Tedrake’s Robotic Manipulation](https://manipulation.csail.mit.edu/pick.html#section3), the usual notation has a target frame (say G), reference frame(say F) and a expressed in frame (say F again). The expressed in frame is dropped when talking about pure rotations and transformations, $R, X$.

$$
^{F}X^{G}, 
^{F}R^{G}, ^{F}p^{G}_{F}
$$

In ROS, the main message used to depict transformations is the `TransformStamped` message. This has attributes `frame_id` and `child_frame_id`. Then in Tedrake’s notation the transformation extracted from the above `ros` functionality is as follows.

$$
^{frame\_id}X^{child\_frame\_id}
$$

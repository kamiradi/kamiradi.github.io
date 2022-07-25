---
layout: default
---
# Chap 1: Introduction

---

The concepts in these notes are from the *Introduction to Linear Algebra* textbook by Gilbert Strang. I’ll also be taking intuitions developed by Grant Sanderson in his *Linear Algebra* video series. These intuitions are particularly important and useful in Robotics. The recipes and algorithms I’ll leave for the textbook, and refer you to the corresponding sections.


---

## Vectors and Linear Combination

Vectors are a collection of numbers, represented as a column. They usually represent a set of physical quantities, coordinates of a frame of reference in robotics(Physics), or stock prices for different companies(Data Science). In general, a vector is a form of abstraction in this regard, and we are trying to dig out general principles that can apply all over. In Linear Algebra, the most atomic entity is the column vector

$$
\boldsymbol{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_m \end{bmatrix} \,.

$$

### Basic Operations in vectors

The basis (not to be confused with basis vector) for Linear Algebra are the following two operations

- Vector addition
- Scalar multiplication

<aside>
💡 Vector Addition takes the form of adding the two constituents numbers $$x_{1}$$ and $$x_{2}$$ of the vector $$\textbf{x}$$ and the numbers $$y_{1}$$ and $$y_{2}$$ of the vector $$\textbf{y}$$.

</aside>

### Linear Combination

A Linear Combination is the combination of a vector multiplied by a scalar, added to another vector multiplied with another scalar.  If $$v_{1},...,v_{n}$$ are column vectors (as described above) and $$a_{1},...,a_{n}$$ are scalars. A *Linear Combination* is defined as the following

$$
a_1 \mathbf v_1 + a_2 \mathbf v_2 + a_3 \mathbf v_3 + \cdots + a_n \mathbf v_n.
$$

This operation is the most crucial operation in Linear Algebra. It specifies the *Linear Combination* of two or more column vectors. This also happens to be the result of a matrix-vector multiplication.

How do you visualise these vectors and the operation of a linear combination?

A vector can be visualised in one of 3 ways

- A set of $n$ numbers, where $n$ is the dimension of the vector.
- An arrow from $$(0, 0)$$
- A point in the $n$-dimensional plane.

And a linear combination of a bunch of vectors results in a vector that is visualised in the same way.

### Important questions

The subsequent set of questions asked is for the case of vectors in 3 dimensions.

What do all Linear Combinations of a single vector $$c\textbf{u}$$ look like?

The combinations fill a line through $$(0, 0, 0)$$.

What do all Linear Combinations of 2 vectors, $$c\textbf{u} + d\textbf{v}$$, look like?

Ideally the combination fill a plane through $$(0, 0, 0)$$. However, this depends upon if $$\textbf{v}$$ is linearly dependent upon $$\textbf{u}$$, or not.

What do all Linear Combinations of 3 vectors, $$c\textbf{u} + d\textbf{v} + e\textbf{w}$$, look like?

Again, ideally fills a three dimensional space through $$(0, 0, 0)$$. Same caveat between three vectors.

## Vector Lengths and Dot Products

### Dot Product

### Lengths and Unit Vectors

### Angle between two vectors

### Cosine Formulas and basic inequalities

## Matrices

Matrices need to be thought of as a group of column vectors. This is a fundamental change in viewpoint.

### Linear Equations

### Inverse Matrix

### Cyclic Differences

### Independence and Dependence

Consider the vectors $$\textbf{u}, \textbf{v}, \textbf{w}^{\*}$$. While defining dependence and independence, what is important is the relation between these vectors.

if $$\textbf{w}^{\*}$$ is in the plane of $$\textbf{u}$$ and $$\textbf{v}$$ - dependence

if $$\textbf{w}^{\*}$$ is not on the plane of $$\textbf{u}$$ and $$\textbf{v}$$ - independence

This has crucial implications when solving linear equations of the type $$\textbf{A}\textbf{x} = \textbf{b}$$. The columns of $$\textbf{A}$$ being dependent/independent determines if the system has one solution, many solutions or no solutions. More on this in Chap 3.

Independent columns - $$\textbf{A}\textbf{x} = \textbf{0}$$ has one solution - $\textbf{A}$ is said to be **Invertible** 

Dependent columns - $$\textbf{C}\textbf{x} = \textbf{0}$$ has many solutions - $$\textbf{C}$$ is said to be **Singular**


---
layout: default	
---
# Orthogonality

The first concept is that of orthogonality. Two vectors are said to be orthogonal if their dot product is 0.

$$
v^{T}w=0
$$

## Orthogonality of the Four Subspaces

Two subspaces $V$ and $W$ are orthogonal when $v^{T}w=0$ for all $v$ in $V$ and all $w$ in $W$. This chapter deals with orthogonal subspaces, bases and then matrices. 

**Note**: When $A$ multiplies a vector $x$, 

- At the first level this is only numbers
- At the second level $Ax$ is a combination of column vectors.
- The third level shows $Ax$ and its subspaces.
- The complete picture comes when you consider the fact of orthogonality

The previous chapter dealt with the 4 fundamental subspaces and their dimensions. This chapter sheds light on the relationship between these subspaces, more specifically their orthogonality.

> The Orthogonal Complement of a subspace $V$ contains every vector that is perpendicular to $V$. This orthogonal subspace is denoted by $V^{perp}$.
> 

> Fundamental Theorem of Linear Algebra Part 1: The row space $C(A^{T})$ has dimension $r$ and the nullspace $N(A)$ has dimension $n-r$. The column space $C(A)$ has dimension $r$ and the left nullspace $N(A^{T})$ has dimension $m-r$.
> 

> Fundamental Theorem of Linear Algebra Part 2: $N(A)$ is the orthogonal complement of $C(A^{T})$, $N(A^{T})$ is the orthogonal complement of $C(A)$.
> 

One of the most fundamental intuitions from Linear Algebra, specifically from the perspective of AI and robotics. 

> There is an $r \times r$ invertible matrix hiding inside $A$, if we throw away the 2 nullspaces. From the rowspace to the column space, $A$ is invertible. This is the fundamental intuition behind a pseudoinverse.
> 

Just think of what makes an invertible matrix invertible. The intuition is that an inverse exists only when the matrix represents a function that is one-to-one. The moment you have anything else in the nullspace, it means that there are many $x$ for which $Ax = 0$.  This way, the function loses its one-to-one character, becoming many-to-one. Inverting a many-to-one function is mathematically impossible.

This leads us to the idea that each $x$ for a matrix $A$ is the sum of $x_{r} + x_{n}$. It has a nullspace component, $N(a)$ and a rowspace component, $C(A^{T})$.

At this point I’d like to share a lurking intuition about matrices. Something that has been under the surface and not completely formed but important nonetheless

> Think of a matrix $A (m \times n)$ as something that scissors $\mathbf{R}^{n}$ into 4 the subspaces predominantly by counting the number of dependent columns you put in it
> 

## Projections

The projection of a vector onto another vector is defined as the component of the first vector along the second vector.

The 2 key questions we are trying to answer this section are

1. What is the projection $p$ of a vector $b$ on a line through $a$?
2. What is the corresponding projection matrix $P$ that produces that projection?

More fundamentally, the general version of the questions asked above takes the following shape. 

> What is the projection of a vector $b$ onto a column space $C(A)$, where $P$ is the corresponding projection matrix ?
> 

### Projection on a line

Assume the case of projecting a line onto another line. The task is the following

- Find the value of the projection
- Construct the projection vector
- Find the projection matrix.

The projection of $b$ onto the line through $a$ is the closest point $p$ to the line

$$
p = a\hat{x} \\ e= b - p \\ e = b - a\hat{x} \\ a^{T}e=0\\ p = a\frac{a^{T}b}{a^{T}a} \\ P = \frac{aa^{T}}{a^{T}a}
$$

The error $e = b - p$ is perpendicular to $a$. This is how the above equation is arrived at. You start with the error vector, which is perpendicular to $b$’s projection in the subspace you are projecting into, in this case the line $a$.

The matrix $I-P$ should be a projection too. It produces the projection of $b$ on a perpendicular subspace.

### Projection onto a Subspace

Similarly, the projection of $b$ onto a subspace $S$ is closest vector $p$ in $S$ such that $b-p$ is orthogonal to $S$. The same questions can be asked when we want to project a vector $b \in \mathbf{R}^{m}$ onto a subspace spanned by $n$ linearly independent vectors $a_{1}, …., a_{n}$ in $\mathbf{R}^{m}$. We want to find

$$
p = \hat{x}_{1}a_{1} + ... + \hat{x}_{n}a_{n}
$$

closest to a given vector $b$.

More generally, the projection of $b$ onto the columns space of $A$ is the vector 

$$
p = A(A^{T}A)^{-1}A^{T}b
$$

The projection matrix that projects $b$ onto $C(A)$ is 

$$
P = A(A^{T}A)^{-1}A^{T}
$$

Comparing projection from a line to projecting into a subspace.

> Note: $A^{T}A$ is square, symmetric and invertible $iff$ $A$ has independent columns. Hence the above mentioned recipes are only applicable if $A$ is a full rank $n$ (full column rank) → all its columns vectors are linearly independent.
> 

Therefore,

1. Our subspace is the column space of $A$
2. the error vector $b - A\mathbf{\hat{x}}$ is perpendicualr to the column space.
3. Therefore, $b - A\mathbf{\hat{x}}$ is in the nullspace of $A^{T}$. This is the left nullspace $N(A^{T})$ of $A$.

> The left nullspace is important in projections. It contains the error vectors $e$ described in the blocks above.
> 

<aside>
💡 The question then arises, what if the columns of $A$ are not independent, then can we find the projections of any vector $b$? I guess then you can only find the projection on to the column space of dimension $r$. Does that mean in this formulation that the above steps can only be performed for an $m\times n$ matrix $A$ where $m>n$?

</aside>

## Least Squares Approximations

 When $Ax = b$ has no solution, the projection of $b$ on the column space of $A$ is the least squares approximation. 

Fitting a line is the first application of least squares approximations. Fitting $m$ lines to an $n$ dimensional space becomes a problem usually when $m>>n$. There are more equations than unknowns.Think about that for a second. The column space is very thin. Usually a small subspace of the entire vector space, with $b$ almost certainly lying outside of it.

As a general rule, $m>>n$ normally leads to $m$ equations for $n$ variables being unsolvable. 

### Dependent Columns in $A$: What is $\hat{x}$?

You get the pseudoinverse. Explained in a later chapter.

## Orthonormal bases and Gram-Schmidt

We spoke about orthogonal vectors and orthogonal spaces/subspaces. This part of the chapter meets orthogonal basis and orthogonal matrices. Orthonormal vectors are orthogonal vectors with unit length.

$$
q^{T}_{i}q_{j} = \left\{ \begin{array}{lr}
0 & i\neq j \\
1 & i = j 
\end{array}
\right\}
$$

We put these vectors into the columns of a matrix $Q$. Because of the property of orthonormal vectors we have 

$$
Q^{T}Q = I
$$

> When $Q$ is square transpose is equal to the inverse of the matrix
> 

> An orthogonal matrix $Q$ is a square matrix with orthonormal columns.
> 

Note: you can also have normal matrices with orthonormal columns. In this case the matrix can be rectangular while displaying the property described above. For example $\frac{1}{3}\left[ \begin{array}{lr}
1 & -2 \\
2 & -1 \\ 
2 & 2
\end{array}
\right]$. 

Why do we want orthogonal matrices, why do we want the matrices to have orthonormal columns?

Because when estimating the projection matrix $P$ to find the matrix projection

$$
p = A\hat{\mathbf{x}} \\ P = A(A^{T}A)^{-1}A^{T} \\ A^{T}A\hat{x} = A^{T}b \\ 
Q^{T}Q\hat{x} = Q^{T}b \\ 
\hat{x} = Q^{T}b \\ \hat{x}_{i} = q^{T}_{i}b
$$

### Gram-Schmidt

How do you convert any matrix to an orthogonal matrix? How do you make the columns of a matrix orthonormal.


---
layout: default	
---
# Vector Spaces and Subspaces

## Spaces of Vectors

What questions are we dealing with 

## The Nullspace of $\textbf{A}$

The nullspace $N(A)$ is a subspace of $\mathbf{R}^{n}$.

> The *rank* $r$ of $A$ is the number of pivots in the matrix after the elimination step is applied
> 

## Elimination: The Big picture

What is algorithm/recipe of elimination achieving for a matrix? Why is it even an artifact while analysing a matrix?  The answer is that it is the algorithm to methodically ascertain if the current row/column (The pivot that you are estimating) is a linear combination of the previous rows/column. If a pivot shows up then the answer is an unequivocal no, if not then the current row/column is a linear combination of the previous row/column.  

## Complete Solution to $\textbf{A}\textbf{x} = \textbf{b}$

This section discusses a more general solution. What are the conditions of solvability for $\textbf{A}\textbf{x} = \textbf{b}$?

- It is solvable when $b$ is in the columns space of $A$, $C(A)$
- If a combination of rows of A gives zero row, then same combination of entries of b must give 0

So what is the sequence of steps to construct the general complete solution.

The **Complete solution** to $\textbf{A}\textbf{x} = \textbf{b}$: $\textbf{x}$ = (one particular solution $\textbf{x}_{p}$) + (any $\textbf{x}_{n}$ in the nullspace).

> $A$ has a full column rank $r = n$ when its nullspace $N(A)$ = zero vector. No free variables
> 

> $A$ has a full row rank $r = m$ when its columns space $C(A)$ is $\mathbf{R^{m}}$. $Ax = b$ is always solvable.
> 

<aside>
💡 The four cases are $r = m = n$ ($A$ is invertible), $r = m < n$ (every $Ax = b$ is solvable), $r = n < m$ ($Ax = b$ has 1 or 0 solutions), $r < n, r< m$ (0 or infinite solutions)

</aside>

## Independence, Basis and Dimension

To reiterate, linearly independent vectors are vectors that cannot be expressed as a linear combination of each other. In other words a set of vectors $v_{1}, …, v_{n}$ is linearly independent if the only combination that gives the zero vector is $0v_{1} + 0v_{2}+ … + 0v_{n}$.

> Full column rank: The columns of $A$ are independent exactly when the rank is $r = n$. There are n pivots and no free variables. Only $x = 0$ is in the nullspace.
> 

> A set of vectors spans a space if their linear combinations fill the space. The columns of a matrix space its column space. They may be dependent. The rows of a matrix span the rowspace of a matrix. Again they may be dependent.
> 

Now comes the next idea in this hierarchy. The idea of a basis.

> The basis for a vector space is a sequence of vectors with two properties: 1) The basis vectors are linearly independent, 2) they span the space. There is one and only one way to write a vector $v$ as a combination of the basis vectors.
> 

As a result an important takeaway

 

> The pivot columns of $A$ are a basis for its column space. The pivot rows of $A$ are a basis for its row space
> 

The number of vectors in any and every basis is the dimension of the space. Point to note, a vector space can have multiple bases. However, there will always be the same number of vectors in that basis, so the dimension never changes.

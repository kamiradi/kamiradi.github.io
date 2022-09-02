---
layout: default	
title: "Solving Linear Equations"
---
# Solving Linear Equations

## Vectors and Linear Equations

The central theme of Linear Algebra is to solve systems of linear equations. The canonical representation of a system of linear equations in Linear Algebra is $Ax = b$.  There are two ways of interpreting this system of linear equations in Linear Algebra.

- Multiplication by row - You represent $A$ as the coefficient matrix. This matrix stores the values of the coefficients of the system of linear equations. $b$ takes in the values on the right hand side of the system of linear equations. We solve for the column vector $x$. Assuming a 3 dimensional vector space, the geometry of this approach is to visualise 3 planes intersecting at a point - if they intersect that is. You can retrieve the original set of equations by taking the dot product of each row in the matrix $A$ with the column vector $x$.
- Multiplication by column - You represent the coefficients of each unknown as a column. For a system of 3 linear equations in 3 unknowns, you would have 3 such columns. The idea then is to represent the system as a linear combination of the columns of the coefficient matrix. The geometry of this approach is more of a linear combination geometry. Each vector is being scaled by a scalar and added to the other scaled column vectors. The question then becomes - how much do you scale the coefficient columns $A = [A_{1}, A_{2}, A_{3}]$ vectors to get the column vector $b$.

## Idea of Elimination

Again assume the system of linear equations given by $Ax=b$. Where $A$ is the coefficient matrix, $x$ is to be solved for and $b$ is the right hand matrix. Just as we use elimination in solving systems of linear equations, Matrix elimination utilises pivot multipliers to retrieve ***Upper Triangle system** of Matrices*. The idea is to transform the coefficient matrix to an upper triangular system and then use the method ***back substitution*** to arrive at the solution to the system. This forms the base algorithmic approach to solving a system of linear equations.

There are 3 different failure cases as described in the book

- after applying the pivot multiplier you may get a 0 coefficient with non-zero right hand
- 0 coefficient with 0 right hand - too many solutions
- You may not get a upper triangular system

In the third case, you can switch up rows in the system to retrieve a triangular system and arrive at a solution. In the case of the first two cases - you get no solution or infinitely many solutions. The third case is called ***non-singular*** and the first two cases are called ***singular***. 

> The idea of elimination given here is called the ***Gaussian Elimination Method.***
> 

For the algorithm, please refer to section 2.2 of the book.

## Elimination using Matrices

Each of the steps mentioned in the Gaussian Elimination Method, can be implemented as matrix operations. The idea is to device an ***Elimination Matrix.*** This matrix, $E$, is then used to multiply the coefficient matrix to perform the necessary row eliminations. So the question then arises, what is matrix multiplication. Funnily this is the first time the book addresses matrix multiplication. The following is how matrix multiplication is defined

> If $B$ has several columns $b_{1}, b_{2}, b_{3}$, then the columns of $AB$ are $Ab_{1}, Ab_{2}, Ab_{3}$
> 

The section also introduces the idea of an **augmented matrix.**

Matrix $P_{1, 2}$ is the row-interchange matrix. When $A$ is multiplied with this matrix, it’s first and second rows are exchanged.

## Rules for Matrix Operations (Multiplication and Addition)

Addition is obvious, so for now I am going to leave out how you add two matrices. Multiplication is interesting, and also fundamental to Robotics. Basic transformation operations between frames are done using Matrix multiplication. The textbook gives 4 ways to multiply 2 matrices.

> To multiply $AB$, $A$ must have $n$ columns and $B$ must have $n$ rows.
> 

The **Fundamental Law of Matrix Multiplication** is given by the following:

$$
(AB)C = A(BC)
$$

### Four ways of multiplying Matrices

1. The *Dot Product* method
2. The *Column method* - here you split $B$ into its constituent column vectors, and then treat matrix multiplication as $n$ different matrix-vector multiplications. As you may recall, Matrix-Vector multiplication is a linear combination of the columns of the matrix with scalar in the vector.
3. The *Row method -* this picture is reversed, each row multiplies the whole matrix $B$
4. The *Columns multiply Rows* method

### Laws for matrix operations

For matrix multiplication:

$$
AB \neq BA \\ A(B + C) = AB + AC \\ (A + B)C = AC + BC \\ A(BC) = (AB)C
$$

## Inverse Matrices

Assume $A$ is a square matrix. Whatever the matrix $A$ does, $A^{-1}$ undoes. The product of a matrix and it’s inverse is the indentity matrix.

$$
A  A^{-1} = I
$$

<aside>
💡 Not all matrices have inverses.

</aside>

The following are a few notes on inverses

1. The inverse exists $iff$ elimination produces $n$ pivots. Refer to the **Gaussian Elimination Method** to understand what ***pivots*** mean.
2. A matrix cannot have 2 different inverses
3. If $A$ is invertible the only solution to $Ax=b$ is $x=A^{-1}b$.
4. If $A$ is invertible, then $Ax=0$ can have only the zero solution $x=A^{-1}0=0$.
5. A square matrix $A$ is invertible only if its determinant is non-zero.
6. A diagonal matrix has an inverse provided no diagonal entries are zero.

<aside>
💡 The ***Gauss-Jordan Elimination*** method gives you a way to calculate inverse $A^{-1}$.

</aside>

### The inverse of a Product $AB$

$$
(AB)^{-1} = B^{-1}A^{-1}
$$

Think about the geometry of the above matrix multiplication. At this point in the book, the geometry of matrices has not yet been discussed. So you can visualise it as a bunch of vectors.

<aside>
💡 For square matrices, an inverse on one side is automatically an inverse on the other side.

</aside>

### Singular vs. Invertible

The central question about inverting matrices, how do we know if a matrix has an inverse? This is asked particularly in the light of formulating the solution of a set of linear equations $Ax = b$. The solution is given as $x = A^{-1}b$, only if $A^{-1}$ exists. 

<aside>
💡 If $A$ is an $m \times n$ matrix,   $$$A^{-1}$ exists exactly when A has a full set of $n$ pivots.

</aside>

A square matrix $A$ with a full set of pivots will always have a two-sided inverse. What is a two sided inverse?

<aside>
💡 if $AC=I$ and $CA=I$ then $C=A^{-1}$. Gauss-Jordan finds $A^{-1}$.

</aside>

And finally, something about diagonally dominant matrices and their inverses.

Any matrix that does not have an inverse is a **singular** matrix.

 

## Elimination = Factorization: $A=LU$

Many key ideas in Linear Algebra, are really factorizations of a matrix. The original matrix can be described as a product  of 2 to 3 special matrices. The first factorization comes from elimination.

$$
A = LU
$$

$L$ represents the inverse of all the elimination matrices used to transform $A$ to $U$. The final step is to divide by the pivots to attain the following formulation.

$$
A = LDU
$$

## Transpose and Permutations

Symmetric Matrices follow $A^{T} = A$.

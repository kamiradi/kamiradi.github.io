# Linear Algebra

Resource: https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/
Status: In Progress
Type: Foundation, Math

# Chap 1: Introduction

---

The concepts in these notes are from the *Introduction to Linear Algebra* textbook by Gilbert Strang. I’ll also be taking intuitions developed by Grant Sanderson in his *Linear Algebra* video series. These intuitions are particularly important and useful in Robotics. The recipes and algorithms I’ll leave for the textbook, and refer you to the corresponding sections.

# What are Vectors?

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
💡 Vector Addition takes the form of adding the two constituents numbers $x_{1}$ and $x_{2}$ of the vector $\textbf{x}$ and the numbers $y_{1}$ and $y_{2}$ of the vector $\textbf{y}$.

</aside>

### Linear Combination

A Linear Combination is the combination of a vector multiplied by a scalar, added to another vector multiplied with another scalar.  If $v_{1},...,v_{n}$ are column vectors (as described above) and $a_{1},...,a_{n}$ are scalars. A *Linear Combination* is defined as the following

$$
a_1 \mathbf v_1 + a_2 \mathbf v_2 + a_3 \mathbf v_3 + \cdots + a_n \mathbf v_n.
$$

This operation is the most crucial operation in Linear Algebra. It specifies the *Linear Combination* of two or more column vectors. This also happens to be the result of a matrix-vector multiplication.

How do you visualise these vectors and the operation of a linear combination?

A vector can be visualised in one of 3 ways

- A set of $n$ numbers, where $n$ is the dimension of the vector.
- An arrow from $(0, 0)$
- A point in the $n$-dimensional plane.

And a linear combination of a bunch of vectors results in a vector that is visualised in the same way.

### Important questions

The subsequent set of questions asked is for the case of vectors in 3 dimensions.

What do all Linear Combinations of a single vector $c\textbf{u}$ look like?

The combinations fill a line through $(0, 0, 0)$.

What do all Linear Combinations of 2 vectors, $c\textbf{u} + d\textbf{v}$, look like?

Ideally the combination fill a plane through $(0, 0, 0)$. However, this depends upon if $\textbf{v}$ is linearly dependent upon $\textbf{u}$, or not.

What do all Linear Combinations of 3 vectors, $c\textbf{u} + d\textbf{v} + e\textbf{w}$, look like?

Again, ideally fills a three dimensional space through $(0, 0, 0)$. Same caveat between three vectors.

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

Consider the vectors $\textbf{u}, \textbf{v}, \textbf{w}^{*}$. While defining dependence and independence, what is important is the relation between these vectors.

if $\textbf{w}^{*}$ is in the plane of $\textbf{u}$ and $\textbf{v}$ - dependence

if $\textbf{w}^{*}$ is not on the plane of $\textbf{u}$ and $\textbf{v}$ - independence

This has crucial implications when solving linear equations of the type $\textbf{A}\textbf{x} = \textbf{b}$. The columns of $\textbf{A}$ being dependent/independent determines if the system has one solution, many solutions or no solutions. More on this in Chap 3.

Independent columns - $\textbf{A}\textbf{x} = \textbf{0}$ has one solution - $\textbf{A}$ is said to be ***Invertible*** 

Dependent columns - $\textbf{C}\textbf{x} = \textbf{0}$ has many solutions - $\textbf{C}$ is said to be ***Singular***

# Chap 2: Solving Linear Equations

---

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

# Chap 3: Vector Spaces and Subspaces

---

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

# Chap 4: Orthogonality

---

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

$$
p = a\hat{x} \\ e= b - p \\ e = b - a\hat{x} \\ a^{T}e=0\\ p = a\frac{a^{T}b}{a^{T}a} \\ P = \frac{aa^{T}}{a^{T}a}
$$

$$
p = A\hat{\mathbf{x}} \\ e= b - p \\ e = b - A\hat{\mathbf{x}} \\ a^{T}e=0\\ p = A(A^{T}A)^{-1}A^{T}b \\ P = A(A^{T}A)^{-1}A^{T}
$$

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

# Chap 5: Determinants

---

Why do we need determinants - to understand Eigenvalues. The matrix is invertible if the determinant is non-zero

## Properties of Determinants

$$
det(I) = 1\\
det(exchange\_rows(A)) =-1*det(A) 
$$

The textbook has all the properties and the BIG formula for the calculation of determinant matrix. These can be referred to. I’ll try and put down the other basic intuitions.

The recipe to calculate the determinant of a matrix

- Perform the $LU$ factorisation.
- Multiply the diagonal elements of the matrix $U$→ that should be the determinant of the matrix.
- A 0 determinant indicates that the original matrix is singular, non-zero determinant indicates that the matrix is invertible.
- Again the determinant is the product of the pivots.

What is a cofactor of $a_{ij}$?

It is the determinant of the $n-1$ matrix when row and columns $i, j$ are erased. $i+j$ even then the sign is plus.

## Applications of the determinant: Cramer’s rule, Inverse, and volume

 

Using the determinants, what is the formula for the inverse of a matrix?

$$
A^{-1} = \frac{C^{T}}{det(A)}
$$

Where $C^{T}$ is the transpose of the cofactor matrix. $C$ is the matrix when you replace every element in $A$ with its correponding cofactor.

How does this appy to $Ax=b$. Cramer’s rule. 

$$
x = \frac{C^{T}b}{det(A)} \\
x_{i} = \frac{det(A_{i})}{det(A)}
$$

Lets talk about determinant of a matrix being equated to the volume.

> Determinant of a matrix is physically equal to the volume of the box enclosed by the columns of the matrix.
> 

Then what does 0 determinant mean in this sense? It means it is not a full column rank matrix. However, there is an idea of a area of a subspace represented by the independent columns that remain in the matrix.

# Chap 6: Eigenvalues and Eigenvectors

---

$Ax$ parallel to $x$. → $x$ is eigenvectors.

$$
Ax = \lambda x
$$

$\lambda$ are eigenvalues and x are eigenvectors. If $A$ is singular then  $\lambda = 0$ is an eigenvalue as well. 

> $n \times n$ matrix will have $n$ eigenvalues, The sum of the eigenvalues equals the sum down the principle diagonal. This is known as the *Trace* of a matrix.
> 

How do you find the eigenvectors and eigenvalues?

You need to find the $x$ where $Ax = \lambda x$

$$
Ax = \lambda x \\ 
Ax - \lambda x = 0 \\
(A - \lambda I)x = 0 \\
det(A - \lambda I) = 0
$$

For $(A - \lambda I)x$ to be equal to 0, the matrix in the brackets needs to be singular (we are not interested in non-singular nullspace). You solve for the eigenvalues by solving the polynomial in $\lambda$. After that, you retrieve the nullspace of the matrix $A-\lambda I$. This will give you the eigenvectors for each $\lambda$ solved.

> The $\lambda$s for which $A-\lambda I$ is singular represents the eigenvalues, and for each $\lambda$ found, find the eigenvectors $x$.
> 

Turns out, symmetric matrices have purely real eigenvalues, and anti-symmetric matrices have purely imaginary eigenvalues. This is the partial picture.

### Determinant and Trace

The product of the eigenvalues is equal to the determinant, the sum of the eigenvalues is equal to the sum of the diagonal entries (Which also happens to be the trace of the matrix). 

Matrices may have imaginary eigenvalues as well. For example the 90 degree rotation matrix. Think of it as any vector that is rotated by 90 degrees cannot be parallel to itself. Special properties of a matrix lead to special eigenvalues.

## Diagonalization and Powers of A

 

$$
Ax = \lambda x
$$

A more general matrix version of the equation above is the following

$$
AS = \Lambda S
$$

Where $S$ is the eigenvector matrix and $\Lambda$ is the eigenvalue diagonal matrix. Then $A$ can be diagonalized as the following:

$$
A = S \Lambda S^{-1}
$$

Similarly, the eigenvalue diagonal matrix can be estimated as 

 

$$
\Lambda = S^{-1}AS
$$

The power of $A$ are

$$
A^{k} = S \Lambda^{k}S^{-1}
$$

$A$ is said to be diagonalizable if every eigenvalue has enough eigenvectors. Refer to the textbook for this. 

No equal eigenvalues means $S$ is invertible abnd $A$ is diagonalizable

## Systems of Differential Equations

## Symmetric Positive Definite

If a matrix $A$ is Symmetric and positive definite, then its eigenvectors are orthogonal and its eigenvalues are real and positive.

# Singular Value Decomposition

---

It is another form of factorization for the matrix $A$. It is decomposition that factorizes any matrix to 2 orthogonal matrices and a diagonal matrix. If $A$ were symmetric postive definite, then the SVD gives us the eigenvector matrix and the eigen value diagonal matrix.
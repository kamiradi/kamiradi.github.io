
---
layout: default	
---
# Eigenvectors and Eigenvalues

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

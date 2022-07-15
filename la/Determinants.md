---
layout: default	
---
# Determinants

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

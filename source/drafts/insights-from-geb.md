---
layout: draft
title: "Insights from Gödel, Escher, Bach: An Eternal Golden Braid"
---

### Can we create multiplication using a system like the pq-System? ###

The _pq-system_ is introduced in Chapter II to show an isomorphism of the addition system represented typographically. Can we create a version that represents multiplication?

We'll call this new system the _tq-system_. The three distinct symbols of this system are ${\bf t}$, ${\bf q}$, and $-$.

_Definition_: $x{\bf t}-{\bf q}x$ is an axiom, whenever $x$ is composed of hyphens only.

_Rule_: Suppose $x$, $y$, and $z$ all stand for particular strings containing only hyphens. And suppose that $x{\bf t}y{\bf q}z$ is a theorem. Then $x{\bf t}y-{\bf q}zx$ is a theorem.

Example: If we follow the _bottom-up_ decision procedure on page 49, we can generate example theorems from the system to see if it does indeed represent multiplication.

Here are a couple theorems generated using this procedure:

$$
- {\bf t} - {\bf q} -
\Rightarrow
- {\bf t} - - {\bf q} - -
\Rightarrow
- {\bf t} - - - {\bf q} - - -
$$
$$
- - {\bf t} - {\bf q} - -
\Rightarrow
- - {\bf t} - - {\bf q} - - - -
\Rightarrow
- - {\bf t} - - - {\bf q} - - - - - -
$$

In the language of multiplication, the theorems above would look like this:

$$
1 \times 1 = 1
\Rightarrow
1 \times 2 = 2
\Rightarrow
1 \times 3 = 3
$$
$$
2 \times 1 = 1
\Rightarrow
2 \times 2 = 4
\Rightarrow
2 \times 3 = 6
$$

Starting to look familiar?
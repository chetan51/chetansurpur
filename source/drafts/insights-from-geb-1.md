---
layout: draft
title: "Insights from Gödel, Escher, Bach (Part 1)"
---

I'm currently reading the acclaimed book [_Gödel, Escher, Bach: An Eternal Golden Braid_](http://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach), and it's blowing my mind.

Like a glass of exquisite wine, this work of art deserves to be patiently and deliberately enjoyed. So as I read, I will accumulate my explorations and any insights and questions I have in this blog series.

If you can answer a question, please write down your answer in the comments. I'll quote the convincing answers below the questions.

Let the intellectual journey begin!

### Exploration 1. Can we create multiplication using a system like the pq-System? ###

The _pq-system_ is introduced in Chapter II to show an isomorphism of the addition system represented typographically. [TODO: Reprint _pq-system_ here.]

Can we create a version that represents multiplication?

We'll call this new system the _tq-system_. The three distinct symbols of this system are ${\bf t}$, ${\bf q}$, and $-$.

_Definition_: $x{\bf t}-{\bf q}x$ is an axiom, whenever $x$ is composed of hyphens only.

_Rule_: Suppose $x$, $y$, and $z$ all stand for particular strings containing only hyphens. And suppose that $x{\bf t}y{\bf q}z$ is a theorem. Then $x{\bf t}y-{\bf q}zx$ is a theorem.

_Example_: If we follow the _bottom-up_ decision procedure on page 49, we can generate example theorems from the system to see if it does indeed represent multiplication.

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

_Edit: I just read_ Chapter III: Figure and Ground _. Imagine my surprise when Hofstadter goes through the multiplication exercise as well, even using the exact same name for the system written above!_

#### Question 1A. Is it possible to create an isomorphism of exponentiation using this same idea? ####

Well, the axiom would be the same as the axiom in the _tq-system_ (multiplication) defined above. Only the rule would be different.

The difference in the rule between the _pq-system_ (addition) and the _mq-system_ (multiplication) was that instead of ...${\bf q}z-$ we had ...${\bf q}zx$. Basically, we upgraded the _symbol_ $-$ to the _variable_ $x$. This is like moving one level up the conceptual hierarchy.

But to get from the multiplication system to the exponentiation system, what would we upgrade the _variable_ $x$ to? There's nothing conceptually higher available to use. So can it actually be done without adding more capabilities to the system definition?

#### Answer 1A. ####

Reading the end of _Chapter III_, section _Primes as Figure Rather than Ground_ gave me an idea.

We might not be able to do it with just one system, but we can do it with two.

Let's assume we have the multiplication system (as defined above) available to us. Then, we can use it as a base to define the exponentiation system. After all, what is exponentiation but repeated multiplication?

_Definition_: $x{\bf e}-{\bf q}x$ is an axiom.

_Rule_: If $x{\bf e}y{\bf q}z$ is a theorem, and $z{\bf t}x{\bf q}w$ is a theorem, then $x{\bf e}y-{\bf q}w$ is a theorem.

And let's not forget the power of zero! Labeling $0$ as a new symbol:

_Definition_: $x{\bf e}0{\bf q}-$ is an axiom.

_Example_: Following the _bottom-up_ decision procedure, we generate example theorems from the system:

$$
- {\bf e} 0 {\bf q} -
$$
$$
- - {\bf e} 0 {\bf q} -
$$
$$
- {\bf e} - {\bf q} -
\Rightarrow
- {\bf e} - - {\bf q} - -
\Rightarrow
- {\bf e} - - - {\bf q} - - -
$$
$$
- - {\bf e} - {\bf q} - -
\Rightarrow
- - {\bf e} - - {\bf q} - - - -
\Rightarrow
- - {\bf e} - - - {\bf q} - - - - - -
$$

In the language of exponentiation, the theorems above would look like this:

$$
1 ^ 0 = 1
$$
$$
2 ^ 0 = 1
$$
$$
1 ^ 1 = 1
\Rightarrow
1 ^ 2 = 1
\Rightarrow
1 ^ 3 = 1
$$
$$
2 ^ 1 = 2
\Rightarrow
2 ^ 2 = 4
\Rightarrow
2 ^ 3 = 8
$$

Lookin' good!

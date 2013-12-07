---
layout: draft
title: "Insights from Gödel, Escher, Bach: An Eternal Golden Braid"
---

I'm currently reading the acclaimed [_GEB_](http://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach), and it's blowing my mind.

As I read, I will write down any insights or questions I have here. At the end of my reading, I will publish this collection in the hopes that the insights will amuse you and that you can answer some of my questions.

If you can answer a question, please write down your answer in the comments. I'll quote the convincing answers below the questions. Let's expand our minds together!

### A. Can we create multiplication using a system like the pq-System? ###

The _pq-system_ is introduced in Chapter II to show an isomorphism of the addition system represented typographically. [TODO: Reprint _pq-system_ here.]

Can we create a version that represents multiplication?

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

#### Question A1. Is it possible to create an isomorphism of exponentiation using this same idea? ####

Well, the axiom would be the same as the axiom in the _tq-system_ (multiplication) defined above. Only the rule would be different.

The difference in the rule between the _pq-system_ (addition) and the _mq-system_ (multiplication) was that instead of ...${\bf q}z-$ we had ...${\bf q}zx$. Basically, we upgraded the _symbol_ $-$ to the _variable_ $x$. This is like moving one level up the conceptual hierarchy.

But to get from the multiplication system to the exponentiation system, what would we upgrade the _variable_ $x$ to? There's nothing conceptually higher available to use. So can it actually be done without adding more capabilities to the system definition?
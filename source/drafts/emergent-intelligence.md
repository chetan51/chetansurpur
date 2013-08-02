---
layout: draft
title: "Emergent Intelligence"
---

I'm falling in love with the concept of [emergence](http://en.wikipedia.org/wiki/Emergence) – the idea that complex behavior can emerge from a set of very simple rules. And I'm starting to think that true Artificial Intelligence is not going to be a mathematically complex program expressly designed towards a pre-determined product, but rather an emergent behavior of a very simple ruleset.

### Emergence in the universe

I recently watched [a talk by Stephen Wolfram](http://blog.stephenwolfram.com/2013/03/talking-about-the-computational-future-at-sxsw-2013/) on his experiments with a simplified version of Conway's Game of Life. It's a game-changing talk; it literally gave me a new way to look at the world.

Wolfram starts with a line of squares, each one either black or white. Then, he applies a rule for how the values of a square and its left and right neighbors specifies the next value of that square. In this way, the line of colored squares transforms into a new line of squares with different colored values based on the simple rule. If you know about [Conway's Game of Life](http://en.wikipedia.org/wiki/Conway's_Game_of_Life), this should sound very familiar.

For example, here is one rule and how it affects the squares over time:

![A simple rule](http://blog.stephenwolfram.com/data/uploads/2013/03/slide_001x.png)

The rules are so simple that they can be encoded in just 8 bits. That means that it's possible to visualize all the possible rules.

When doing so, Wolfram very quickly found a rule (Rule 30) that resulted in really complex, unpredictable behavior:

![Rule 30](http://mathworld.wolfram.com/images/eps-gif/ElementaryCARule030_1000.gif)

To see how magical this is, take a look at 250 iterations with the same rule:

![250 iterations of Rule 30](http://mathworld.wolfram.com/images/gifs/Rule30Big.jpg)

If I were to ask you what the value of the middle square would be after a million iterations, you wouldn't be able to tell me without actually running through all the iterations. Now, this unpredictability isn't due to randomness; in fact, it's fully deterministic. After all, you know the exact rule that transforms the squares for every step!

This is a great example of emergent behavior – computationally unpredictable results from a computationally simple rule. Wolfram goes so far as to say that maybe our entire universe is the product of a very simple rule, the discovery of which would be the final goal of physics.

### Emergence in AI

In a similar vein, the big AI dream is to create a generic Artificial Intelligence that can learn any kind of pattern and make predictions, whether the problem is to recognize faces or understand language or tell you what movie you should watch. Up until recently, each of these problem domains had tens to thousands of specialized researchers creating an algorithm specifically designed to solve that problem and that problem only, using hand-coded features and heuristics applicable to that domain.

But lately, there's been growing interest and measured success in [deep learning](http://deeplearning.net/), the process of letting the AI learn from unlabeled training data and come up with those features and heuristics on its own, thus generalizing its capacity to learn in any problem domain. We've seen powerful techniques from the labs of researchers like [Andrew Ng](http://www.youtube.com/watch?v=5elcmFNRCWk) such as [sparse autoencoders](http://nlp.stanford.edu/~socherr/sparseAutoencoder_2011new.pdf) and [hierarchical neural networks](http://en.wikipedia.org/wiki/Artificial_neural_network) perform well at this task, using mathematical processes like gradient descent to extract patterns from raw sensory input.

I posit that if we continue along this trajectory of generalizing intelligence to learn for itself as much as possible, reducing the need for a specific algorithm directing its "thinking process", we'll end up with a system of connected neurons following a simple but powerful set of rules that ultimately lead to intelligence.

If this is the case, our ultimate goal is to figure out what those simple rules are that result in intelligent behavior. But here we run into a brick wall – if our desired emergent behavior is to be so complex and chaotic that we can't even begin to predict it, how can we possibly find the rules that lead to it?

### Brain-inspired AI

This is where I admire [Jeff Hawkins' approach](http://www.youtube.com/watch?v=qZM9JREjnp4) to taking inspiration from the best proof-of-concept we have that is conveniently located right inside our own heads – the human brain.

At its core, the brain is just a connected set of biological neurons that follow a simple set of rules for how they form and strengthen connections, and communicate electrical signals through the network. I can't imagine that they have a pre-determined, complex algorithm such a stochastic gradient descent controlling their behavior. It's much more likely that it's just these simple rules they follow that lead to the kind of behavior that the more complex algorithms we have are designed to do.

So Hawkins' company [Numenta](http://numenta.org/) is taking the approach of studying how the brain works, trying to see if they can trace the intelligent behavior of the brain back to the simple mechanisms that they're driven by. If we can map this out, we can implement them in software and hardware, and it'll be a much more easy and scalable task than trying to hand-engineer more complex algorithms towards the same goal. I think it's also the most practical approach to try to find the set of simple rules that result in complex intelligence.

### Towards the dream

When I imagine an Artificial Intelligence as powerful as the human mind, I see a system very similar to the brain, with just a bunch of connected neurons and simple rules describing how they interact. With that in mind, I believe that studying the brain and applying what we learn from it will lead us most quickly towards realizing the big AI dream. Instead of spending all our time on highly specialized algorithms to solve one-off problems, we should focus on creating more general systems that can learn in the amazing way our own brains do. And if we get lucky, we'll end up discovering the beautifully simple set of rules that lead to true emergent intelligence.
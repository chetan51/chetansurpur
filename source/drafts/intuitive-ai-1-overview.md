---
layout: draft
title: "Welcome to Artificial Intelligence"
subtitle: "Part 1 of <a href='http://chetansurpur.com/drafts/intuitive-ai-0-intro.html'>Intuitive AI: A Primer</a>"
---

## First off, what is "Intelligence"?

Let's start with a simple exercise. What is this?

{% img http://1.bp.blogspot.com/-elKhJoTaZhE/TsbsRHfROQI/AAAAAAAADmM/WdpQjAmw0sw/s640/duralex-bowl-medium.jpg 400 %}

A bowl, right? Okay, then what about this:

{% img http://www.exguides.org/photoshop-tutorials/images/coffee%20cup.jpg 400 %}

A cup. Sure. But what makes this a cup, and the other thing a bowl?

Well, the most obvious thing difference is that the cup has a handle. Bowls don't have handles.

So we write a computer program that happily counts the number of handles it sees on the object, and says "Cup" if the number of handles is greater than 0, and "Bowl" otherwise. That's gotta work.

…Right?

{% img http://www.lcrcollection.com/cw2/Assets/product_thumb/lob_AG1350_2HANDLE_BOWL.jpg 400 %}

Aw, crap. So I guess "handle" isn't a distinguishing-enough feature of a cup, even though most cups have handles where bowls don't. So there's gotta be something else that allows us to accurately categorize one thing as a cup and one thing as a bowl. Well, the bowls were wide and squat, and the cups were narrow and tall. So our program can check if the object is taller than it is wide, in which case it squeaks "Cup".

Um:

{% img http://www.hardwoodartisans.com/pics/Jen1/RussianOliveBowl9dby734hbest.jpg 400 %}

Argh.

Well in fact, as you probably figured out, it's a whole bunch of things together that make a cup a cup and a bowl a bowl. And it's not always clear which one it is. And it most definitely isn't as simple as stringing together a bunch of feature detectors (handle? tall and narrow? wooden?) that seem to make sense in some cases.

So how do we get a program to accurately decide whether something is a cup or a bowl? Well, how did we do it ourselves? I'm pretty sure you hadn't seen any of those images above, but you knew immediately what objects those were.

Well, we learned from past experience. Over our lifetimes, we've seen many cups and bowls that other people pointed out for us. We extracted patterns and meaning from that data so we can generalize our knowledge and recognize objects we've never seen before.

Our happy, simple-minded program above isn't intelligent; in fact, the only reason it checked for handles or relative dimensions is because we told it to, since we knew from our own experiences that those are decent features to distinguish between cups and bowls.

A truly intelligent program would be able to do what we do (ideally better, and faster than we ever could). It would be able to learn relevant features about cups and bowl on its own directly from the data, and generalize its knowledge of cups and bowls to categorize novel cases.

More formally, **a program is intelligent if its behavior is also a function of relevant data it operates on, rather than just the rules it follows.**

Finally, keep in mind that learning is only one of the things an agent needs to be able to do to exhibit intelligent behavior. The point of this exercise was to show you the difference between any computer program that just blindly follows a set of predefined rules, and one whose behavior is additionally affected and improved by the data it encounters. But in addition to learning, intelligent programs might also need to plan for the future, and make rational decisions depending on context. And all of these things require more sophistication than can be encoded in a fixed set of rules.

## Applications
It's clear that smart programs can be much more useful than dumb ones in contexts that require intelligent behavior. But let's take a look at some practical applications of AI, and see what we can do with it today that otherwise would be straight-up impossible. Some of the cool things that computer programs can do _right now_, all on their own, include:

* [Beating the world's greatest player at chess](http://en.wikipedia.org/wiki/Deep_Blue_%28chess_computer%29)
* [Recognizing objects and faces](http://www.technewsworld.com/story/75483.html)
* [Driving cars in urban traffic for hundreds of miles without any human assistance](http://www.computerworld.com/s/article/9231707/Self_driving_cars_a_reality_for_39_ordinary_people_39_within_5_years_says_Google_39_s_Sergey_Brin)
* [Understand spoken human language, translate it to another language, and recite written text completely artificially](http://www.apple.com/ios/siri/)
* [Organizing almost the entire sum of human knowledge so the relevant information can be accessed by a simple search with a couple of keywords](https://www.google.com/)

And some of the things AI research is actively trying to achieve include:

* 

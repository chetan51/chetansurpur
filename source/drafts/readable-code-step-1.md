---
layout: draft
title: "Make Your Code Infinitely More Readable In One Easy Step"
---

1. Don't abbreviate variable and function names.

This may be obvious to some of you, but there's too much crappy code out there to call this a non-issue. There's something about programming that seems to lead new coders to naming their variables `con` instead of `connection` or `pt` instead of `point`.

It fucking sucks.

Here, let me give you a quick illustration.

``` c
function nPr(int fr) {
    bool f = false;
    int n = fr;

    while (!f) {
         n++;
         f = true; // assume true until proven otherwise

         for (int i = 2; i < n; i++) {
              if (n % i == 0) {
                   f = false;
              }
         }
    }

    return n;
}
```

I'm sorry for raping your brain like that. I would suggest scrolling down a bit to hide that shit-stain from your bleeding eyes.

But what the hell is that function doing?

I know why you might write code like this. It's easier to type. You're lazy, or overworked, or that assignment is due in an hour. But you're not only making the lives of the next poor fucks to read your code a living nightmare (okay, I may be exaggerating a bit), but you're pissing on yourself too.

Why? It's simple – you can only juggle so many variable names in your head at once. As your code gets longer and more complex, you'll start to lose track of what each variable name represents. So if you just name them clearly now, you'll be able to understand your code as you write it.

And finally, here's the same thing with names that weren't defecated from the gaping anus of Satan:

``` c
function nextPrime(var from)
{
    bool found = false;
    int next_prime = from;

    while (!found) {
         next_prime++;
         found = true; // assume true until proven otherwise

         for (int i = 2; i < next_prime; i++) {
              if (next_prime % i == 0) {
                   found = false;
              }
         }
    }

    return next_prime;
}
```

Makes perfect sense now, doesn't it? It's fucking magic!

Remember, you're not coding in English because the computer likes it that way. You're coding in English because humans like it that way. So code in English, not in goddamn "En", cause no one likes to read shit full of abbreviations.
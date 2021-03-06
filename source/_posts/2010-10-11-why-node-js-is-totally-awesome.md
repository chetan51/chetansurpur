---
layout: post
title: Why Node.js Is Totally Awesome
snippet: Or rather, why it's the future of the Internet.
quote_text: "Life isn't about finding yourself. Life is about creating yourself."
quote_author: "George Bernard Shaw"
archived: true
---

<div class="image-and-caption">
    <img src="{{root_url}}/images/blog/2010/10/node-logo.png" title="From http://nodejs.org/" alt="Node.js logo">
</div>

Three reasons: speed, easability, and reusability. And that's what will drive the next generation of web apps and services.

In one compact list, here is everything that makes Node.js really damn exciting.

* **It's a server-side JavaScript framework.** That means the same type of code that powers awesome Ajax applications like Gmail will now power its servers, too. Code reuse FTW!
* **It's driven by asynchronous design.** That means that it doesn't have to wait for slow file I/O or database operations to continue processing, which makes it really damn fast (by that I mean faster than most other popular server languages / platforms). It also means that it can handle millions of concurrent connections at once.
* **It makes real-time applications a walk in the park.** No longer do you have to bother with low-level sockets and protocols. You can make a Comet-driven real-time chat application in the same time you would have made a simple blog in PHP or a birthday cake with a ready-made mix.

### Coyote meets Roadrunner ###

Okay, let's talk speed. How fast is Node compared to the alternatives?

From the [creator's presentation](http://drop.io/dpqbat2/asset/talk-final-pdf),

> 100 concurrent clients
> 1 megabyte response
>
    node      822 req/sec
    nginx     708
    thin      85
    mongrel   4
>
> (more is better)

Seeing as nginx is the current heart-throb of the web developer's server platforms (if you haven't heard of it, just know that it blows Apache out of the water), Node claims high score by beating it.

<div class="image-and-caption">
    <img src="{{root_url}}/images/blog/2010/10/roadrunner.jpg" title="From http://victoriasealsbaseball.blogspot.com/2010/08/st-george-roadrunners-series-preview.html" alt="Roadrunner cartoon">
    <em>Beep, beep, motherfucker.</em>
</div>

### JavaScript on the server? What is this witchcraft? ###

For those of you geeks who don't live in caves, skip to the next section. For every one else (noobs, I'm talking to you too), keep reading.

Okay, you know how server-side code is usually written in PHP, or Python, or (sigh) .NET? And browser-side code is usually written in JavaScript? Well, as it turns out, JavaScript is pretty awesome, and getting awesomer by the day. So some clever chap thought that it might be cool to write server-side code in JavaScript too, and that's how server-side JavaScript was born.

It also turns out that the current standard JavaScript interpreter V8 (by Google, thank the Lord for them) is blazing fast, and makes JavaScript on the server around three times faster than Python 3 and around ten times faster than PHP.

But the real awesome thing about JavaScript on the server is that you can use the same code that you use in the browser (for example, form validation) in your server too. And, with a standard language like JavaScript being used in every level on the web, more libraries and plugins are being made every day so you don't have to make your own session management system, or static file server, or user access system. You can get a solid web app ready to be deployed in half the time, and have more time for your kids, or friends, or WoW addiction, or whatever.

<div class="image-and-caption">
    <img src="{{root_url}}/images/blog/2010/10/WoW.jpg" title="From http://boards.babyzone.com/video-games-hot-for-me-t13365648.html" alt="Hot World of Warcraft girl">
    <em>She wants you to come back and play with her.</em>
</div>

### Asynchronous is the new black ###

What's a really common thing to do in a web application? Database access, of course. Too bad database I/O is one of the slowest things a web app has to deal with. So if you have:

    data = readFromDatabase();
    printData(data);

    doSomethingUnrelated();

`doSomethingUnrelated` is gonna have to wait for the slow `readFromDatabase` to finish in a normal language like PHP. And that's where asynchronous JavaScript comes in.

    readFromDatabase(function(data) {
        printData(data);
    })

    doSomethingUnrelated();

Now, `doSomethingUnrelated` is gonna be called immediately after `readFromDatabase` blunders off to do its work, and the function callback given to it will be executed to print the data only when it's done reading from the database.

How brilliant is that? Now, there is no blocking of code, no wastage of CPU cycles, and everything runs in parallel.

Another cool consequence of everything in Node being asynchronous is that all of Node runs on just one thread, and yet can handle millions of concurrent connections. Suck on that, PHP!

### Middleware is a shitty name, but a sick concept ###

Since JavaScript is such a pervasive language, putting it on the server has only increased the influx of modules, libraries and plugins that you can use for common functionality. That's another great thing about Node.js - there are so many different kinds of "middleware" that you can just plug and play instead of reinventing the wheel.

Want to create a clone of [FML](http://www.fmylife.com/), complete with user-authentication, comments, and the power to destroy any semblance of concentration among innocent college kids during midterm season? Just throw together a few Node.js modules from any of the [hundreds](http://github.com/ry/node/wiki/modules) on its Github wiki page, and you got yourself a nice time-killer.

<div class="image-and-caption">
    <img src="{{root_url}}/images/blog/2010/10/legos.jpg" title="From http://www.geekologie.com/2007/06/lego_sculptures.php" alt="Lego sculpture">
    <em>It's like Legos for web apps. What could be better?</em>
</div>

### Forget about those goddamn sockets ###

Node.js makes it easy to implement real-time applications and network services. It's as easy to deal with low-level protocols that you'd normally need to fuss over sockets for as it is to work with plain HTTP. Focus on your data, not on how you move it around.

### Here's an example of a Node.js app that will blow your mind ###

Just to give you a demonstration of the brilliance that is Node, take a look at [Hummingbird](http://projects.nuttnet.net/hummingbird/).

From their website,

> Hummingbird lets you see how visitors are interacting with your website in real time.
>
> And by “real time” we don’t mean it refreshes every 5 minutes—WebSockets enable Hummingbird to update 20 times per second.

### Get your hands dirty ###

Head on over to the [official website](http://nodejs.org/) for Node, and get crackin'. It's still a baby project, so it's not ready for commercial-scale applications yet, but it would be an excellent fit for that new pet project you're thinking of starting.

Welcome to the future of web development.

_Edit 1: Updated post with more accurate information on speed of V8 compared to Python and PHP._

_Edit 2: Thanks to all the excellent feedback that has brought to light my bad habit of making too-bold claims, I've corrected Node's claim to speed to something more verifiable. Sorry about that everyone!_

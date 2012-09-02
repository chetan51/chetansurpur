---
layout: post
title: Sidestep
snippet: Automatically secure your Internet connection in unprotected wireless networks
---

<div class="full-pane">
    <div class="stack">
        <img src="{{root_url}}/images/projects/sidestep/logo.png" title="Sidestep Logo" alt="Sidestep Logo">
    </div>
    <div class="stack">
        <div class="stack">
            <div>
                <a href="https://github.com/downloads/chetan51/sidestep/Sidestep.zip" class="button download-button">Download &darr;</a>
            </div>
            <div>
                <em>Mac OS X 10.5+ required</em>
            </div>
        </div>
        <div class="stack">
            <a href="https://github.com/chetan51/sidestep" class="button">Source &rarr;</a>
        </div>
    </div>
</div>

Sidestep is an open-source application for Mac OS X that sits quietly in the background, protecting your security and privacy as you browse the web.

### Say Hello to Sidestep ###

#### The problem ####

When you connect to the Internet through an unprotected wireless network, such as at a coffeeshop or an airport, where you don't have to enter a security key, you're putting yourself at risk.

Attackers connected to the same network can easily intercept your unencrypted traffic and log in as you to services such as Facebook, Amazon, and LinkedIn.

Try [this simple Firefox add-on](http://codebutler.com/firesheep) to see for yourself how serious the problem is and how easy it is for your privacy and security to be compromised.

### The solution ###

When Sidestep detects you connecting to an unprotected wireless network, it automatically encrypts all of your Internet traffic and reroutes it through a secure connection to a server of your choosing, which acts as your Internet proxy. And it does all this in the background so that you don't even notice it.

**With Sidestep enabled, no one can eavesdrop on your traffic and impersonate you or see what you're seeing as you browse the web.**

### How does it work? ###

The first time you run Sidestep, you give it the details of the proxy server that you want it to use to securely reroute your Internet traffic through. **And that's it.**

Now, every time you connect to the Internet, Sidestep checks to see if your connection is already secured by WPA wireless security - if it is, Sidestep does nothing. After all, there's no point in rerouting your connection and using up bandwidth on your proxy server if your connection is already secure. However, if your wireless connection is open and unprotected, Sidestep connects to your proxy server using SSH and reroutes all your traffic through it. This technology is called an [SSH Tunnel Proxy](http://paulstamatiou.com/how-to-surf-securely-with-ssh-tunnel).

#### In Geekspeak ####

When you connect to an insecure network, Sidestep opens an SSH tunnel with the proxy server, and then sets the Mac OS X system-wide SOCKS proxy to use this SSH connection. And since most Mac applications (including browsers) use this system-wide proxy to connect to the Internet through, they will all end up using the encrypted SSH tunnel.

### Fighting Firesheep with fire ###

[Firesheep](http://codebutler.com/firesheep), the Firefox add-on mentioned above, made a huge wave in the computer security world when it was released. Using it, anyone with Firefox can sit in a coffeeshop and click one button to hijack the browsing sessions of other users around them.

Sidestep is the easiest solution to the problem made mainstream by Firesheep. Set it up once, and never worry about attacks like Firesheep ever again.

<h3 id="proxy-servers">Proxy Servers 101</h3>

#### What is a proxy server? ####

A proxy server is just another computer somewhere else, sitting in a more secure Internet connection that the one you're in. It can be a server that hosts your website, or even just a computer you have sitting at home that's always connected to the Internet.

#### How can I get one? #####

*   Use a server you already have that hosts your website

    If you have a website hosted on a server somewhere, you can just use that server as a proxy server. Give Sidestep the details you use to connect to your server through SSH, and let it run. Note that browsing the Internet while connected to this server through Sidestep will use up bandwidth on the server, so watch out if you have bandwidth limits on your website server.

*   Turn an always-connected computer you have at home into a proxy server

    Follow [this excellent Lifehacker guide](http://lifehacker.com/205090/geek-to-live--set-up-a-personal-home-ssh-server). This method requires a little more trickery on your part, though, so be ready to get your hands a little dirty.

*   Use an Amazon EC2 instance as a proxy server for around 50 cents a month

    Justin Morehouse has written a great post on how to [use an Amazon EC2 instance as your proxy server with Sidestep](http://www.stratumsecurity.com/blog/2010/12/03/shearing-firesheep-with-the-cloud/). It's safer than the option below, but it will cost you just a tad bit more (though $0.50 per month is a fair price for your Internet security).

*   Donate $1 or more and get access to one from [Silence Is Defeat](http://silenceisdefeat.com/)

    This is the easiest way, but might be less secure than the other options. Go to [Silence Is Defeat](http://silenceisdefeat.com/) and sign up for SSH access to one of their servers by donating $1 or more. This method is less secure, though, since you're trusting their servers to keep your data private. Shouldn't be too much of a problem, though, since many use their servers as Internet proxies.

    Also, if you go down this path, make sure you don't abuse their (almost) free service by torrenting or continuously transferring large amounts of data while connected to their servers.

    **Note: SSH access to Silence Is Defeat only works on the domain _ssh.silenceisdefeat.com_, so make sure to use that as the proxy server hostname for Sidestep.**

### Passwordless logins ###

A quick note for advanced users: When you connect to a proxy server, you'll need to enter your password for the server. Sidestep gives you the option to save this password to your Keychain. If you're so inclined, you can also [set up RSA keys](http://burnz.wordpress.com/2007/10/17/sshssh2-password-less-authentication/) on the server for even more secure passwordless logins.

### Sidestep and VPN, sitting in a tree ###

You can also use Sidestep to automatically enable VPN connections to secure your traffic as you connect to wireless networks. Sidestep supports native VPN connections (PPTP, L2TP over IPSec and Cisco).

### If you love Sidestep, give back! ###

#### Get hacking ####

Sidestep is open-source, so you can help make it better. Grab the source code from [GitHub](http://github.com/chetan51/sidestep), and start tinkering.

### FAQ ###

*   How come I'm seeing "Proxy Server" errors in my web browser?
    
    Try opening and then closing Sidestep. It might have changed your proxy settings and then been forcibly closed before it could reset the settings.

### Contributors ###

A big thank you to you guys who have made and are working on making Sidestep better:

*   [Steve Warren](https://github.com/usernumber9)

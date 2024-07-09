---
layout: default
title:  Bluetooth
author: Joshua Duross
permalink: /programming/bluetooth.html
nav_order: 3
---

# Bluetooth

## Prologue

Bluetooth is a complicated piece of technology, and even with me working with it quite a bit throughout the course of the last year, I feel that I've still barely even cracked the surface with how much there is to know about it. Throughout this article, I will provide mainly just the basics for what you may need when using in the context of the scouting app, but will try my best to provide links to things for further learning. Note that these are not manditory to read, but optional, for if you may need to edit the underlying code or just want to learn more.

## Our API

### Background Info

To simplify the process of dealing with Bluetooth for our scouting purposes, we have created a simple wrapper on top of the Windows Bluetooth API. The main file, at least on the main computer, is `bluetooth.hpp`. This file handles many things such as initializing and connecting sockets, and may get condensed in the future. For now, though, the main function you will have to worry about is `handleReadyConnections()`, and even more specifically, the part that says `// ___ read from all sockets connected ___` 
<sup>
(If you would like to go more in depth, you can continue on to the 
<a href="#win-api"> Windows API </a>
 section)
</sup>
. In *this* section, we create a `bthSocketHandler` object, which is what we should be working with in order to get data from the tablets. There are a couple things to note about this object:
- The constructor requires a `bt::SOCKET` struct (a struct is very similar to an object, at least in C++). This is supplied by functions in the `bluetooth.hpp` class.
- there are also a couple options that can be set to your preference:
    - the `setLaunchPolicy()` function takes a `bt::SOCKETCALLTYPE` enum, the options being *bt::CALLTYPE\_ASYNCHRONOUS*, *bt::CALLTYPE\_DEFERRED*, and *bt::CALLTYPE\_DEFAULT*. As Bluetooth is a relatively expensive operation, this class allows bluetooth to be called in two different states: async and deferred. when this option is set to *bt::CALLTYPE\_ASYNCHRONOUS*, code will be run immediately as it is called, while *bt::CALLTYPE\_DEFERRED* will *defer* the call until `.get()` is called (which will be explained further later). *bt::CALLTYPE\_DEFAULT* lets the OS choose whichever it prefers in the current moment.

### Using the Object

Data is obtained from the socket using the `readTabletData()` function in the `bthSocketHandler` class, which, instead of just returning the data, returns a [pointer](https://www.geeksforgeeks.org/cpp-pointers/) to a `bt::READRES` struct. This struct contains a couple things:
- A `bt::TRANSACTIONTYPE`, which is an enum describing what type of data is being sent.
- An `std::future` which contains a vector of chars, which is where the data is stored.
- A bool, `reportedSuccess`, which is true or false based on whether getting the data succeded. Calling this before calling `.get()` ***WILL*** cause undefined behaviour.
- a function, `isReady()`, which, when in async mode, tells you if the funcion has finished. If the function was called using the deferred option, this will always return true.

<h2 id="win-api">Windows API</h2>
Though it has been the goal to keep things as simple and surface-level to use, there are going to be things that you will need the Windows *Winsock* API for, especially if you need to edit anything about these two classes. When working with winsock, the [documentation link](https://learn.microsoft.com/en-us/windows/win32/winsock/getting-started-with-winsock) (check the search bar on the left), and especially the [winsock error codes page](https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-error-codes-2) will be your friends.
---
layout: default
title: How to write an article
author: Joshua Duross
permalink: /misc/howto.html
nav_exclude: true
---

# How to write an article

Writing an article is fairly straightforward, but there are a couple things that you need to know:

All articles must start with something called `front matter`, which describes to our site how the page should be categorized. For our site, it should look something like this:
```
    ---
    layout: default
    title:  Bluetooth
    author: Joshua Duross
    permalink: /programming/bluetooth.html
    nav_order: 2
    ---
```
It's pretty simple, and most of it is really just copy and paste. It starts and ends with 3 hyphens "---" and has some tags describing the site and how it should look.

Here's a description of those tags:
- `layout`: tells the site which layout to use. As of now, there is only **default**, but more may be added in the future.
- `title`: The short-version title of the Documentation Page. This is only shown to the user at the top "breadcrumb" bar, but most importantly used in the **search** functionality (So keep it short and sweet!)
- `author`: The First and Last name of the author(s) of the page. Currently it is only used in the search funcionality, but may be used for other purposes later. If there are multiple authors, seperate the names with commas.
- `permalink`: The link (at the top of the site) at which this file is displayed. This one is a bit more complicated, but shouldn't be too bad. It is important to note:
    - This is the only ***NECESSARY*** tag, as without it the site will not recognize your page.
    - This should probably be very similar to something like in the example, ex: `/[subsystem-name]/[article-name].html`.
    - If you need any help, ask one of us programmers, we should be able to help!
- `nav_order`: The last one that most people will need to use, tells the site which order to put the articles in. For example: For this example article, It would be the second article shown under the **Programming** tab.

See [this link](/misc/allTags.html) for all other possible tags

The rest of the page after the front matter is written in markdown, which is a text format that allows for some ways to *spice up* your text. (Fun fact: If you've **bolded** or used *italics* in Discord or Ryver, you were using markdown syntax!). Anyway, it's not difficult, and you can check out [The Basic Markdown Syntax Guide](https://markdownguide.offshoot.io/basic-syntax/) for help with the basic syntax, or [AdvancedHowTo](/misc/advancedHowto.html) if you think you're ready for something more advanced.





<h2 style="color:magenta"> Good luck! </h2>
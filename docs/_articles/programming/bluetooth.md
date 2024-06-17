---
layout: default
title:  Bluetooth
nav_order: 2
permalink: /programming/bluetooth
---

# Bluetooth

## [Windows API](https://learn.microsoft.com/en-us/windows/win32/winsock/windows-sockets-start-page-2)


## Our API


{% for article in site.articles -%}
    
    {{article.content | strip_html | strip_newlines | jsonify | markdownify}}

{%- endfor -%}
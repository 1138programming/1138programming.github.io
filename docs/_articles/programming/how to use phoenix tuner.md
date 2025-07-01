---
layout: default
title:  How to use Phoenix Tuner
author: Thomas Evans
permalink: /programming/How_to_use_Phoenix_Tuner.html
nav_order: 7
---

# How to use Phoenix Tuner

Phoenix Tuner is used to 
<ul>
    <li><a href="#Conf"> Configure, Id, and Update CTRE deveices </a></li>
    <li><a href="#Signal"> Retrieve Signal Data </a></li>
    <li><a href="#Tuner"> Generate Tuner Files </a></li>
           
</ul>

## Connecting to the robot

Before you can do anything you need to connect to a the Phoenix Diagnostics Server on the Robot. The Phoenix Diagnostics Server is installed on the robot ontroller when you deploy a program. 

To connect use the dropdown/texbox located in the upper left hamburger menu.

![Screenshot of Location of Connection Menu](/images/tuner-x-connecting.png)

The following presets are available to select from

- Driver Station: Retrieves the robot IP address from the Driver Station, if it is open
- roboRIO USB: Sets the IP to <span class ="pre">172.22.11.2<span>
- localhost: Used for Simulations

You can manually type in IP addresses as well.

<h2 id="Conf">Configure, Id, and Update CTRE deveices</h2>

New CTRE Devices must be given an id in order to be accessed by code. 


<h2 id="Signal">Retrieve Signal Data </h2>
<h2 id="Tuner">Generate Tuner Files</h2>
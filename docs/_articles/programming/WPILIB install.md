---
layout: default
title: Install WPILIB (for personal computers)
permalink: /programming/WPILIB_install.html
nav_order: 5
author: Brighton Gannaway
---
# Installing WPILIB

<span style="color:red"><b>A guide for personal computers only: For programming laptops given out, go to the laptop hospital</b></span>

WPILIB is the main library programming uses for building programs for the robot. When the provided programming laptops
are slow it can be helpful to download it on a computer of your own. This tutorial follows that process of instillation

## Prerequisites
<hr>

Some prerequisites must be met in order to install WPILIB with ease

### Supported systems and architectures

<ul>
    <li>Windows 10 & 11, 64 bit only. 32 bit and Arm are not supported</li>
    <li>Ubuntu 22.04 & 24.04, 64 bit. Other Linux distributions with glibc >= 2.34 may work, but are unsupported</li>
    <li>macOS 13.3 or higher, both Intel and Arm</li>
</ul>

## Download WPILIB Installer
<hr>

If you have met all the perquisites, congrats, you are now ready to download WPILIB! 👍

[Download WPILIB here](https://packages.wpilib.workers.dev/installer/v2025.2.1/Win64/WPILib_Windows-2025.2.1.iso)

[Install from github (optional)](https://github.com/wpilibsuite/allwpilib/releases/latest/)

### Extract Installer

Once you have downloaded the WPILIB installer you ust extract the installer to set up WPILIB officially. It is a disk image file `.iso` for **Windows**, `.tar.gz` for **Linux**, and a `DMG` file for macOS

## Open installer
<hr>

### Open installer on Windows

Windows 10+ users can right click on the downloaded disk image and select Mount to open it. Then launch `WPILibInstaller.exe.`

![Screenshot of Mount in Window's file manager](https://docs.wpilib.org/en/stable/_images/extract-windows-10.webp)

You can use 7-zip to extract the disk image by right-clicking, selecting `7-Zip` and selecting Extract to…. you may need to select Show more options at the bottom of the context menu.

![Screenshot of extracting 7-zip file](https://docs.wpilib.org/en/stable/_images/extract-windows-7.webp)

### Open installer on macOS

macOS users can double click on the downloaded `dmg` and then select `WPILibInstaller` to launch the application.

![Screenshot of d m g file on the installer](https://docs.wpilib.org/en/stable/_images/macos-launch.webp)

## Run Installer
<hr>

Upon opening the installer, press `start` in the bottom left corner

![Screenshot of installer upon opening](https://docs.wpilib.org/en/stable/_images/installer-start.webp)
![Screenshot of installer asking for installation options](https://docs.wpilib.org/en/stable/_images/installer-options.webp)

There are 2 options upon starting instillation, select `install for this user` and one of the following options:

<ul>
    <li> Tools Only installs just the WPILib tools (Pathweaver, Shuffleboard, RobotBuilder, SysId, Glass, and OutlineViewer) and JDK.</li>
    <li> Everything installs the full development environment (VS Code, extensions, all dependencies), WPILib tools, and JDK. (Recommended)</li>
</ul>

![Screenshot of VSCode options](https://docs.wpilib.org/en/stable/_images/installer-vscode-download.webp)
The above showcases options fro the downloading of VScode select one:

<ul>
    <li> Download for this computer only
        <ul>
            <li> This downloads VS Code only for the current platform. (smallest) </li>
        </ul>
    </li>
    <li> Skip and don’t use VS Code
        <ul>
            <li> Skips installing VS Code. Useful for advanced installations or configurations. (Not recommended) </li>
        </ul>
    </li>
    <li> Select existing VS Code archive for offline install on this computer
        <ul>
            <li> Selecting this option will bring up a prompt allowing you to select a pre-existing zip file of VS Code that has been downloaded by the installer   previously. This option does not let you select an already installed copy of VS Code on your machine. </li>
        </ul>
    </li>
    <li> Create VS Code archives to share with other computers/OSes for offline install
        <ul>
            <li> This option downloads and saves a copy of VS Code for all platforms, which is useful for sharing the copy of the installer. </li>
        </ul>
    </li>
</ul>

Select `Download for this computer only`, WPILIB will begin downloading (size ~150MB). Once finished select `next`.

![Downloading](https://docs.wpilib.org/en/stable/_images/installer-installing.webp)

Once complete, you should be presented with an image that's similar to the one below

![Completed instillation screen](https://docs.wpilib.org/en/stable/_images/installer-finish.webp)

Congrats! you have successfully installed WPILIB. Press `Finish` to complete instillation

## Post Instillation and Information
<hr>

### Post instillation fro macOS

Drag the VS Code application to the dock. Eject WPILibInstaller image from the desktop. **Do not move it elsewhere** as this may cause the application to not work

### What is installed

<ul>
    <li>Visual Studio Code - WPILIB version</li>
    <li>C++ compiler</li>
    <li>Gradle</li>
    <li>Java JDK/JRE</li>
    <li>WPILIB tools -  SmartDashboard, Shuffleboard, RobotBuilder, OutlineViewer, PathWeaver, Glass, SysId, Data Log Tool, roboRIO Team Number Setter, AdvantageScope, Elastic, WPIcal</li>
    <li>WPILIB dependencies</li>
    <li>VS code extensions</li>
    <li>Documentation</li>
</ul>




























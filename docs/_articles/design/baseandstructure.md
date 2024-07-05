---
layout: default
title: Bases
author: Joshua Guerra
permalink: /design/Bases.html
nav_order: 2
---

# **Bases**

The base is arguably the most important system for a robot for the simple reason that it allows you to move around the field. Every other system is virtually useless if it cannot move. 
But before we go into the actual drive bases, it will be useful to know the different types of wheels teams use for these bases. Below is a list of different types of wheels commonly used on the base.

## *Wheels*
### Traction Wheel
* Very popular choice (it is the main wheel our team uses)
* Made up of two main components
* Metal hub (gives the solidity and shape of the wheel)
* Rubber tread (wraps around the hub to create traction)
* To assemble, hubs have threaded holes. You drill holes in the tread, and then use low profile screws to connect the tread to the hub

**Pros:**
* Amazing traction (as seen in the name)
* Relatively light, as most hubs have large holes that remove a lot of material
* Comes in many sizes
* Reusable hub

**Cons:**
* Constant maintenance
* Tread needs to be replaced very often, and it can be very annoying to screw them back in (especially during competition)
* Expensive
* 4-inch hubs cost around $30 on WCP, and 10 feet of 1.5-inch tread costs around $43
* Creating new tread can be very difficult without a template
* Cannot strafe on certain drives

![](/images/Traction.png)

Used traction wheels on a robot made by 111

### Omni Wheel
* Has smaller, perpendicular wheels (called rollers) that allow the wheel to strafe without turning
* Commonly used in the back and/or front of drives with skid steering, allowing for easier turning
* Holonomic drives require the usage of these wheels

**Pros:**
* Amazing turning
* Does not wear out very quickly, meaning you won’t need to replace it very often

**Cons:**
* No traction due to the ability to turn so well
* Heavy
* Expensive
* Costs can range from $20 to $50
* Can get pieces of carpet stuck in the rollers

![](/images/Omni.png)

Omni wheel from REV Robotics
### Mecanum Wheel
* These are very similar to omni wheels, the only difference being that the rollers are at a 45-degree angle
* Extremely unpopular wheel choice
* More useful/popular in intakes because of the way the angled rollers guide the game piece
* Mainly only seen in full-on mecanum drives

**Pros:**
* A great and simple way to get strafing on your robot

**Cons:**
* No traction due to the ability to strafe
* Heavy
* Expensive
* One of the most expensive wheels, ranging from $50 to over $100
* Can get pieces of carpet stuck in the rollers

![](/images/Mechan.png)

Mecanum wheel from AndyMark

### Colson Wheel
* Extremely popular wheel
* Also used in order systems, like flywheels
* Solid, one part wheel (meaning nothing needs to be assembled)

**Pros:** 
* Good traction
* Low maintenance because all you need to do it take it off and put a new one on
* Strong and firm, meaning there is extremely little compliance
* Does not wear out very quickly

**Cons:**
* Heavy
* Somewhat Expensive
* Prices CAN range up to $40, but in general, colsons are actually cheaper than many wheels

![](/images/Colson.png)

Colson wheel from VEX.com

### Hi-Grip Wheel
* Proven to be effective in the kit bot
* Similar to traction wheels, only without the need for assembly
* Has many durometers available for the outer tread

**Pros:**
* Great traction
* Light, as it is only made up of the tread and the hub, which has large holes to take away material
* Cheap
* Prices are usually only around $10, a little more for larger wheels

**Cons:**
* Weak hubs (plastic)
* Tread usually wears out quickly
* Thin, meaning that it might not fair too well against defense

Hi-grip wheel from AndyMark, the best place to buy these wheels

![](/images/Hi-grip.png)

There are different types of bases that give teams different advantages. Below is a list of different types of bases and their advantages and disadvantages. 

## *The Actual Drives*
### Tank Drive
* Most common type of drive train in FRC
* 2 parallel sets of wheels on opposite sides
* Skid steering, each side being independently powered
* Usually uses around 2-6 motors
* Either a motor for each wheel, or connecting the directly powered wheel to a dead axle (which is called West Coast Drive)
* Uses mostly traction wheels
* Can put omni wheels in the front or back to increase mobility

**Pros:**
* Easy to build
* Easy to drive
* Simple programming
* Powerful in direct contact
* Relatively light, especially with less motors

**Cons:**
* Low agility compared to other drives
* Cannot strafe

![](/images/tank-drive.png)

A West Coast Drive model made by 1719

### Mecanum Drive
* Similar layout to tank; uses 2 parallel sets of wheels on opposite sides
* Skid steering, but each wheel must be independently powered
* Can also strafe
* Uses mecanum wheels
* By using the 45-degree angled rollers, different combinations of wheel rotations allow the robot to move like a tank, but also strafe

**Pros:**
* Relatively easy to build
* Only difference from tank being that orientation of wheels is important
* Can strafe, so very agile

**Cons:**
* More difficult to program (the different combinations of wheel rotations)
* Terrible pushing power
* Difficult to drive
* Set number of motors
* Expensive wheels

![](/images/mech-drive.png)

A mecanum drive model made by 1640

### Slide Drive/H Drive
* Again, very similar to tank drive
    * However, all wheels must be omni wheels
    * There is a perpendicular wheel in the middle
* Skid steering
* Can strafe (using the perpendicular wheel)

**Pros:**
* Relatively easy to build
* Good agility
* Easy to drive
* Relatively easy to program

**Cons:**
* Low pushing power
* Must have perpendicular wheel in the center of gravity
* Difficult to design weight distribution for the wheel

![](/images/slide-drive.png)

A slide drive with two perpendicular wheels made by 4557

### Critter Drives (Butterfly and Grasshopper)
- Again, parallel sets of wheels on opposite sides
- Uses pneumatics to switch from omni wheels to traction wheels
    - Butterfly has this for all four wheels while grasshopper only has it for the back two
- Extra Note: There are several other types of drive designs that stem from the butterfly drive, such as Octocanum (replacing omni wheels with mechanum) and Butterslide (mixing butterfly with slide)

**Pros:**
- Amazing versatility (omni and traction)
- Powerful
- Relatively simple to program

**Cons:**
- Still not as agile as other drives (for the same reason as tank)
- Somewhat difficult to design

![](/images/critter-drive.png)

A butterfly drive model made by 4183

### Holonomic: X - Drive/Kiwi Drive
* Puts wheels at angles
    * X: 4 wheels at 45-degree angles
    * Kiwi: 3 wheels at 120-degree angles
* A motor for each wheel, meaning each wheel drives independently
* Technically no “front”
* Can strafe in any direction

**Pros:**
* Simple build
* Amazing agility
* Only 3 or 4 motors
* Light

**Cons:**
* Difficult programming
* Terrible pushing power
* Difficult to get used to driving

![](/images/holonomic-drive.png)

Example of a holonomic X - drive made by 3397

### Swerve Drive
* Arguably the best drive
* Wheels rotate on vertical axis to change direction
* Usually uses traction wheels
    * With on wheel in each corner
* Requires sensors to know orientation of wheels

**Pros:**
* Amazing agility
* Very powerful
* Can move in all directions without turning

**Cons:**
* Most difficult drive to program
* Difficult to build/design (though many teams buy them)
* 8 motors (2 per wheel, one for driving, one for steering)
* Heavy
* Difficult to get used to driving

![](/images/swerve-drive.png)

A stripped-down model of a swerve module made by 346. There would be one of these modules in each corner of the robot.

[ND Subison Robotics](https://www.ndsubisonrobotics.org/uploads/5/9/8/8/59888285/frc_drivetrains.pdf)

[Team 4904 example](https://docs.team4909.org/reference/robots/drivetrains/)


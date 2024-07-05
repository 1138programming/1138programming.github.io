---
layout: default
title:  Launchers
author: Breanna Sanders
permalink: /design/launchers.html
nav_order: 1
---

# Launchers:

## Flywheel 
* To increase the inertia of the system( the force acted upon and item) ->need to increase the speed and/or mass of the wheel.
* When a flywheel shoots -> it slows down -> it does not behave the same way as you may have intended or inaccurate
    * Can be solved by adding inertia to the system or pick the right motor () for the job.
    * However by adding speed it may not make the shooter perform in the intended way and weight is not always the best to add with the 120 weight limit -> could add another wheel that is much faster to increase inertia and keep performance
* Mass at the edge of a wheel gives more inertia than towards the axis of rotation
* Hex bearings: have a tendency to not be as sturdy for fast speed forces or else use https://www.mcmaster.com/6138K15/  
* Thunderhex or round bearings: have better stabillity 6
    * For more information on thunderhex see the following
https://www.chiefdelphi.com/t/thunderhex-bearing-explained/139200 
https://www.vexrobotics.com/thunderhexstock.html 
https://www.youtube.com/watch?v=brvcMzULraw 


	
Contacts item -> needs some time to catch up to speed -> add more wheels so it has contact for longer -> Flywheel shoots -> some energy goes to the object shot -> To stop, increase the motor power or the momentum (mass) (not always needed though, especially for small distances)

Compression: is the amount something is “squished” -> try designing for adistablility since it will require lots of testing. Must find the sweet spot. 
Increasing the amount of squish increases the acceleration that an object has from the flywheel.

To change accuracy: 
* Add backspin by adding another roller or get rid of it all together 
Look into when it lands how does it bounce. 



### Single Flywheel Shooter:
* Shooter and shooter hood(to compress it)
* Usually the most compact and easiest to make into a turret

### Dual flywheel shooter: 
* 2 wheels that can be at different speeds and angles depending on the task(for example they could be at different angles to put some spin on a football) 
* Is best to link the two wheels with belts, chain, or gears

### Now based off of the type of game objects

| Type  | Description | Examples | 
| :------------: |:------------: | :------------: |
| Small Balls | Typically lighter and more of them to score -> they can shoot faster -> need faster flywheel. However with it being faster itis hard to make sure it is always accurate and the speed draws lots of power from the rest of the robot. | Some examples of how people have used this:  [Ex1](https://www.youtube.com/watch?v=ewTCvLp5EUo&list=PLYcmd5xMhOBDhPaTkMiOeN19eW2zIP0fd&index=5), [Ex2](https://www.youtube.com/watch?v=rBShh6KqLoo&list=PLYcmd5xMhOBDhPaTkMiOeN19eW2zIP0fd&index=4),  [Ex3](https://www.youtube.com/watch?v=x6CtdZ91qzI&list=PLYcmd5xMhOBDhPaTkMiOeN19eW2zIP0fd&index=7),  These are good example of an accurate catapults.  |
| Medium Balls | Slower fire rates than small balls. Design will also depend on possession limits. | [Ex1](https://www.youtube.com/watch?v=sWHwDfpeYjo&list=PLYcmd5xMhOBDZdPo84yzfFWGIte8pbuc2&index=6): This is a good example of an accurate catapult as well. [Ex2](https://www.youtube.com/watch?v=nlOlae2ljKI&list=PLYcmd5xMhOBDZdPo84yzfFWGIte8pbuc2&index=8): This takes a flywheel approach for the same game. 
| Large Balls | Requires mechanisms much larger. Can integrate a flywheel or catapult into it but it depends on where it needs to go and the size requirements. | [Ex1](https://www.youtube.com/watch?v=PtRewwr59d8&list=PLYcmd5xMhOBB2VQXEHGTypEkRGnH2fT2v&index=5), [Ex2](https://www.youtube.com/watch?v=cKDmHCTDQW8&list=PLYcmd5xMhOBB2VQXEHGTypEkRGnH2fT2v&index=15): This one has slightly smaller balls and they were able to go directly through the robot. |
Cubes | Most commonly picked and placed by robots, sometimes have been shot.  | [Ex1](https://www.youtube.com/watch?v=bFiySP0L6o4&list=PLYcmd5xMhOBD7iKq9rhOJzx0KrRymS0ha&index=4), [Ex2](https://www.youtube.com/watch?v=bFiySP0L6o4&list=PLYcmd5xMhOBD7iKq9rhOJzx0KrRymS0ha&index=4), [Ex3](https://www.youtube.com/watch?v=pBt4QQi2BjM&list=PLYcmd5xMhOBD7iKq9rhOJzx0KrRymS0ha&index=2) |
Frisbes/ Rings | Depending on the game sometimes they need some spin or they just need vertical compression. | [Ex1](https://www.youtube.com/watch?v=DojyJ9bZ4fk&list=PLYcmd5xMhOBCQ0h6-llhqE80ihumFT8Og&index=1), [Ex2](https://www.youtube.com/watch?v=gEPNd2pTjdA) This one is from the 2024 game where the game pieces were manipulated much more. |




## Catapult
Good for objects that do not rely on accuracy or compression, and are irregular shaped objects that are not possible with flywheel. 

Pneumatics
Launches things using pneumatic cylinders
Can be aided with springs or elastics to increase the force of the launch.
Pressure changes = accuracy changes

### Slip Gear Catapults:
Gear missing teeth meshes with a gear with all the teeth and an arm attached 
It keeps going and springs when it hits that open gear part.
However it could damage the gear depending on the load. 




### Drop Cam Catapult
https://www.technologystudent.com/cams/cam10.htm 
A mechanism with that launches when a certain point is reached on the cam.
This is not very popular but this system my be useful to incorporate into a design.
Look into math and how to calculate a cam (robert)

### Choo-choo catapult
Retracts using some sort of elastic and a spinning thing doing a choo choo movement. 


## Linear punchers (can only go in one direction)
### Spring Loaded Linear Puncher
Using a pull back mechanism to compress some spring or form of energy to release a mechanism
There are a variety of pull back mechanisms such as
Ball Screw pulling back shooter plate to launch 
Chain pulling back shooter plate to the desired position 
### Pneumatic Linear Punch
Pneumatic actuators push something out of the robot. Here is an example of how it is used: https://www.youtube.com/watch?v=bFiySP0L6o4&t=19s 


Equations of force and energy (Robert)
Robonauts 2014


Elevator puncher robot 2022 4907


## Turrets

Purpose: to be able to rotate a mechanism without moving the drive train. Commonly mounted to shooters or an arm/elevator. Makes the robot very complex, especially if there is a large load at the top. They are not always necessary in order to play competitively but can give a design advantage. They take a lot of time and prototyping in order to build along with fab and programming resources and will make you sacrifice a motor slot in order to pull them. 

### Turret bearing types

| Bearing type | Pros/Cons | Image |
| :----------: | :----------: | :----------: |
| Lazy Susan | Simple and cheap. One large COTS bearing. Usually can support the weight but impacts can cause it to break and separate. Can struggle to support the loading from other mechanisms on the robot. | ![](/images/lasysusan.png) |
Shoulder Bolts with Bearings | Most common. Stacks of bearings of different sizes that are  perpendicular to the metal and the top and bottom are the same size bearing while the middle is slightly smaller. Works well for shooter turrets. Higher part count than lazy susan but offers more flexibility. | Look at hightide cads or things on chief delphi | 
3D Blocks with bearings riding on all surfaces | Similar to the shoulder bolts with bearing but basically has a custom block with bearings on 3 sides of the turret ring(two vertically on top and one horizontally to the side). The blocks are very complex and would have to be CNC. Is better because all bearings are receiving a part of the load. | ![](/images/3dblocks.png) |
Singular X-bearing | It is a bearing that is created with archways that allows for moment and axial loads to be accepted. It is best for mechanisms with large moment loads. Used most commonly for swerve modules. Can be expensive. | ![](/images/singularxbearing.png) |  


‎ 




### Turret drive types

| Name Lightest/weakest -> Strongest/heaviest | Description/Pros/Cons | Images | 
| :----------: | :----------: | :----------: | 
| Belt Driven | Very dependent on the space you have for it and the friction that is on it. Design must consider all of it together and the other systems. Simple if you want it to turn less than 360 -> Can attach to the drive plate with bolts or rivets. Though it will not be able to pass any of the bolts on the belt. If needed to turn more than 360 deg then might have to 3d print a large pulley teeth or find another alternative. Could possibly wear out the belt/pulley | ![](/images/beltdriven.png) | 
Chain Driven | Very large Turret Sprocket would be used along with a smaller sprocket attached to a motor. Make sure to design a tensioner into the turret design. | No Image |
Gear Driven | Most Complex b/c of the very large gear involved. Is the most compact. Possibly the strongest one. External or internal, either on the outside of the gear or the inside of the gear (is more compact but makes it hard to put stuff through). Very heavy. Include how to design turret gears  | ![](/images/geardriven.png) | 




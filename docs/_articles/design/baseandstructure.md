---
layout: default
title: Bases and Structure
author: Joshua Guerra
permalink: /design/BasesandStructure.html
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
Pros
* Amazing traction (as seen in the name)
* Relatively light, as most hubs have large holes that remove a lot of material
* Comes in many sizes
* Reusable hub
Cons
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
Pros
* Amazing turning
* Does not wear out very quickly, meaning you won’t need to replace it very often
Cons
* No traction due to the ability to turn so well
* Heavy
* Expensive
* Costs can range from $20 to $50
* Can get pieces of carpet stuck in the rollers

![](/images/omni.png)

Omni wheel from REV Robotics
### Mecanum Wheel
* These are very similar to omni wheels, the only difference being that the rollers are at a 45-degree angle
* Extremely unpopular wheel choice
* More useful/popular in intakes because of the way the angled rollers guide the game piece
* Mainly only seen in full-on mecanum drives
Pros
* A great and simple way to get strafing on your robot
Cons
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
Pros 
* Good traction
* Low maintenance because all you need to do it take it off and put a new one on
* Strong and firm, meaning there is extremely little compliance
* Does not wear out very quickly
Cons
* Heavy
* Somewhat Expensive
* Prices CAN range up to $40, but in general, colsons are actually cheaper than many wheels

![](/images/Colson.png)

Colson wheel from VEX.com

### Hi-Grip Wheel
* Proven to be effective in the kit bot
* Similar to traction wheels, only without the need for assembly
* Has many durometers available for the outer tread
Pros
* Great traction
* Light, as it is only made up of the tread and the hub, which has large holes to take away material
* Cheap
* Prices are usually only around $10, a little more for larger wheels
Cons
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
Pros
* Easy to build
* Easy to drive
* Simple programming
* Powerful in direct contact
* Relatively light, especially with less motors
Cons
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
Pros
* Relatively easy to build
* Only difference from tank being that orientation of wheels is important
* Can strafe, so very agile
Cons
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
Pros
* Relatively easy to build
* Good agility
* Easy to drive
* Relatively easy to program
Cons
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
Pros
- Amazing versatility (omni and traction)
- Powerful
- Relatively simple to program
Cons
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
Pros
* Simple build
* Amazing agility
* Only 3 or 4 motors
* Light
Cons
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
Pros
* Amazing agility
* Very powerful
* Can move in all directions without turning
Cons
* Most difficult drive to program
* Difficult to build/design (though many teams buy them)
* 8 motors (2 per wheel, one for driving, one for steering)
* Heavy
* Difficult to get used to driving

![](/images/swerve-drive.png)

A stripped-down model of a swerve module made by 346. There would be one of these modules in each corner of the robot.

https://www.ndsubisonrobotics.org/uploads/5/9/8/8/59888285/frc_drivetrains.pdf
https://docs.team4909.org/reference/robots/drivetrains/

# **Structure**
- Deciding what material to use is a crucial part of making strong and sturdy structure, so you can see the different materials and their properties in the fabrication wiki


## *Nuts and Bolts*

- Fasteners are extremely important in robotics, as they allow you to actually attach different pieces together. Though there are many different types of screws, most teams only use a select few for simplicity and more storage space. 
- For American screws, you will see their dimensions written out as: # number – number
    - The first number represents the diameter while the second represents the threading
    - For example, #4-40 means that the screw has a diameter of 0.112 inches and there are 40 threads per inch
    - In some cases, mostly for larger screws, the first number is replaced with the nearest fraction of the diameter of the screw
    - This page lists which numbers mean what size
        - https://monsterbolts.com/pages/us-screw-sizes
- For Metric screws, you will see their dimensions written out as: M number x number x number
    - The first number represents the diameter, the second represents the pitch, and the third represents the length
    - For example, M12 x 1.75 x 85 means that the screw has a diameter of 12 millimeters, has a pitch of 1.75, and is 85 millimeters long
- For our team, we, of course, use mostly American screws. The most common we use are #6-32, #8-32, #10-32, and ¼-20
- Below is a table that shows and explains the different types of bolts and gives links to order them (this was taken directly from the NASA  
Robotics Alliance Project Robotics Design Guide)


| **Screw Type** | **Description** | **Photo** |
| :---: | :---: | :---: |
| Socket/Cap Head Bolt | Standard go-to bolt, the strongest of all of the socket head, the hex is the hardest socket head to strip out. | ![](/images/socket-head.png) |
| Flat Head/Countersunk Bolt | Is meant to be flush with the material, requires you to countersink the hole. Most standard bolts use an 82° countersink. Most metric bolts use a 90° countersink. | ![](/images/flat-head.png) |
| Button Head Bolt | A bolt with a rounded head for areas where a cap head bolt is too large or you don’t want the bolt head to catch on anything. | ![](/images/button-head.png) |
| Low Profile Bolt | A bolt with a head that isn’t as tall for use in areas where a cap head bolt is too large. | ![](/images/low-profile.png) |
| Shoulder Bolt | Bolt with a precision smooth section meant to fit into a bearing or bushing and act as a shaft. | ![](/images/shoulder-bolt.png) |
| Set Screw/Grub Screw | Screw used to keep something positioned on a shaft or to transmit torque. It is best to avoid these. If they are used, they should only be used to hold axial position on a shaft, not to transmit torque. | ![](/images/set-screw.png) |

‎ 

Nuts are just as important as fasteners, because without them, these bolts would be virtually useless. 
Nuts only work with screws with the same threading. So, when using a #8-32 screw, you must use a #8-32 nut.
Below is a table that shows and explains the different types of nuts and gives links to order them (this was taken directly from the NASA Robotics Alliance Project Robotics Design Guide) 


Nuts are just as important as fasteners, because without them, these bolts would be virtually useless. 
Nuts only work with screws with the same threading. So, when using a #8-32 screw, you must use a #8-32 nut.
Below is a table that shows and explains the different types of nuts and gives links to order them (this was taken directly from the NASA Robotics Alliance Project Robotics Design Guide)

| **Nut** | **Description** | **Photo** |
| :---: | :---: | :---: |
| [Lock Nut](https://www.mcmaster.com/#hex-locknuts/=1ayld7d) | Standard go-to nut. Has a nylon insert that prevents the bolt from loosening. | ![](/images/lock-nut.png) |
| [Thin Lock Nut](https://www.mcmaster.com/#hex-locknuts/=1az6kwx) | Used when a standard lock nut is too large. | ![](/images/thin-lock.png) |
| [Regular Nut](https://www.mcmaster.com/#hex-nuts/=1ayldbw) | A normal nut, typically only used when creating a “jam nut” where two nuts are tightened against each other on a threaded rod. | ![](/images/nut.png) |
| [Tee Nut](https://www.mcmaster.com/#tee-nuts/=1ayldl4) | A type of nut pressed into wood. Sometimes used in bumpers. | ![](/images/tee-nut.png) |
| [Wing Nut](https://www.mcmaster.com/#standard-wing-nuts/=1ayldoo) | A type of nut meant to be tightened by hand. Convenient for removing without the use of tools. Can be useful for attaching bumpers. | ![](/images/wing-nut.png) |
| [Pem Nut](https://www.mcmaster.com/#captive-nuts/=1ayldsk) | A nut that is pressed into a part, usually in a part that is too thin to tap well. It’s important to check McMaster for what size the holes the part needs to be for the desired pem nut. | ![](/images/pem-nut.png) |
| [Flush Pem Nut](https://www.mcmaster.com/#captive-nuts/=1az6lk8) | A pem nut that is used in sheet metal and mounts flush with the material. | ![](/images/flush-pem.png) |
| [Heat Set Inserts](https://www.mcmaster.com/#threaded-inserts/=1ayldxc) | Used in 3D-printed or other plastic parts. A hole is designed for a specific size listed on McMaster, and then the threaded brass insert is pressed in using a soldering iron. | ![](/images/heat-set.png) |
| [Rivnuts](https://www.mcmaster.com/#standard-rivet-nuts/=1azdnh2) | Similar to a pem nut, except it is installed with a specialty tool, similar to a rivet gun. Can be used as an alternative to tapping a hole. Rivnuts are useful for hard-to-reach locations (i.e. box tubing or thin sheet). Rivnuts can be used to provide a semi-permanent nut in a location. | ![](/images/rivnut.png) |

‎ 

- There are many methods to retain nuts and make sure they do not come off the screw. Next are a few ways to do this.
    - Loctite:
        - Loctite is one of the most common ways to retain nuts. It is a liquid that solidifies on threads and prevents bolts from coming lose from vibrations, which is the most common way bolts come lose on FRC robots. Blue 242 Loctite is used for #8 screws and smaller while Red 262 Loctite is used for #10 screws and larger. For stronger Loctite, the best way to remove the bolt is to heat it up. It is also important to note that Loctite can ruin certain materials, most notably polycarbonate, it touches. Loctite also ruins the nylon on nyloc nuts, so do not use them together.
        - As you can see, Loctite is applied to the area that the nut will be

![](/images/loctite.png)

- Nylon Lock Nuts (Nyloc Nuts):
    - Nylon lock nuts are lock nuts with a nylon selection the bolt threads into. This makes it tighter and prevents the nuts from becoming loose from vibrations. It is generally agreed that these can be reused. Just remember, do not use them with Loctite.
        - The white nylon in the lock nut creates a tighter fit

![](/images/nyloc.png)

- Lock Heli-Coils (Screw Thread Inserts):
    - Locking Heli-coils are inserted into threaded holes and retain bolts and repair broken threading. The hole is tapped with a specific Heli-coil tap, and with a Heli-coil Insert Tool, the insert is threaded into the hole. 
    - The coil goes around the screw to either tighten it or fix a broken thread

![](/images/lock-heli.png)

- It is also important to note that fasteners require specific hex key drive sizes and nuts require specific wrench sizes. This page displays the correct tools for different sizes:
    - https://monsterbolts.com/pages/us-socket-screw-drive-sizes

 
## *Taps and Dies*

- Similarly to nuts and bolts, you can also use taps and dies to create threading
- Taps allow you to put threading into a part, so you do not need a nut with the screw. To do this, put a hole in the part that is smaller than the tap (there are specific sizes you should use for different taps). Then, with some sort of lubricant, you screw the tap into the hole. Below is a picture from Custom Part Net that shows this process:


![](/images/custompartnet.png)


* It is best not to tap a part less than 1/16” thick. If you 1/16” thick part needs to carry a heavy load, you should just use a screw and nut.
It is also best to get at least 4 threads into the material, meaning that the depth of your hole varies based on your thread size. 


![](/images/dies.png)

- Dies are the opposite of taps. They create threading on the outside of a part, which basically creates your own screw. To do this, you rotate the die around your part. Dies are not used very often in FRC, though. Below is a picture from Threading Tools Guide that shows this process:

- Also notable, for threaded holes in 3D printed parts, it is best to use heat set inserts. These are brass threaded inserts that are pressed into plastic parts with a soldering iron. There are also inserts that do not need soldering.


## *Rivets*

- Rivets are another type of fastener to connect parts. Rivets are usually used with thinner metal sheets. You can also add rivets to an already connected assembly to strengthen attachments. Blind rivets are a one-time use fastener that only require access to one side of your assembly. 
- There are two main parts of a rivet, as seen in the picture below

![](/images/mandrelandshank.png)


- How the blind rivet works: The head of the mandrel goes first when you put the rivet into the hole. You use a rivet gun to pull the mandrel. As it is pulled, the shank is deformed and creates a sort of head that prevents the rivet from coming out. As you can see, there is also a pre-made tear in the mandrel. This eventually breaks, which allows the rivet to take little room.
- You should not use rivets in places that you are expecting to take apart often. This is because to take out rivets, you must drill them out. Not only can this take longer than a simple nut and bolt, but constant drilling can eventually make the hole too big to use a rivet. However, this can be solved by drilling the holes for the next largest rivet (but you can only do this so many times).
- It is important to use the correct length rivet. If the rivet is too short, the deformation might not be very strong, and if it is too long, then it might not deform enough to hold the parts together.
- Below is a table with rivets sizes and when drill bit to use for them:

| **Rivet Size** | **Drill Bit to Use** |
| :---: | :---: |
| 1/8" | 30 |
| 5/32” | 20 |
| 3/16” | 11 |

‎ 

## *Welding*

- Welding is a light, strong, and permanent way of connected pieces, which is why it is usually only used for drivetrains and superstructure. When designing welding parts, it is best to also design some sort of way to hold the parts while they are welded. 
- Welding is a big investment for most teams. Along with the cost, welding is highly skill-dependent, and the skill of the welder influences the outcome more than the quality of the materials being used. For this reason, teams often pay sponsors or have experienced mentors to do the welding for them. 
- Welding has many things to keep in mind:
    - Welded assemblies almost always have some sort of warping, so it is best to design with some tolerance in mind for this. 
    - When welding enclosed materials like tubing, it is best to include small holes near welds because if not, gasses may get trapped in there.
    - Welds can, obviously, break, so you should probably have fail-safe kits with “scab plates” that you can use to reconnect these broken assemblies.
    - Welding parts together creates a bump of metal between the pieces. These can be grinded down, but this makes the weld much weaker. It is best to simply keep in mind these bumps when designing.
Below is a picture of a corner that was welded for strength done by 95:

![](/images/welding.png)

## *Box Tubing*

- Box tubing is probably the most used structure in FRC robots. It is a hollow tube with a square or rectangular shape. 
- Tubes can be connected with welding, gussets, or connecting blocks. 
- **3D Printed Connecting blocks**:
    - 3D blocks are used to connect tubing. It is especially useful for strengthening a connection between parts that are already welded or have gussets. 
    - To use them, you make two that connect to each other. You screw the first block into one of the box tubes. This screw also connects the two 3D printed blocks together. Then, you can attach the second block to the other tube.
    - This picture of 118’s 2017 robot displays a use of 3D printed connecting blocks in a chassis:
    ![](/images/boxtubing.png)


- **Gussets**:
    - Gussets are simple, extremely common, and extremely important. The purpose of gussets is to connect two pieces without directly bolting them to each other. This creates clean assemblies and makes it much easier to work with your assemblies.
        - For example, if you wanted to have two box tubes perpendicular to each other, you could attach them to each other directly like this:
        ![](/images/imperfect.png)
        - This, however, can be improved with a gusset (represented by the yellow piece):
        ![](/images/gusset.png)
        - This makes the assembly look cleaner, but more importantly, it is easier to work with. Designing on a flat and even surface is easier than one that is crowded with bumps. Of course, there will be some cases where you are looking for the structure you see in the first picture. But in many cases, gussets help.
- Also know that 3D printing blocks and gussets are not ONLY used for box tubing. They are just a common tool for working with box tubing but can be used whenever you find them useful. Do not limit yourself in that way.


## *Round Tubing*

- Round tubing is not as common as box tubing. Again, it is hollow tubing, only this one in a circular shape.
- Compared to box tubing, round tubing is typically around 20% lighter and can be molded into shapes that can prove to be very strong and useful. It also has stronger torsion.
- The downside of round tubing is that it is much harder to machine and design with. The lack of a flat surface makes it difficult to secure anything on it, which can make it a pain to use. For this reason, round tubing is not very common in FRC robots.
- Sometimes, though, this may not be an issue. For example, 118’s 2014 robot use round tubing as a simple way to hold a giant ball:
![](/images/roundtubing.png)
* Listed below are many effective ways to use/work with round tubing:
* Clamping:
    * This attachment method squeezes the tube between two parts to keep it in place. 
    * A great example is, again, from 118’s 2014 robot:
![](/images/Traction.png)
* Welding:
    * Again, as previously mentioned, round tubing can be difficult to work with. When welding, thin walls require skillful precision and are easy to mess up.
* Tube Inserts:
    * Similarly to clamps, tube inserts give a place to stick a round tube into. This method is normally used when the tube will not be experiencing high loads or strong impacts.
* A great example is from 118’s 2017 robot, where the inserts were put in the corners for the tubes, which made up the frame of the robot:
![](/images/rod-ends.png)

* Rod Ends:
    * Rod ends give tubes a practical place to attach to. It also allows to get very specific angles, which makes rod ends perfect for triangle bracing. 
* Below is a picture of a rod end:
![](/images/rodends.png)


## *Plate and Standoff Structures*

* Standoffs are threaded spacers. When you want to elevate a plate from a certain surface, using standoffs is usually a good option. Doing this creates another plane to build on while also having room under it to add other things. This extra space makes this structure very popular for gearboxes, where the plate can hold the other end of the shaft.
* It is best to use COTs standoffs, as this will take away unnecessary machining time.
* Below is a picture of WCP’s DS gearbox, which uses this plate and standoff method to fit the shafts and gears:
![](/images/plateandstand.png)

## *Bent Sheet Metal*

* By bending sheets, you can give multiple functions to a single part, which creates simplicity and lightweight.
* The bend radius is the inside radius of a bend. This page shows a table by the Aluminum Association which tells you the best bend radii to use with certain thicknesses: [Chart](
https://www.cumberlandmetals.com/aluminum/minimum-bend-radii/#:~:text=Aluminum%20Minimum%20Bend%20Radii%20for,per%20The%20Aluminum%20Association%2C%20Inc.&text=1%2F64%20in).
* Flange: The flange is the section of a part that you are bending. It is usually the part you put inside a brake to bend it. The length of your flanges should be at least 4 times the part’s thickness, or else the bend will turn out bad.
* Holes should not go close to bends. If you do need a hole near a bend, it is best to have the hole at least 2 times the part thickness away from the bend. 
* Bends stretch the outside of the part and shrink the inside of the part. Between these is a line of metal that is not affected. This is called the neutral axis. 
* The K-factor is the ratio of the location of the neutral axis (t) to the material’s thickness (T). With this information, you can determine how much the neutral axis has moved from the center, and therefore, how much longer the sheet metal becomes.
![](/images/flange.png)


## *Slots and Tabs*

* Slots and tabs are a useful way to attach perpendicular parts in an easy and sturdy way. One part has an extrusion while the other part has a slot that fits that extrusion. 
* Also, the part with the extrusion has a screw hole while the part with the slot has a place to hold a nut. This prevents any tapping. Below is an example of this:

* The hole for the screw is a simple clearance hole. The hole for the nut should have a little clearance to make sure it fits
![](/images/slotsandtabs.png)

## *Lightening Patterns*

* As previously mentioned, to save weight, teams will sometimes need to add pockets to their parts to make them lighter. These pockets are called lightening holes, and listed next are the different types of lightening patterns:
    * Isogrid:
        * Isogrid uses 6 equilateral triangles surrounding a circle in the middle. It usually takes longer to machine because of the many pockets. It is important to remember, though, that triangles are the strongest shape. And strength is important especially for lightening holes because pocketing takes away the strength of the part.
    * Below is an example of an isogrid on 118’s 2017 robot:
    ![](/images/lighteningpatt.png)

    * Triangles:
        * Again, triangles are the strongest shape. It is also easy to fit them together neatly in patterns, which takes away a lot of weight.
    * Below is an example of triangle pockets on 3476’s robot:
    ![](/images/triangles.png)

    * Circles:
        * Circles are the easiest lightening holes to make, as you can make them with a drill press if you need. Some teams end up drilling holes into their robot when they realize that their finished robot is too heavy.
    * Below is an example of circle pockets on 118’s 2013 robot:
    ![](/images/circles.png)


* Non-Standard and Gearboxes:
    * In many cases, mostly for plates, you will need to make abstract lightening holes. To do this, you take away as much material as possible, but leave struts that connect the bolts, bearings, and other holes on the plate. You must also leave a good amount of material around these holes so that they can handle their load. 
    * When making the plate, try to put the holes in ways that will form triangles. And when you have a rectangular area that needs pocketing, you can split that into two triangles. 
* Below is an example of this type of pocketing on a gearbox made by 3008:
![](/images/gearbox.png)

* Half-Depth Pocketing:
    * You can also create pockets that do not go all the way through the wall of the part. This leaves behind a shell that is around half the weight of what it previously was. You must use caution, though, because it is easy to make this shell too thin and take away all the strength of the part.
* Below is an example of half-depth pocketing from GM0:
![](/images/hald-depth.png)


## Superstructure
* Simply put, superstructure is another above your drive base. It is usually referred to as the structure that you are connecting all your systems to. Superstructures need to be as minimal as possible while still giving good support for everything on the robot. 
* Most teams have several people working on the robot’s systems, respectively. This makes communication imperative. Each system needs superstructure to attach to the robot, so there cannot be any clashes between systems looking for structure in the same area. And in a similar way, it is important to make sure that there is no redundancy and to see if certain structures can be used for multiple systems.
* In the picture below, you can see a robot by 254. The grey metal can be considered part of the superstructure:

![](/images/superstructure.png)


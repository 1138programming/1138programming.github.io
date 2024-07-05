---
layout: default
title: Indexers and Storages
author: Elise Heafner
permalink: /design/IndexersandStorages.html
nav_order: 4
---
# ***FRC Indexers and Storages***

## ***What’s the difference?***

The storage is the secondary holding place after the robot has gained control of the game object whereas the indexer is the funneling system from the storage to the shooter. Essentially the pathways goes from:

An easy way to remember this is; the storage is the structure and the indexer is the final moving stage or used as a sorting function. In games where multiple game objects can be held, the storage will be used to hold those other objects not being shot as to avoid jamming. In a game with only one object available to be possessed at a time, the indexer can be used as a sort of funnel for an expedited transition between the two systems. For these reasons, storages and indexers aren’t always necessary to be used together.

## ***Common Types:***
While the structure of the storage is bound to change depending on the size requirements, necessity, and function of the system, there are common mechanisms for the indexer that have been used to move the game objects within the bot.

| **Type** | **What is it** | **Pros** | **Cons** |
| :---: | :---: | :---: | :--: |
| Belts | Think conveyor belt for the game object that constrains it on the top and the bottom. In the 2020 game, “Infinite Recharge,” the team used polyurethane belts to transition the “power cells” from the intake to the shooter. | This will allow for complete control of the game object and an efficient transition between intake and shooter. | However, belts can be wrecked easily during a high contact match and they are heavy. They also have the potential to take up a lot of space within the robot. |
| Rollers | Similar to how a belt would function, rollers would constrain the game object from the top and bottom. | Rollers are lighter than belts and stronger in a higher impact match. | There is less control than a belt would have and they can take up a lot of space. Depending on the game object, the rollers can compress the game object in the wrong direction. |
| Polycord | Previously this was used on our 2022 bot for the game, “Rapid React.” It was 4 polycord bands that brought the balls up from the intake to a flywheel. | This was able to save space within the interior of the bot. | It was weak control of the game object and the balls would end up slipping a lot. |
| Flex Wheels | For the 2024 game, “Crescendo,” flex wheels were used to pass the note from the intake up into the flywheel. | Flex wheels were the easiest to use in the minimal space that was provided and best compressed the note to transition it the best to the flywheel. | They can be heavy and figuring out the spacing between the flex wheels could be a specific measurement requiring some extra work. |


‎ 

## **Examples:**
There isn’t a guide or a specific way that indexers can be designed, but some types work better for different game objects. In years previous there have been:

| Game Pieces | Game | Link | 
| :---------: | :---------: | :---------: |
| Small/Medium Balls | Basketballs in the 2012 FRC game ‘Rebound Rumble’ \\ Fuel in the 2017 game ‘Steamworks’ \\ Power Cells in the 2020 and 2021 game ‘Infinite Recharge’. | [Indexer: Small and Medium Balls - YouTube](https://www.youtube.com/playlist?list=PLYcmd5xMhOBAsW0dKeXbLuvcc35uGn1yj) |
Large Balls | 254’s robot for the 2014 FRC game ‘Aerial Assist’ | [Indexer: Large Balls - Youtube](https://www.youtube.com/playlist?list=PLYcmd5xMhOBDGC9lzcw81B6vJApo00tqh) |
Cubes | Some teams have designed mechanisms with a hand off from the intake to the scoring mechanism. 2017-18 FTC game ‘Relic Recovery’ | [Indexer: Cubes - Youtube](https://www.youtube.com/playlist?list=PLYcmd5xMhOBCALE65Uer3iLD0fNmZs81Z) |
Frisbees/Rings | FRC 2013 game ‘Ultimate Ascent’ \\ 2020-21 FTC game ‘Ultimate Goal’ | [Indexer: Frisbees/Rings - Youtube](https://www.youtube.com/playlist?list=PLYcmd5xMhOBBozgm7T2hiweclxfud9Tjd) |
Totes and Cans | 2015 FRC game ‘Recycle Rush’ | [Indexer: Totes and Cans - Youtube](https://www.youtube.com/playlist?list=PLYcmd5xMhOBBs3P-yz-XpCgVGM4Ht9Vin) |



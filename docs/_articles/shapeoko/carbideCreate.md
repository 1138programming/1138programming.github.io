---
layout: default
title: 'Shapeoko Basics: Carbide Create'
author: Viren Sharma
permalink: /shapeoko/carbide-create.html
nav_order: 1
---

# Shapeoko Basics: Carbide Create

## Creating and Uploading G-Code in Carbide Create

### 1. Design Your Part

Before making your Gcode, ask yourself if you need to create a deisgn or you already have a file. 

**Creating a New Design**

 1. *Set Up Your Material*: Go to the “Job Setup” menu to define the size and thickness of your material. 
 2. *Draw Your Shapes*: Specify the material type to help Carbide Create optimize the toolpath. Use the drawing tools (lines, circles, rectangles, etc.) to create the geometry of your part. 
 ![Job Setup](https://i.ibb.co/7KdxpKQ/image.png)
 3. Ensure all the elements of your design are properly aligned and scaled to fit your material. 

**Uploading a Design (Most Common Option)**

 1. *Use a Specific File Type*: Make sure the files you use are DXF files . 
 ![Importing a Design](https://i.ibb.co/p4bQ4NW/image.png)
 2. *Organize Your Design*: Ensure all the elements of your design are properly aligned and scaled to fit your material.
    
### 2. Create Toolpaths
    

 1. *Select Toolpaths*: Choose the type of toolpath you need (contour, pocket, V-carve, etc.) based on your design requirements. 
2. *Assign Toolpaths*: 
	 A. Click on the elements of your design and assign the appropriate toolpaths.
	 ![Assigning Toolpaths](https://i.ibb.co/4N0RZVz/image.png)
	 B. Select the cutting tool (end mill, V-bit, etc.) and define parameters such as cutting depth, feed rate, and spindle speed (the default speed is correct 90% of the time). **Make sure to use tabs, not using tabs can result in unsafe and mangled cuts. It can also damage the machine.**
	 ![Tooling & Tabbing](https://i.ibb.co/729fbqX/image.png)
 3. *Preview Toolpaths*: Use the “Simulation” feature to preview the cutting process. Ensure there are no errors and the toolpaths are correctly set up.
  ![Simulation](https://i.ibb.co/3MkRT9v/image.png)

### 3. Generate G-Code
 1. *Save Toolpaths*: Click on the “Save Toolpaths” button.Carbide Create will compile the toolpaths into a G-code file (.nc file) that the Shapeoko can read. 
   
 2. *Export G-Code*: Name your G-code file and choose a location on your computer to save it.
    
    ### Next Up: Machining the Part
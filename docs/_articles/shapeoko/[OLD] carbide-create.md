---
layout: default
title: 'Shapeoko Basics: Carbide Create'
author: Viren Sharma
permalink: /shapeoko/[OLD]-carbide-create.html
nav_exclude: true
---
# Shapeoko Basics: Carbide Create

## Creating and Uploading G-Code in Carbide Create

### 1. Design Your Part
Creating a New Design <br>
a. **Set Up Your Material**:
- Go to the "Job Setup" menu to define the size and thickness of your material.
- Specify the material type to help Carbide Create optimize the toolpath.
b. **Draw Your Shapes**:
- Use the drawing tools (lines, circles, rectangles, etc.) to create the geometry of your
part.
c. **Organize Your Design**:
- Ensure all the elements of your design are properly aligned and scaled to fit your
material.
Uploading a Design (Most Common Option)
a. **Use a Specific File Type**:
- Add text or import vector files (such as SVG or DXF).
b. **Organize Your Design**:
- Ensure all the elements of your design are properly aligned and scaled to fit your
material.
### 2. Create Toolpaths
a. **Select Toolpaths**:
- Choose the type of toolpath you need (contour, pocket, V-carve, etc.) based on your
design requirements.
b. **Assign Toolpaths**:
- Click on the elements of your design and assign the appropriate toolpaths.
- Select the cutting tool (end mill, V-bit, etc.) and define parameters such as cutting
depth, feed rate, and spindle speed (the default speed is correct 95% of the time).
c. **Preview Toolpaths**:
- Use the "Simulation" feature to preview the cutting process.
- Ensure there are no errors and the toolpaths are correctly set up.
### 3. Generate G-Code
a. **Save Toolpaths**:
- Click on the “Save Toolpaths” button.
- Carbide Create will compile the toolpaths into a G-code file (.nc file) that the Shapeoko
can read.
b. **Export G-Code**:
- Name your G-code file and choose a location on your computer to save it.
---
### Next Up: Machining the Part
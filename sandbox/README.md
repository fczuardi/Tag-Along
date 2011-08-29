# Sandbox

This is the folder to throw simple tests and code references on how to implement
some specific thing.

The idea is to have simple html pages that are self-explanatory when you do a 
view-source on it.

If you add a demo to the sandbox please update the list below with a short 
description of what the demo does.

## List of code examples and demos currently on the sandbox:

### swipe angle

A simple page demonstrating how to get the angle of a swipe on the mobile 
safari web browser (iPhone, iPad devices).

Good reference to see how to use ontouchstart ontouchmove and ontoucend events.

### svg-ios4

Full html5 inline svg support will only land on iOS devices when iOS5 becames
available. This demo shows how to use a javascript library from the 
[svgweb project](https://code.google.com/p/svgweb/) and a script tag to achieve 
a wider compatibility.

The svg.js library is also used by other demos, so it is under a different 
folder ```../lib```.

### scalable svg

An SVG element inside a web page doesnt automatically scales if you set the
element dimensions in percent on the stylesheet (the contents of the svg stays 
the same size when you resize the window). 

This demo shows how you can update the 
transform="scale()" attribute of a group container with javascript in order to 
achieve auto resizing/streching.



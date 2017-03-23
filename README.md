# Bingy
#### *a Bing Rewards bot to maximize those points*

**NOTE: THIS PROJECT IS NOT DONE AND DOES NOT YET WORK**.
An update will be made to this file when the project is ready for primetime.

## Installation
Installation is Wicked Super Easy. From the code directory, simply open Bingy_page in your webbrowser of choice (although it has only been tested on Edge for now). The page will load the javascript functions that run the program.

### What about the batch files?
The batch file *Bingy_run.bat* was originally created to make it easier to start the Python version of this app (see below) by calling a Command Prompt python start command. However, when the project was shifted to JavaScript, the need for an executable batch file to start the program disappeared because the user will simply open the webpage. For no particular reason, another batch file (*Bingy_Run_page.bat*) was created to open the HTML file that runs the program.

## Bingy.py vs. Bingy_js.js
Originally, this project was written in Python. However, when it became clear that faking user agent strings was not super easy in Python, and was super easy in JavaScript, the project was switched over to JavaScript.

## Known issues
Since it doesn't work yet, there are a lot of known issues. Primarily:
* Finding random words to search on Bing
  * or creating a list of words it searches each time, but this seems much worse
* Adding delays between each webpage change so that the program actually has time to search

## Going Forward
A couple plans are in place for next-steps (after the thing actually runs):
* Converting the project to Chrome and Edge extensions so that an HTML file isn't needed to kick off the program.
* Eventually finding out how many searches the user has done already, and only doing the remaining number needed to maximize points

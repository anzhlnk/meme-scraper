Create a cli (Command Line Interface) application that scrapes the current version of this website:

https://memegen-link-examples-upleveled.netlify.app/

...and saves the first 10 images into a folder called "memes" within the directory of the new project. The image files should be named with a number with a leading zero, eg. 01.jpg, 02.jpg, etc.

Avoid using an "image scraper" or "image downloader" library that does multiple steps at once for you (eg. do not use image-downloader or nodejs-file-downloader or similar) - break the task down into smaller steps and select libraries as necessary for each step.

Make sure that the meme images are "ignored" in Git - they should not show up in your repository.

The program should be able to run multiple times without throwing an error.

TODOs
Connect to the link (URL) in Node.js - other words: "loading", "open"
We may decide to set the URL as a const
We may decide to open a browser for this (using our Node.js program)
Research shows us ways to do this in Node.js
Get html from URL (this will be in a "string" inside of an "HTTP response")
Locate the image URLs in the html string
Maybe we somehow turn the string into an array to make this easier? Potential data structures: array of objects (see below), array of strings
Take the array of image urls and extract the first 10
Make the folder memes
Download / transfer / save
Connect to the image URL
Receive image data from the response (maybe a string)
Generate the correct file name
Store image data in the file path in the folder (maybe you need to create the file first)
Add memes to .gitignore
Test that the program runs multiple times without errors
[
{
name: '01.jpg',
url: 'https://example.com/1.jpg',
}
]
Stretch goals:

Make the application create your own custom meme (eg. node index.js hello karl bender would download an image with the top text of "hello", the bottom text of "karl", with the meme image of Bender)
Add a nice progress indicator (either messages or a progress bar)

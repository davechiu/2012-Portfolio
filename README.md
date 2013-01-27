# 2012-Portfolio

HTML, CSS, and JS for the 2012/2013 edition of my portfolio

## About

This is a simple one page site that serves up photos one at a time stretched edge to edge while maintaining the native aspect ratio.

## Usage

1. Update the info to your own in /index.html
  * contact info and tagline
  * meta data and opengraph data
  * footer links
  * copyright info
  * google analytics id
2. In /js/script.js add image urls to the photos array
3. Publish!

## N.B.

Only very minor considerations were made for browsers older than IE9.

Photos in Landscape show best due to how the images are stretched to the size of the browser window, I'm using media queries to do some letterboxing for portrait oriented screens... so if you want to show portrait oriented photos, you'll have to manually letter box them. Maybe some day in the future I'll detect the aspect ratio of the image and adjust accordingly.

Works best with photos _without_ watermarks, due to the nature of the stretching and footer placement, they'll most likely end up clipped; but for the purposes of this public repository I'm including watermarked photos. I may take the time in the future to do a virtual watermark as well.

## Todo

* Virtual watermark
* Description/Title to go along with photos
* Support of Portrait oriented photos

## License

[![Creative Commons Attribution-ShareAlike 3.0 Unported License](http://i.creativecommons.org/l/by-sa/3.0/88x31.png)](http://creativecommons.org/licenses/by-sa/3.0/)
This work is licensed under a [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).

## My Implementation

* [http://davechiu.cc/](http://davechiu.cc/)
#Actual-Size

This project demonstrates some uses of `window.matchMedia("(max-resolution: ###dpi)")` Sadly, this was only supported by a few versions of Firefox and ends with 15. Later versions "fixed" the Inches in DPI to use the CSS standard inch which is always contains 96 dots. The fix makes the whole thing useless.

###Get Firefox 15
[PC](http://download.mozilla.org/?product=firefox-15.0&os=win) or  [Mac](http://download.mozilla.org/?product=firefox-15.0&os=osx)

[Using Multiple Firefox profiles](https://developer.mozilla.org/en-US/docs/Mozilla/Multiple_Firefox_Profiles)

##Knowing the DPI of your screen I can infer several qualities:
* Its physical dimensions, and thus its portability.
* How many people can easily view the screen at the same time (privateness/socialness continuum)
* Your approx viewing distance (or at least the recommended distance)

##Some on-screen things I can do:
* Scale images to display their contents at actual size. (think jewelery e-commerce)
* When on a touchable device add padding to buttons to increase touch target size for an adult fingertip.
* When on a large TV, style the page for a "ten foot experience"

##why should I care?
Because it's possible to have 1080 vertical pixels on TVs, laptops, phones and other devices. Simply knowing the number of pixels used to display your page doesn't tell you very much anymore.


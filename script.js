// setting variables to begin animation function //
var line1 = document.getElementById("MovingLine1");
var line2 = document.getElementById("MovingLine2");
var line3 = document.getElementById("MovingLine3");
var line4 = document.getElementById("MovingLine4");
var line5 = document.getElementById("MovingLine5");
// src css tricks //
// the request animation functn allows for smooth + higher quality animation //
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.mozRequestAnimationFrame;
var oldPosition = 0;
// this is a counter for my line's current position //
requestAnimationFrame(animation);
// initiate //

function animation () {
  // moves line on px up each time it is called //
  oldPosition += 3;

  line1.style.top = oldPosition + 'px';
  line2.style.top = oldPosition + 'px';
  line3.style.top = oldPosition + 'px';
  line4.style.top = oldPosition + 'px';
  line5.style.top = oldPosition + 'px';

  if (Math.abs(oldPosition) >= window.innerHeight) {
    oldPosition = -500;
  }
  // ^ ensures that the animation will loop //
  requestAnimationFrame(animation);
}

// setting variable and speed for the vertical direction //
var movement = [
{
  "ySpeed" : 10,
  "yDirection" : 1
}
];


// setting variables to begin animation function //
var line1 = document.getElementbyId("MovingLine1");
var line2 = document.getElementbyId("MovingLine2");
var line3 = document.getElementbyId("MovingLine3");
// src css tricks //
// the request animation functn allows for smooth + higher quality animation //
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.mozRequestAnimationFrame;
var oldPosition = 0;
// this is a counter for my line's current position //

function animation () {
  // moves line on px up each time it is called //
  oldPosition += 5;
  line1.style.top = oldPosition + 'px';
  line2.style.top = oldPosition + 'px';
  line3.style.top = oldPosition + 'px';

  if (Math.abs(oldPosition) >= window.innerHeight) {
    oldPosition = -500;
  }
  // ^ ensures that the animation will loop //
  requestAnimationFrame(animation);
}

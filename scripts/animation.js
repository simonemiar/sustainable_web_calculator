
let blik_index = document.querySelector(".body_animation");


//create a tween that changes the value of the score property of the demo object from 0 to 100 over the course of 20 seconds.

//fade out and set visibility:hidden and opacity to 0
TweenLite.to(blik_index, 3, {autoAlpha:0});
//in 2 seconds, fade back in with visibility:visible and opacity to 1
TweenLite.to(blik_index, 3, {autoAlpha:1, delay: 5, repeat:Infinity, ease: Sine.easeInOut});


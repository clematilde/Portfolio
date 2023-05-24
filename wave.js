// Build up some coordinates
// 1. Start with which x do we want: 0 to 500
let xs = [];
// One single point for each pixel. Sart at 0 and end 500 pix across.
for (var i = 0; i < 500; i++) {
  //  Take every single i up to 500 and add them to this xs
  xs.push(i);
};

let t = 0;

// 2. Every time we animate, we loop it over this animation
function animate() {
//  every time we animate, we want to recalculate the pixels of the page
  let points = xs.map(x => {
    // Reduce hight of wave and change gap here:
    let y = 200 + 30 * Math.sin((x + t)/15);
    return [x, y];
  })
// 3. We take every x and turn it into html attribute
  let path = "M" + points.map(p => {
    return p[0] + "," + p[1];
  }).join(" L");

// 4. Replace the current one by the one it should be
document.querySelector("path").setAttribute("d", path);

// 5. Add a bit of time to move it around the page

  t -= 0.5;
  requestAnimationFrame(animate);
}

animate ();

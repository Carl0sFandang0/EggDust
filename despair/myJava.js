const filmstrip = document.getElementById('filmstrip');
const frameWidth = 853.6 ; // Width of one frame in pixels
const totalFrames = 100; // Total images side-by-side
let currentFrame = 0;
let animationTimer = null;

function nextFrame() { currentFrame++;
    if (currentFrame >= totalFrames) { currentFrame = 0; }
    const xPosition = -(currentFrame * frameWidth);
    filmstrip.style.transform = `translateX(${xPosition}px)`;
}

function startAnimation() {
    // Prevent duplicate intervals if clicked multiple times 
    if (animationTimer) clearInterval(animationTimer);
    // Run at 5 frames per second
    animationTimer = setInterval(nextFrame, 200);
}
function stopAnimation() { clearInterval(animationTimer); }

startAnimation() ;
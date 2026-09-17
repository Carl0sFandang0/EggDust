const filmstrip = document.getElementById('filmstrip');
let frameWidth = 1000;  //  Width of one frame in pixels
const totalFrames = 10; // Total images side-by-side
let currentFrame = 0;
let animationTimer = null;
let loopDirection = 0;
let xPosition = 0;




const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        frameWidth = document.querySelector('.svg-filmstrip').clientWidth / totalFrames  
    }
});

observer.observe(document.querySelector('.animation-window'));


function nextFrame() {
    xPosition = -(currentFrame * frameWidth);
    filmstrip.style.transform = `translateX(${xPosition}px)`;

    if (loopDirection == 1) {
        currentFrame--;
        if (currentFrame < 0) {
            currentFrame=1;
            loopDirection = 0;
        }
    }
    else { 
        currentFrame++;
        if (currentFrame == totalFrames) {
            currentFrame = totalFrames - 2;
            loopDirection = 1;
        }
    }
}

function startAnimation() {
    // Prevent duplicate intervals if clicked multiple times 
    if (animationTimer) clearInterval(animationTimer);

    animationTimer = setInterval(nextFrame, 200);  //ms between frames
}
function stopAnimation() { clearInterval(animationTimer); }

startAnimation() ;
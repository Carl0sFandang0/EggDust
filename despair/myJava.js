const filmstrip = document.getElementById('filmstrip');
let frameWidth = 320;  // 630px ; // Width of one frame in pixels
const totalFrames = 100; // Total images side-by-side
const endloopFrame = 80; // endloop cycles between here and totalFrames
let currentFrame = 0;
let animationTimer = null;
let endLoop = 0;
let xPosition = 0;




const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        frameWidth = document.querySelector('.svg-filmstrip').clientWidth / 100
    }
});

observer.observe(document.querySelector('.animation-window'));


function nextFrame() {
    if (endLoop == 1) {
        currentFrame--;
        if (currentFrame <= endloopFrame) {
            currentFrame++;
            endLoop = 2;
        }
        else {
            xPosition = -(currentFrame * frameWidth);
            filmstrip.style.transform = `translateX(${xPosition}px)`;
        }
    }
    else if (endLoop == 2) {
        currentFrame++;
        if (currentFrame >= totalFrames) {
            currentFrame--;
            endLoop = 1;
        }
        else {
            xPosition = -(currentFrame * frameWidth);
            filmstrip.style.transform = `translateX(${xPosition}px)`;
        }
    }
    else { 
        currentFrame++;
        
        if (currentFrame >= totalFrames) {
            currentFrame--;
            endLoop = 1;
        }
        else {
            xPosition = -(currentFrame * frameWidth);
            filmstrip.style.transform = `translateX(${xPosition}px)`;
        }
    }
}

function startAnimation() {
    // Prevent duplicate intervals if clicked multiple times 
    if (animationTimer) clearInterval(animationTimer);
    // Run at 5 frames per second

    //screenWidth
    //.animation-window

    animationTimer = setInterval(nextFrame, 300);
}
function stopAnimation() { clearInterval(animationTimer); }

startAnimation() ;
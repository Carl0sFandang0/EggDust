const filmstrip = document.getElementById('filmstrip');
let frameWidth = 600;  //  Width of one frame in pixels
const totalFrames = 5; // Total images side-by-side
let currentFrame = 0;
let animationTimer = null;
let endLoop = 0;
let xPosition = 0;




const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        frameWidth = document.querySelector('.svg-filmstrip').clientWidth / 5  /* insert #frames here */
    }
});

observer.observe(document.querySelector('.animation-window'));


function nextFrame() {
    if (endLoop == 1) {
        currentFrame--;
        if (currentFrame < 0) {
            currentFrame++;
            endLoop = 0;
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

    animationTimer = setInterval(nextFrame, 50);
}
function stopAnimation() { clearInterval(animationTimer); }

startAnimation() ;
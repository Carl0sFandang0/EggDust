const totalFrames = 200; // Total images side-by-side
const endloopFrame = 198; // the endloop cycles between here and totalFrames

const filmstrip = document.getElementById('filmstrip');
let frameWidth = 0;  // calculated later from overall width / totalFrames
let currentFrame = 0;
let animationTimer = null;
let loopType = 0;
let xPosition = 0;




const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        frameWidth = document.querySelector('.svg-filmstrip').clientWidth / totalFrames
    }
});

observer.observe(document.querySelector('.animation-window'));


function nextFrame() {
    if (loopType == 1) {
        currentFrame--;
        if (currentFrame <= endloopFrame) {
            currentFrame++;
            loopType = 2;
        }
        else {
            xPosition = -(currentFrame * frameWidth);
            filmstrip.style.transform = `translateX(${xPosition}px)`;
            filmstrip.style.opacity = (totalFrames - currentFrame) / totalFrames ;
        }
    }
    else if (loopType == 2) {
        currentFrame++;
        if (currentFrame >= totalFrames) {
            currentFrame--;
            loopType = 1;
        }
        else {
            xPosition = -(currentFrame * frameWidth);
            filmstrip.style.transform = `translateX(${xPosition}px)`;
            filmstrip.style.opacity = (totalFrames - currentFrame) / totalFrames;
        }
    }
    else { 
        currentFrame++;
        
        if (currentFrame >= totalFrames) {
            currentFrame--;
            loopType = 1;
        }
        else {
            xPosition = -(currentFrame * frameWidth);
            filmstrip.style.transform = `translateX(${xPosition}px)`;
            filmstrip.style.opacity = (totalFrames - currentFrame) / totalFrames;
        }
    }
}

function startAnimation() {
    if (animationTimer) clearInterval(animationTimer);
    animationTimer = setInterval(nextFrame, 100);
}

function stopAnimation() { clearInterval(animationTimer); }

startAnimation() ;
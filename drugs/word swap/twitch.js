const letterEl = document.getElementById('glitch-text');
const originalText = letterEl.getAttribute('data-start');
const glitchText = letterEl.getAttribute('data-glitch');
//const originalText = 'DRUGS'; // The default letter when not glitching 
//const glitchText = 'DEATH' ; // 
setInterval(() => {
    // 1. Generate random location offset (between -4px and +4px)
    //const randomX = Math.floor(Math.random() * 9) - 4;
    //const randomY = Math.floor(Math.random() * 9) - 4;

    // 2. Generate random size scale (between 0.7x and 1.4x)
    //const randomScale = (Math.random() * (1.4 - 0.7) + 0.7).toFixed(2);

    // 3. Apply the random position and size transforms 
    //letterEl.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;

    // 4. Temporarily change the text (80% chance to glitch, 20% chance to show original) 
    if (Math.random() > 0.5) {
        letterEl.textContent = glitchText;
        //letterEl.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
    } else {
        letterEl.textContent = originalText;
        //letterEl.style.transform = `translate(0px, 0px) scale(1)`;
    }
}, 500);
// Runs every 500 milliseconds (2 times per second)

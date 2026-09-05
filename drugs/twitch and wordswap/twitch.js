const elements = document.querySelectorAll('.random-twitch');

function startRandomLoop(element) {
    const min = parseInt(element.getAttribute('data-min')) || 500;
    const max = parseInt(element.getAttribute('data-max')) || 3000;
    const originalText = element.getAttribute('data-start');
    const glitchText = element.getAttribute('data-glitch');

    function shake() {
        element.classList.add('shake-once');

        element.textContent = glitchText;

        element.addEventListener('animationend', () => {
            element.classList.remove('shake-once');
            element.textContent = originalText;
        }, { once: true });

        const nextDelay = Math.random() * (max - min) + min;

        setTimeout(shake, nextDelay);

    }

    shake();
}

elements.forEach(el => startRandomLoop(el));

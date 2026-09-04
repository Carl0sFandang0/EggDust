const elements = document.querySelectorAll('.random-twitch');

function startRandomLoop(element) {
    const min = parseInt(element.getAttribute('data-min')) || 500;
    const max = parseInt(element.getAttribute('data-max')) || 3000;
    function shake() {
        element.classList.add('shake-once');

        element.addEventListener('animationend', () => { element.classList.remove('shake-once'); }, { once: true });

        const nextDelay = Math.random() * (max - min) + min;

        setTimeout(shake, nextDelay);
    }

    shake();
}

elements.forEach(el => startRandomLoop(el));

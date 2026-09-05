const elements = document.querySelectorAll('.overlay-svg');

function startRandomLoop(element) {
    const min = parseInt(element.getAttribute('data-min')) || 500;
    const max = parseInt(element.getAttribute('data-max')) || 3000;

    function shake() {
        element.classList.add('shake-once');
        element.style.visibility = 'visible';

        element.addEventListener('animationend', () => {
            element.classList.remove('shake-once');
            element.style.visibility = 'hidden';
        }, { once: true });

        const nextDelay = Math.random() * (max - min) + min;

        setTimeout(shake, nextDelay);

    }

    shake();
}

elements.forEach(el => startRandomLoop(el));

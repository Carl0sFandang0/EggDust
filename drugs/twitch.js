const elements = document.querySelectorAll('.overlay-svg');

function startRandomLoop(element) {
    const min = parseInt(element.getAttribute('data-min')) || 500;
    const max = parseInt(element.getAttribute('data-max')) || 3000;
    const speed = parseInt(element.getAttribute('data-speed')) || 400;

    function shake() {
        if (speed == '400') {
            element.classList.add('shake-400');
        }
        else {
            element.classList.add('shake-800');
        }

        element.style.visibility = 'visible';

        element.addEventListener('animationend', () => {
            element.classList.remove('shake-400');
            element.classList.remove('shake-800');
            element.style.visibility = 'hidden';
        }, { once: true });

        const nextDelay = Math.random() * (max - min) + min;

        setTimeout(shake, nextDelay);

    }

    shake();
}

elements.forEach(el => startRandomLoop(el));





// The egg list is in eggs.js (edit that file to add or change eggs).
if (typeof EGGS === 'undefined') {
    console.error('EggDust: eggs.js did not load. Check it is uploaded next to index.html and loaded before script.js.');
}


const EMAIL = 'EggDust@mail.co.uk';

// ---- Gallery ----
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('search');
const searchClear = document.getElementById('search-clear');
const searchStatus = document.getElementById('search-status');
const noResults = document.getElementById('no-results');

function renderGallery(list) {
    gallery.innerHTML = '';
    list.forEach((egg) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'group text-left';
        card.setAttribute('aria-label', 'View ' + egg.title);
        card.innerHTML =
            '<div class="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl bg-panel">' +
            '<span class="egg-ph" aria-hidden="true"></span>' +
            '<img src="' + egg.img + '" alt="' + egg.title + '" loading="lazy" ' +
            'class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" ' +
            'onerror="this.remove()">' +
            '</div>' +
            '<h3 class="mt-3 font-display text-base sm:text-lg">' + egg.title + '</h3>' +
            '<p class="text-xs text-dust sm:text-sm">' + egg.note + '</p>';
        card.addEventListener('click', () => openLightbox(egg));
        gallery.appendChild(card);
    });
}

// ---- Search: matches every word against the title, note and details ----
function applySearch() {
    const query = searchInput.value.trim().toLowerCase();
    const words = query.split(/\s+/).filter(Boolean);
    const results = EGGS.filter((egg) => {
        const text = (egg.title + ' ' + egg.note + ' ' + (egg.details || '')).toLowerCase();
        return words.every((w) => text.includes(w));
    });
    renderGallery(results);
    searchClear.hidden = !query;
    noResults.hidden = results.length > 0;
    searchStatus.textContent = query
        ? results.length + (results.length === 1 ? ' egg matches' : ' eggs match') + ' "' + searchInput.value.trim() + '"'
        : '';
}
searchInput.addEventListener('input', applySearch);
searchClear.addEventListener('click', () => { searchInput.value = ''; applySearch(); searchInput.focus(); });

renderGallery(EGGS);

// ---- Lightbox ----
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
function openLightbox(egg) {
    lbImg.style.display = '';
    lbImg.onerror = () => { lbImg.style.display = 'none'; };
    lbImg.src = egg.img;
    lbImg.alt = egg.title;
    document.getElementById('lb-title').textContent = egg.title;
    document.getElementById('lb-note').textContent = egg.note;
    lb.showModal();
}
document.getElementById('lb-close').addEventListener('click', () => lb.close());
lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
// Clicking the egg picture also closes the lightbox
const lbPicture = lbImg.parentElement;
lbPicture.style.cursor = 'zoom-out';
lbPicture.addEventListener('click', () => lb.close());

// ---- Contact form: opens the visitor's email app with the message filled in ----
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        status.className = 'min-h-[1.5rem] text-sm text-red-300';
        status.textContent = 'Please fill in your name, a valid email and a message.';
        return;
    }
    const name = form.name.value.trim();
    const body = form.message.value.trim() + '\n\n' + name + '\n' + form.email.value.trim();
    const subject = 'Message from ' + name + ' via EggDust.co.uk';
    status.className = 'min-h-[1.5rem] text-sm text-glow';
    status.textContent = 'Opening your email app. If nothing opens, copy the address above and write to me directly.';
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});

// ---- Copy address ----
const copyBtn = document.getElementById('copy');
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(EMAIL);
        copyBtn.textContent = 'Copied';
    } catch (err) {
        copyBtn.textContent = 'Press and copy the address above';
    }
    setTimeout(() => { copyBtn.textContent = 'Copy address'; }, 2500);
});

document.getElementById('year').textContent = new Date().getFullYear();

// ---- Hero egg strip: drifts slowly, and can be dragged or swiped sideways ----
(function () {
    const band = document.querySelector('.egg-band');
    if (!band) return;
    const firstImg = band.querySelector('.egg-track img');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Time for one full pass of the picture, read from --strip-duration in style.css
    const raw = getComputedStyle(band).getPropertyValue('--strip-duration').trim();
    const duration = (parseFloat(raw) || 120) * (raw.endsWith('ms') ? 0.001 : 1);

    let w = 0;            // width of one copy of the picture
    let pos = 0;          // our own (fractional) scroll position
    let last = 0;
    let resumeTimer = null;
    let userHolding = false;   // a mouse button or finger is down
    let paused = false;        // paused while the visitor is interacting
    let visible = true;

    function pauseForUser() {
        paused = true;
        clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => { if (!userHolding) paused = false; }, 2500);
    }

    // The picture is shown three times. Keep the position inside the middle copy;
    // jumping by exactly one copy's width is invisible, and gives an endless loop both ways.
    function wrap() {
        if (!w) return;
        let jumped = false;
        if (pos >= 2 * w) { pos -= w; jumped = true; }
        else if (pos < w) { pos += w; jumped = true; }
        // Only touch scrollLeft when we really jump, so a swipe's momentum is never interrupted
        if (jumped) band.scrollLeft = pos;
    }

    function measure() {
        const newW = firstImg.getBoundingClientRect().width;
        if (!newW) return;
        const frac = w ? (band.scrollLeft - w) / w : 0;   // keep the same place in the picture on resize
        w = newW;
        pos = w + frac * w;
        wrap();
    }

    // Scrolling by finger, trackpad or keyboard is picked up here
    band.addEventListener('scroll', () => {
        if (Math.abs(band.scrollLeft - pos) > 1.5) {   // not our own movement
            pos = band.scrollLeft;
            pauseForUser();
            wrap();
        }
    }, { passive: true });

    // Dragging with a mouse (touch already scrolls natively)
    let dragStartX = 0, dragStartPos = 0;
    band.addEventListener('pointerdown', (e) => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        userHolding = true;
        paused = true;
        dragStartX = e.clientX;
        dragStartPos = band.scrollLeft;
        band.classList.add('dragging');
        band.setPointerCapture(e.pointerId);
    });
    band.addEventListener('pointermove', (e) => {
        if (!band.classList.contains('dragging')) return;
        pos = dragStartPos - (e.clientX - dragStartX);
        band.scrollLeft = pos;
        wrap();
        if (pos !== band.scrollLeft && Math.abs(band.scrollLeft - pos) > 1.5) pos = band.scrollLeft;
        // after a wrap, carry on dragging from the new place
        dragStartX = e.clientX;
        dragStartPos = pos;
    });
    function endDrag() {
        if (!band.classList.contains('dragging')) return;
        band.classList.remove('dragging');
        userHolding = false;
        pauseForUser();
    }
    band.addEventListener('pointerup', endDrag);
    band.addEventListener('pointercancel', endDrag);

    // A finger on the strip pauses the drift until it lifts
    band.addEventListener('touchstart', () => { userHolding = true; paused = true; clearTimeout(resumeTimer); }, { passive: true });
    band.addEventListener('touchend', () => { userHolding = false; pauseForUser(); }, { passive: true });
    band.addEventListener('touchcancel', () => { userHolding = false; pauseForUser(); }, { passive: true });
    band.addEventListener('keydown', pauseForUser);
    band.addEventListener('dragstart', (e) => e.preventDefault());

    // Do not animate while the strip is off screen
    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; }).observe(band);
    }

    function tick(now) {
        const dt = Math.min(0.1, (now - (last || now)) / 1000);
        last = now;
        if (w && visible && !paused && !reduceMotion) {
            pos += (w / duration) * dt;
            wrap();
            band.scrollLeft = pos;
        }
        requestAnimationFrame(tick);
    }

    function start() {
        measure();
        requestAnimationFrame(tick);
    }
    if (firstImg.complete && firstImg.naturalWidth) start();
    else {
        firstImg.addEventListener('load', start, { once: true });
        firstImg.addEventListener('error', () => console.warn('EggDust: could not load images/egg-strip.jpg. Check it is in the images folder with this exact name.'), { once: true });
    }
    window.addEventListener('resize', measure);
})();
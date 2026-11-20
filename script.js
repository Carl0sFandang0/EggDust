// The egg list is in eggs.js (edit that file to add or change eggs).
if (typeof EGGS === 'undefined') {
    console.error('EggDust: eggs.js did not load. Check it is uploaded next to index.html and loaded before script.js.');
}


const EMAIL = 'EggDust@mail.co.uk';

// ---- Gallery ----
// How many eggs show at once. "Load more eggs" adds this many each time it is pressed.
const EGGS_PER_PAGE = 10;

const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('search');
const searchClear = document.getElementById('search-clear');
const searchStatus = document.getElementById('search-status');
const noResults = document.getElementById('no-results');
const loadMoreWrap = document.getElementById('load-more-wrap');
const loadMoreBtn = document.getElementById('load-more');

// A fresh random order every time the page loads (searches keep this same order)
const shuffledEggs = EGGS.slice();
for (let i = shuffledEggs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledEggs[i], shuffledEggs[j]] = [shuffledEggs[j], shuffledEggs[i]];
}

let currentList = [];   // the eggs that match the current search (or all eggs)
let shownCount = 0;     // how many of them are on screen so far

function createCard(egg) {
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
    return card;
}

// Adds the next batch of eggs underneath the ones already shown
function showMore() {
    const next = currentList.slice(shownCount, shownCount + EGGS_PER_PAGE);
    next.forEach((egg) => gallery.appendChild(createCard(egg)));
    shownCount += next.length;
    updateStatus();
}

// Starts a fresh list (first load, or a new search) from the first batch
function renderGallery(list) {
    currentList = list;
    shownCount = 0;
    gallery.innerHTML = '';
    showMore();
}

// The line under the search box, and the Load more button
function updateStatus() {
    const query = searchInput.value.trim();
    const total = currentList.length;
    const parts = [];
    if (query) parts.push(total + (total === 1 ? ' egg matches' : ' eggs match') + ' "' + query + '"');
    if (total > EGGS_PER_PAGE) parts.push('Showing ' + shownCount + ' of ' + total);
    searchStatus.textContent = parts.join('. ');
    loadMoreWrap.hidden = shownCount >= total;
}
loadMoreBtn.addEventListener('click', showMore);

// ---- Search: matches every word against the title, note, details and hidden keywords ----
function applySearch() {
    const query = searchInput.value.trim().toLowerCase();
    const words = query.split(/\s+/).filter(Boolean);
    const results = shuffledEggs.filter((egg) => {
        const keywords = Array.isArray(egg.keywords) ? egg.keywords.join(' ') : (egg.keywords || '');
        const text = (egg.title + ' ' + egg.note + ' ' + (egg.details || '') + ' ' + keywords).toLowerCase();
        return words.every((w) => text.includes(w));
    });
    renderGallery(results);
    searchClear.hidden = !query;
    noResults.hidden = results.length > 0;
}
searchInput.addEventListener('input', applySearch);
searchClear.addEventListener('click', () => { searchInput.value = ''; applySearch(); searchInput.focus(); });

renderGallery(shuffledEggs);

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

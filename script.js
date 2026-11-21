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

// ---- Search: matches every word against the title, note and hidden keywords (not the longer details) ----
function applySearch() {
    const query = searchInput.value.trim().toLowerCase();
    const words = query.split(/\s+/).filter(Boolean);
    const results = shuffledEggs.filter((egg) => {
        const keywords = Array.isArray(egg.keywords) ? egg.keywords.join(' ') : (egg.keywords || '');
        const text = (egg.title + ' ' + egg.note + ' ' + keywords).toLowerCase();
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

// ---- Hero egg: the open-eye photo blinks at random times by briefly showing the closed-eye photo on top ----
(function () {
    const BLINK_MIN_MS = 500;    // shortest wait between blinks (half a second)
    const BLINK_MAX_MS = 5000;   // longest wait between blinks (five seconds)
    const BLINK_HOLD_MS = 120;   // how long the eye stays shut. Was 160

    const egg = document.getElementById('egg-eye');
    if (!egg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;   // stays open

    let onScreen = true;
    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => { onScreen = entries[0].isIntersecting; }).observe(egg);
    }

    function nextBlink() {
        const wait = BLINK_MIN_MS + Math.random() * (BLINK_MAX_MS - BLINK_MIN_MS);
        setTimeout(() => {
            if (document.hidden || !onScreen) { nextBlink(); return; }   // no blinking while nobody can see it
            egg.classList.add('blinking');
            setTimeout(() => { egg.classList.remove('blinking'); nextBlink(); }, BLINK_HOLD_MS);
        }, wait);
    }

    // Wait until both photos have loaded so a blink never shows a half-loaded egg
    const imgs = Array.from(egg.querySelectorAll('img'));
    Promise.all(imgs.map((img) => img.decode ? img.decode().catch(() => {}) : Promise.resolve())).then(nextBlink);
})();

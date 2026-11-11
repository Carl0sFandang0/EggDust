// ---- Your eggs: edit this list ----
// Put photos in an "images" folder and match the file names below.
const EGGS = [
    { title: 'Agony poem', note: 'Duck egg. Poem about Agony. Blood stained in watercolour', img: 'images/agony.jpg' },
    { title: 'Bumble bee', note: 'Duck egg. An abstract bumble bee drawn in ballpoint and acrylic.', img: 'images/bee.jpg' },
    { title: 'Abstract pattern', note: 'Duck egg. Abstract pattern in blue watercolour and gold leaf.', img: 'images/blue and gold.jpg' },
    { title: 'Abstract pattern', note: 'Duck egg. Abstract pattern in green watercolour and gold leaf.', img: 'images/green and gold.jpg' },
    { title: 'Cats n Dogs', note: 'Duck egg. Drawn in felt tip and acrylic.', img: 'images/cats n dogs.jpg' },
    { title: 'Simple flower', note: 'Duck egg. Child like flower drawing in fine line felt tip and acrylic.', img: 'images/childlike flower.jpg' },
    { title: 'Creepy Clown', note: 'Duck egg. Creepy clown in ink and acrylic.', img: 'images/clown.jpg' },
    { title: 'Sunflower', note: 'Duck egg. Simplistic sunflower in ink and acrylic.', img: 'images/sunflower.jpg' },
    { title: 'Tulip', note: 'Duck egg. Simplistic tulip in ink and acrylic.', img: 'images/tulip.jpg' },
    { title: 'Worm', note: 'Duck egg. The worm that turned. Ballpoint and watercolour.', img: 'images/worm.jpg' }
];

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

// ---- Search: matches every word against the title and note ----
function applySearch() {
    const query = searchInput.value.trim().toLowerCase();
    const words = query.split(/\s+/).filter(Boolean);
    const results = EGGS.filter((egg) => {
        const text = (egg.title + ' ' + egg.note).toLowerCase();
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

// ---- Hero egg: start the frame animation once the image strip has loaded ----
const eggAnim = document.getElementById('egg-anim');
const eggStrip = new Image();
const startEgg = () => eggAnim.classList.add('play');
eggStrip.onload = startEgg;
eggStrip.onerror = () => {
    console.warn('EggDust: could not load images/egg-animation.svg. Check the file is in the images folder with this exact name.');
    startEgg();
};
eggStrip.src = 'images/egg-animation.svg';
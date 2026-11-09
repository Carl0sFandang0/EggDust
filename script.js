// ---- Your eggs: edit this list ----
// Put photos in an "images" folder and match the file names below.
const EGGS = [
  { title: 'Milled lattice',   note: 'Goose egg, milled diamond pattern.',  img: 'images/egg-1.jpg' },
  { title: 'Inked wildflowers', note: 'Goose egg, drawn in ink.',            img: 'images/egg-2.jpg' },
  { title: 'Milled spiral',    note: 'Goose egg, milled spiral band.',       img: 'images/egg-3.jpg' },
  { title: 'Inked heron',      note: 'Goose egg, drawn in ink.',             img: 'images/egg-4.jpg' },
  { title: 'Milled bands',     note: 'Goose egg, milled geometric bands.',   img: 'images/egg-5.jpg' },
  { title: 'Drawn and milled', note: 'Goose egg, ink drawing with milling.', img: 'images/egg-6.jpg' }
];

const EMAIL = 'EggDust@mail.co.uk';

// ---- Gallery ----
const gallery = document.getElementById('gallery');
EGGS.forEach((egg, i) => {
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
    '<h3 class="mt-3 font-display text-lg">' + egg.title + '</h3>' +
    '<p class="text-sm text-dust">' + egg.note + '</p>';
  card.addEventListener('click', () => openLightbox(egg));
  gallery.appendChild(card);
});

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

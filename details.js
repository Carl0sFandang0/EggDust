// Adds a "Details" button to the lightbox.
// Give any egg in the EGGS list (script.js) a `details` text and the button appears for that egg.
// Separate paragraphs with a blank line. Eggs without `details` show no button.
(function () {
  const lb = document.getElementById('lightbox');
  const btn = document.getElementById('lb-details-btn');
  const panel = document.getElementById('lb-details');
  if (!lb || !btn || !panel || typeof openLightbox !== 'function') return;

  function setOpen(open) {
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? 'Hide details' : 'Details';
    if (open) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      panel.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
    }
  }

  btn.addEventListener('click', () => setOpen(panel.hidden));

  // Wrap the existing openLightbox so the details are filled in each time an egg is opened
  const originalOpen = openLightbox;
  openLightbox = function (egg) {
    originalOpen(egg);
    panel.replaceChildren();
    const text = (egg.details || '').trim();
    text.split(/\n\s*\n/).filter(Boolean).forEach((para) => {
      const p = document.createElement('p');
      p.textContent = para.trim();
      panel.appendChild(p);
    });
    btn.hidden = !text;
    setOpen(false);
    lb.scrollTop = 0;
  };
})();

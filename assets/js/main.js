// Copy-to-clipboard for any .copy-btn[data-copy] element
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.copy-btn[data-copy]');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const value = btn.getAttribute('data-copy');
      const original = btn.textContent;
      navigator.clipboard.writeText(value).then(function () {
        btn.textContent = '✓ Copied';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 1500);
      });
    });
  });

  // Testimonial carousel
  document.querySelectorAll('[data-testimonial-carousel]').forEach(function (carousel) {
    const quotes = carousel.querySelectorAll('.quote');
    const controls = carousel.querySelector('.carousel-controls');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    const prevBtn = carousel.querySelector('[data-direction="prev"]');
    const nextBtn = carousel.querySelector('[data-direction="next"]');
    let current = 0;

    if (quotes.length === 0) return;

    // Single quote: just show it, leave controls hidden
    if (quotes.length === 1) {
      quotes[0].classList.add('active');
      return;
    }

    // Multiple quotes: reveal controls and wire them up
    controls.removeAttribute('hidden');

    // Build dots
    quotes.forEach(function (_, i) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.dataset.index = i;
      dot.addEventListener('click', function () { show(i); });
      dotsContainer.appendChild(dot);
    });

    function show(index) {
      quotes.forEach(function (q, i) { q.classList.toggle('active', i === index); });
      dotsContainer.querySelectorAll('.carousel-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === index);
      });
      current = index;
    }

    prevBtn.addEventListener('click', function () {
      show((current - 1 + quotes.length) % quotes.length);
    });

    nextBtn.addEventListener('click', function () {
      show((current + 1) % quotes.length);
    });

    show(0);
  });
});

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
});

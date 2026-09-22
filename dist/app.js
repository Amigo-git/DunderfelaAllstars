// Add the band's final destination URLs here when they are ready.
const destinations = {
  youtube: null,
  facebook: null,
  instagram: null,
  videos: null,
  pressKit: null,
  liveShows: null,
};

const notice = document.querySelector('.notice');
let noticeTimer;
function showNotice(message) {
  clearTimeout(noticeTimer);
  notice.textContent = message;
  notice.classList.add('visible');
  noticeTimer = setTimeout(() => notice.classList.remove('visible'), 3500);
}

document.querySelectorAll('[data-destination]').forEach(button => {
  const destination = destinations[button.dataset.destination];
  if (destination) {
    const link = document.createElement('a');
    link.className = button.className;
    link.style.cssText = button.style.cssText;
    link.setAttribute('aria-label', button.getAttribute('aria-label') || button.textContent.trim());
    link.href = destination;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.textDecoration = 'none';
    link.replaceChildren(...button.childNodes);
    button.replaceWith(link);
  } else {
    button.addEventListener('click', () => {
      if (button.dataset.fallbackDialog) {
        document.getElementById(button.dataset.fallbackDialog).showModal();
      } else {
        showNotice(`${button.getAttribute('aria-label') || button.textContent.trim()}-lenke kommer snart!`);
      }
    });
  }
});

document.querySelectorAll('[data-dialog]').forEach(button => {
  button.addEventListener('click', () => document.getElementById(button.dataset.dialog).showModal());
});
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
});

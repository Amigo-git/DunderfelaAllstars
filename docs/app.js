const gallery = document.getElementById('gallery-dialog');
const notice = document.querySelector('.notice');
let timer;
let galleryOpener;
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => { galleryOpener = button; gallery.showModal(); }));
gallery.querySelector('.close-dialog').addEventListener('click', () => gallery.close());
gallery.addEventListener('close', () => galleryOpener?.focus());
gallery.addEventListener('click', event => { const b=gallery.getBoundingClientRect(); if(event.target===gallery && (event.clientX<b.left || event.clientX>b.right || event.clientY<b.top || event.clientY>b.bottom)) gallery.close(); });
document.querySelectorAll('[data-soon]').forEach(button => button.addEventListener('click', () => { clearTimeout(timer); notice.textContent = button.dataset.soon + ' — kommer snart!'; notice.classList.add('visible'); timer = setTimeout(() => notice.classList.remove('visible'), 3500); }));

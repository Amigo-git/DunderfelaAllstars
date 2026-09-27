const gallery = document.getElementById('gallery-dialog');
const notice = document.querySelector('.notice');
const sketchMarks = [
  'M13 40l-16-11 M8 77l-19 2 M12 122l-15 13 M223 37l17-12 M229 81l18-1 M222 124l16 12',
  'M10 33l-13-7 M7 70l-17 1 M13 131l-15 14 M220 45l17-9 M226 91l19 3 M218 139l16 10',
  'M15 48L-2 39 M8 94l-17 5 M15 138L1 151 M226 28l16-9 M231 73l18 1 M225 116l14 14',
  'M12 39L-4 28 M7 91l-18 4 M16 137L1 149 M221 33l18-8 M229 81l18 1 M221 125l17 13',
  'M13 49L-3 43 M7 86l-17-2 M13 126L-2 140 M225 40l16-12 M232 90l17 3 M224 133l16 10',
  'M16 32L2 23 M8 74l-18 1 M12 119l-15 12 M219 47l18-8 M227 98l18 4 M218 141l16 11',
  'M11 42L-4 35 M8 89l-17 3 M16 132L0 145 M222 31l17-11 M230 76l19-2 M222 121l15 15',
  'M15 28L0 21 M7 71l-17-1 M14 126L-2 137 M225 45l16-9 M232 88l18 2 M221 140l17 9',
  'M10 49L-5 41 M8 96l-18 4 M14 138L0 151 M220 34l17-11 M228 79l19 1 M221 122l16 15',
  'M14 36L-2 27 M7 83l-18 1 M15 130L0 143 M225 42l16-10 M232 94l18 3 M221 137l16 12',
  'M12 30L-3 23 M7 75l-18-2 M14 122L-1 136 M221 49l18-7 M230 90l18 4 M220 143l17 10',
  'M15 45L0 37 M8 91l-17 4 M14 136L-1 148 M224 29l16-11 M231 72l18-1 M222 118l17 14'
].map((path, index) => `<svg class="ink-marks sketch-mark sketch-mark-${index + 1}" viewBox="0 0 240 180" preserveAspectRatio="none" aria-hidden="true"><path d="${path}"/><path class="echo" d="${path}" transform="translate(2 2)"/></svg>`);
document.querySelectorAll('.sketch-target').forEach((target, index) => target.insertAdjacentHTML('beforeend', sketchMarks[index]));
let timer;
let galleryOpener;
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => { galleryOpener = button; gallery.showModal(); }));
gallery.querySelector('.close-dialog').addEventListener('click', () => gallery.close());
gallery.addEventListener('close', () => galleryOpener?.focus());
gallery.addEventListener('click', event => { const b=gallery.getBoundingClientRect(); if(event.target===gallery && (event.clientX<b.left || event.clientX>b.right || event.clientY<b.top || event.clientY>b.bottom)) gallery.close(); });
document.querySelectorAll('[data-soon]').forEach(button => button.addEventListener('click', () => { clearTimeout(timer); notice.textContent = button.dataset.soon + ' — kommer snart!'; notice.classList.add('visible'); timer = setTimeout(() => notice.classList.remove('visible'), 3500); }));

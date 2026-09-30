const notice = document.querySelector('.notice');
let timer;
document.querySelectorAll('[data-soon]').forEach(button => button.addEventListener('click', () => { clearTimeout(timer); notice.textContent = button.dataset.soon + ' — kommer snart!'; notice.classList.add('visible'); timer = setTimeout(() => notice.classList.remove('visible'), 3500); }));

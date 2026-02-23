const modalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('#modal');

modalBtn.addEventListener('click', () => {
    modal.classList.add('opened');
});

modal.addEventListener('click', () => {
    modal.classList.remove('opened');
});

const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const modal = document.querySelector('.modal');

btnOpen.addEventListener('click', () => {
    modal.classList.add('modalOpened');
});

btnClose.addEventListener('click', () => {
    modal.classList.remove('modalOpened');
});

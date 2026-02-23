const btnOpen = document.getElementById('btnOpen');
const btnClose = document.querySelector('.btnClose');
const container = document.querySelector('.mobileContainer');

btnOpen.addEventListener('click', () => {
    container.classList.add('sideMenuShown');
});

btnClose.addEventListener('click', () => {
    container.classList.remove('sideMenuShown');
});

const card = document.querySelector('#card');

card.addEventListener('mouseenter', () => {
    card.classList.add('active');
});

card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
});

const button = document.querySelector('button');

button.addEventListener('mouseenter', () => {
    document.body.classList.add('active');
});

button.addEventListener('mouseleave', () => {
    document.body.classList.remove('active');
});

const lighter = document.getElementById('lighter');
const layer = document.getElementById('layer');

layer.addEventListener('mouseenter', () => {
    lighter.classList.add('lighterActive');
});

layer.addEventListener('mouseleave', () => {
    lighter.classList.remove('lighterActive');
});

layer.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;

    lighter.style.left = `${offsetX - 80}px`;
    lighter.style.top = `${offsetY - 80}px`;
});


const box = document.getElementById('box');

const HALF_SIZE = 50;

box.addEventListener('mousedown', (event) => {
    const { clientX, clientY } = event;

    box.classList.add('grabbingBox');
    box.setAttribute('grabbed', 'true');

    box.style.top = (clientY - HALF_SIZE) + 'px';
    box.style.left = (clientX - HALF_SIZE) + 'px'; 
});

box.addEventListener('mousemove', (event) => {
    if (box.getAttribute('grabbed') !== 'true')
        return;

    const { clientX, clientY } = event;

    box.style.top = (clientY - HALF_SIZE) + 'px';
    box.style.left = (clientX - HALF_SIZE) + 'px'; 
});

box.addEventListener('mouseup', () => {
    box.removeAttribute('grabbed');
    box.classList.remove('grabbingBox');
    box.style.top = 'calc(50% - 50px)';
    box.style.left = 'calc(50% - 50px)';
});

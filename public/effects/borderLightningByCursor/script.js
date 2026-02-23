const card = document.getElementById('card');
const light = document.getElementById('light');

const cardRect = card.getBoundingClientRect();
const LIGHT_SIZE = 80;

function getExtremum(value, min, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    const X = clientX - cardRect.left - (LIGHT_SIZE / 2);
    const Y = clientY - cardRect.top - (LIGHT_SIZE / 2);

    light.style.left = `${getExtremum(X, 0, 230 - LIGHT_SIZE)}px`;
    light.style.top = `${getExtremum(Y, 0, 230 - LIGHT_SIZE)}px`;
});

card.addEventListener('mouseenter', () => {
    light.style.transition = 'all .3s';
    card.classList.add('hovered');
});

card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
    
    setTimeout(() => {
        light.style.transition = 'none';
    }, 300);
});


const slider  = document.getElementById('slider');
const thumb = document.getElementById('thumb');
const display = document.getElementById('display');

const SLIDER_SIZE = 300;
const THUMB_SIZE = 30;
const HALF_THUMB = THUMB_SIZE / 2;
const MAX_VALUE = SLIDER_SIZE - THUMB_SIZE;

function getExtremum(value, min, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

function getPercentValue(value, max) {
    return Math.round(value / (max / 100));
}

let thumbHolded = false;

document.addEventListener('mousemove', (event) => {
    if (!thumbHolded) return;

    const { clientX } = event;

    const translated = getExtremum(
        clientX - slider.offsetLeft - HALF_THUMB,
        0,
        MAX_VALUE
    );

    thumb.style.left = translated + 'px';

    display.innerText = getPercentValue(translated, MAX_VALUE) + '%';
});

thumb.addEventListener('mousedown', () => {
    thumbHolded = true;
    thumb.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    thumbHolded = false;
    thumb.style.cursor = 'grab';
});

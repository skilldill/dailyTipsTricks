const button = document.querySelector('button');
let count = 0;
button.addEventListener('click', () => {
    count += 1;
    button.innerText = 'Clicks: ' + count;
});

const duckCursor = document.querySelector('.duckCursor');
const babyChicks = document.querySelectorAll('.babyChick');

for (let i = 0; i < babyChicks.length; i++) {
    babyChicks[i].style.transition = `all ${0.5 + i * 0.25}s`;
}

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    duckCursor.style.top = clientY + 'px';
    duckCursor.style.left = clientX + 'px';

    for (let i = 0; i < babyChicks.length; i++) {
        babyChicks[i].style.top = clientY + 20 + 'px';
        babyChicks[i].style.left = clientX + 15 + 'px';
    }
});


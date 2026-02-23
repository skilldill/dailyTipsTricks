const button = document.querySelector('button');
let count = 0;
button.addEventListener('click', () => {
    count += 1;
    button.innerText = 'Clicks: ' + count;
})

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.lineWidth = 1;
ctx.strokeStyle = 'pink';

let isDraw = false;

document.addEventListener('mousedown', (event) => {
    const { clientX, clientY } = event;

    isDraw = true;
    ctx.moveTo(clientX, clientY);
    document.body.style.cursor = 'pointer';
});

document.addEventListener('mouseup', () => {
    isDraw = false;
    document.body.style.cursor = 'default';
});

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    if (isDraw) {
        ctx.lineTo(clientX, clientY);
        ctx.stroke();
    }
});

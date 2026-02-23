const range = document.querySelector('input');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 200;

let angle = 0;
let velocity = 0.1;
const amplitude = 50;
const freq = 0.08;

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * freq + angle) * amplitude;
        ctx.lineTo(x, y);
    }

    ctx.strokeStyle = '#5353c3';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    angle += velocity;
    requestAnimationFrame(drawWave);
}

drawWave();

range.addEventListener('input', (event) => {
    velocity = parseFloat(event.target.value);
});



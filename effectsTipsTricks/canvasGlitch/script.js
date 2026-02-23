const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const text = "Tips & Tricks";
const fontSize = 70;
ctx.font = `${fontSize}px Arial`;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillStyle = '#ff000066';

const COLORS = [
    '#ff8c9f', 
    '#00ff00', 
    '#5353c3',
];

const COMPOSITE_MODES = ['lighter', 'source-over'];

function drawText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    for (let i = 0; i < 20; i++) {
        const sliceHeight = Math.random() * 10 + 5;
        const startY = Math.random() * canvas.height;
        const offsetX = Math.random() * 40 - 20;
        const imageData = ctx.getImageData(0, startY, canvas.width, sliceHeight);
        ctx.putImageData(imageData, offsetX, startY);
    }

    for (let i = 0; i < 3; i++) {
        const offsetX = Math.random() * 10 - 4;
        const offsetY = Math.random() * 5 - 2;
        ctx.globalCompositeOperation = 
            COMPOSITE_MODES[Math.floor(Math.random() * 2)];
        ctx.fillStyle = COLORS[i];
        ctx.fillText(
            text,
            canvas.width / 2 + offsetX,
            canvas.height / 2 + offsetY
        );
    }
}

let limiter = 0;

drawText();

function animate() {
    if (limiter % 6 === 0)
        drawText();
    
    limiter++;
    requestAnimationFrame(animate);
}

animate();

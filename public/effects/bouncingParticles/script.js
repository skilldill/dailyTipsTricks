const canvas = document.querySelector('canvas');
canvas.width = 400;
canvas.height = 700;

const ctx = canvas.getContext('2d');

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = (Math.random() - 0.5) * 15;
        this.dy = (Math.random() - 0.5) * 15;
        this.draw();
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#5353c3';
        ctx.fill();
        ctx.closePath();
    }

    move() {
        if (this.x <= 0 || this.x >= (canvas.width -3)) this.dx *= -1;
        if (this.y <= 0 || this.y >= (canvas.height -3)) this.dy *= -1;
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

const particles = [];

function generateParticles(count, x, y) {
    const particlesList = [];
    for (let i = 0; i < count; i++) {
        particlesList.push(
            new Particle(x, y)
        );
    }

    return particlesList;
}

canvas.addEventListener('click', (event) => {
    const { offsetX, offsetY } = event;
    particles.push(...generateParticles(20, offsetX, offsetY));
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => particle.move());
    requestAnimationFrame(animate);
}

animate();

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const mouseCoords = { x: 0, y: 0 };

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    mouseCoords.x = clientX;
    mouseCoords.y = clientY;
});

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 3;
        this.dx = (Math.random() - 0.5) * 2;
        this.dy = (Math.random() - 0.5) * 2;
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
    }
}

for (let i = 0; i < 200; i++) {
    particles.push(new Particle(
        Math.random() * canvas.width, 
        Math.random() * canvas.height
    ));
}

// Отрисовка линий между частицами
function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 500) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(83, 83, 195, ${1 - distance / 100})`;
                // ctx.strokeStyle = `#ffffff`;
                ctx.lineWidth = 1;
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function connectWithCursor() {
    for (let i = 0; i < particles.length; i++) {
        const dx = particles[i].x - mouseCoords.x;
        const dy = particles[i].y - mouseCoords.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseCoords.x, mouseCoords.y);
            // ctx.strokeStyle = `rgba(83, 83, 195, ${1 - distance / 100})`;
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
            // ctx.strokeStyle = `#5353c388`;
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => particle.update());
    connectParticles();
    connectWithCursor();

    requestAnimationFrame(animate);
}

animate();

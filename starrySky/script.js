const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.delta = getRandom(1, 3) / 3;
        this.radius = getRandom(2, 4)
        this.color = '#a9bfddd6';
    }

    render() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    
    move() {
        this.x = this.x >= (window.innerWidth + 10) ? - 10 :
            this.x + this.delta;
        this.render();
    }
}

const stars = [];

function generateStars() {
    for (let y = 0; y < window.innerHeight; y += 10) {
        for (let x = 0; x < window.innerHeight; x += 10) {
            const indicator = getRandom(0, 600);

            if (indicator % 30 === 0) 
                stars.push(new Star(x, y));
        }
    }
}

generateStars();

let counter = 0;

function animateStars() {
    if (counter % 2) {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        stars.forEach((star) => star.move());
    }

    counter++;
    requestAnimationFrame(animateStars);
}

animateStars();

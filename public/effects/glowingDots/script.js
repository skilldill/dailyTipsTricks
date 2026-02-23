const glowingDots = document.getElementById('glowingDots');

const verticalsLayer = document.createElement('div');
verticalsLayer.classList.add('layer');

const horizontalsLayer = document.createElement('div');
horizontalsLayer.classList.add('layer');
horizontalsLayer.classList.add('horizontal');

const light = document.createElement('div');
light.classList.add('light');

const verticalsCount = glowingDots.offsetWidth / 22;
const horizontalsCount = glowingDots.offsetHeight / 22;

for (let i = 0; i < verticalsCount; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    verticalsLayer.appendChild(line);
}

for (let i = 0; i < horizontalsCount; i++) {
    const line = document.createElement('div');
    line.classList.add('line');
    horizontalsLayer.appendChild(line);
}

glowingDots.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    light.style.top = `${clientY - 150}px`;
    light.style.left = `${clientX - 150}px`;
});

glowingDots.appendChild(horizontalsLayer);
glowingDots.appendChild(verticalsLayer);
glowingDots.appendChild(light);

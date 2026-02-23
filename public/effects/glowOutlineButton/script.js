const allGlowBtns = document.querySelectorAll('button[glowOutline]');

function addGlowEffect() {
    for (let btn of allGlowBtns) {
        const text = btn.textContent;
        btn.textContent = '';

        const layer = document.createElement('div');
        layer.classList.add('buttonLayer');
        layer.innerText = text;

        const lighter = document.createElement('div');
        lighter.classList.add('lighter');

        btn.appendChild(layer);
        btn.appendChild(lighter);

        btn.addEventListener('mouseenter', () => {
            btn.classList.add('hovered');
            setTimeout(() => {
                btn.classList.add('outlined');
            }, 700)
        });

        btn.addEventListener('mouseleave', () => {
            btn.classList.remove('hovered');
            btn.classList.remove('outlined');
        });
    }
}

addGlowEffect();

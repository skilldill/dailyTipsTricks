const allGlitchTexts = document.querySelectorAll('[glitch]');

function addGlitchEffect() {
    for (let text of allGlitchTexts) {
        text.innerHTML = `<span style="opacity: 0">${text.innerText}</span>`;
        text.setAttribute('dataText', text.innerText);

        const halfTop = document.createElement('div');
        const topPartText = document.createElement('h1');
        topPartText.innerText = text.innerText;
        halfTop.appendChild(topPartText);
        halfTop.classList.add('halfTop');
        
        const halfBottom = document.createElement('div');
        const bottomPartText = document.createElement('h1');
        bottomPartText.innerText = text.innerText;
        bottomPartText.style.transform = 'translateY(-50%)';
        halfBottom.appendChild(bottomPartText);
        halfBottom.classList.add('halfBottom');

        text.appendChild(halfTop);
        text.appendChild(halfBottom);

        text.addEventListener('mouseenter', () => {
            text.classList.add('glitched');
        });

        text.addEventListener('mouseleave', () => {
            text.classList.remove('glitched');
        });
    }
}

addGlitchEffect();
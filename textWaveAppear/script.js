const waveable = document.querySelector('[waveable]');

function waveAppearEffect() {
    const text = waveable.textContent;
    waveable.textContent = '';

    for(let i = 0; i < text.length; i++) {
        const letterEl = document.createElement('span');
        letterEl.textContent = text[i];
        letterEl.classList.add('hideWaveable');

        waveable.appendChild(letterEl);

        if(i < text.length / 2) {
            setTimeout(() => {
                letterEl.classList.add('showWaveable');
            }, (200 * text.length / 2) - i * 200)
        } else {
            setTimeout(() => {
                letterEl.classList.add('showWaveable');
            }, ((i + 1) - text.length / 2) * 200)
        }
    }
}

waveAppearEffect();

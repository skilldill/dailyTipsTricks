const snowfallLayer = document.querySelector('.snowfallLayer');
const buttonWinter = document.querySelector('button');

buttonWinter.addEventListener('click', () => {
    snowfallLayer.classList.remove('snowfallHidden');
});

function getRandom(max) {
    return Math.round(Math.random() * max);
}

function generateSnowflakes() {
    for (let y = -200; y < window.innerHeight; y++) {
        for (let x = 0; x < window.innerWidth; x++) {
            if (getRandom(10000) === 20) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');

                snowflake.style.top = y + 'px';
                snowflake.style.left = x + 'px';

                if (x % 3 === 0) {
                    snowflake.style.animation = 
                        'fall 10s 0s infinite linear';
                }
                if (x % 5 === 0) {
                    snowflake.style.animation = 
                        'fall 7s 0s infinite linear';
                }
                if (x % 7 === 0) {
                    snowflake.style.animation = 
                        'fall 20s 0s infinite linear';
                }
                if (x % 9 === 0) {
                    snowflake.style.animation = 
                        'fall 25s 0s infinite linear';
                }

                snowfallLayer.appendChild(snowflake);
            }
        }
    }
}

generateSnowflakes();


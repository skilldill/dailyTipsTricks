const progressBar = document.querySelector('.progressBar');
const progressFill = document.createElement('div');
progressFill.classList.add('progressFill');

progressBar.appendChild(progressFill);

let value = 0;

progressBar.addEventListener('click', () => {
    value += 25;

    progressFill.style.width = value + '%';

    if (value === 100) {
        setTimeout(() => {
            progressBar.classList.add('done');
        }, 200)
    }
});

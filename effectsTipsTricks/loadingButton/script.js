const loadingBtns = document.querySelectorAll('[loading]');

function addLoadingEffect() {
    for (let btn of loadingBtns) {
        const loader = document.createElement('div');
        loader.classList.add('loader');
        btn.appendChild(loader);

        btn.addEventListener('click', () => {
            btn.classList.add('loading');

            setTimeout(() => {
                btn.classList.remove('loading');
            }, 1000)
        });
    }
}

addLoadingEffect();
const allParallaxEls = 
    document.querySelectorAll('[parallax]');

const MIDDLE = window.innerWidth / 2;

document.addEventListener('mousemove', (event) => {
    const { clientX } = event;

    for (let el of allParallaxEls) {
        const translate = (clientX - MIDDLE) * 
            parseFloat(el.getAttribute('parallax'));

        el.style.transform = `translateX(${-translate}px)`;
    }
});

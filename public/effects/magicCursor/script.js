function createStar(left, top, flyClass) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.classList.add(flyClass);
    star.style.left = `${left}px`;
    star.style.top = `${top}px`;
    document.body.appendChild(star);
    return star;
}

document.addEventListener('click', (event) => {
    const { pageX, pageY } = event;

    const stars = [
        createStar(pageX, pageY, 'flyTopRight'),
        createStar(pageX, pageY, 'flyBottomRight'),
        createStar(pageX, pageY, 'flyBottomLeft'),
        createStar(pageX, pageY, 'flyTopLeft'),
        createStar(pageX, pageY, 'flyRight'),
        createStar(pageX, pageY, 'flyLeft'),
    ];

    setTimeout(() => {
        stars.forEach((star) => {
            document.body.removeChild(star);
        })
    }, 300);
});


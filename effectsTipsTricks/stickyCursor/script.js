const allStickyEls = document
    .querySelectorAll('[sticky]');

function handleMouseEnter(event) {
    setTimeout(() => {
        event.target.classList.add('sticky');
    }, 300)
}

function handleMouseMove(event) {
    const { offsetX, offsetY, target } = event;

    const stickyValue = parseFloat(target.getAttribute('sticky'));
    const halfWidth = target.offsetWidth / 2;
    const halfHeight = target.offsetHeight / 2;

    const translateX = (offsetX - halfWidth) * stickyValue;
    const translateY = (offsetY - halfHeight) * stickyValue;

    target.style.transform = 
        `translate(${translateX}px, ${translateY}px)`
}

function handleMouseLeave(event) {
    event.target.classList.remove('sticky');
    event.target.style.transform = 'translate(0px, 0px)';
}

function addStickyEffect() {
    for (let el of allStickyEls) {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
    }
}

addStickyEffect();

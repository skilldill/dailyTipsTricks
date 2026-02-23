const card = document.getElementById('card');

function removeAllTurns() {
    card.classList.remove('turnToRight');
    card.classList.remove('turnToLeft');
}

card.addEventListener('mousemove', (event) => {
    const { offsetX } = event;

    const center = card.offsetWidth / 2;

    if (offsetX > center - 20 && offsetX < center + 20) {
        removeAllTurns();
    }

    if (offsetX > center + 20) {
        card.classList.remove('turnToLeft');
        card.classList.add('turnToRight');
    }

    if (offsetX < center - 20) {
        card.classList.remove('turnToRight');
        card.classList.add('turnToLeft');
    }
});

card.addEventListener('mouseleave', () => {
    removeAllTurns();
});
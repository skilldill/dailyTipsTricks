let clicksCount = 0;

const btnCounter = document.getElementById('counter');

btnCounter.addEventListener('click', () => {
    console.log('click');
    clicksCount += 1;
    btnCounter.innerText = `Clicks count: ${clicksCount}`;
});

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (event) => {
    const { pageX, pageY } = event;

    cursor.style.left = `${pageX - 10}px`;
    cursor.style.top = `${pageY - 10}px`;
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('cursorMouseDown');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('cursorMouseDown');
});

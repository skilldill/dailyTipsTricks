const container = document.querySelector('.container');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    container.style.backgroundPosition = 
        `${clientX / 10}px ${clientY / 10}px`;
});


const fakeCursor = document.getElementById('fakeCursor');
const layers = document.querySelectorAll('[layer]');

function addZindexForLayers() {
    for(let block of layers) {
        const layerValue = parseInt(block.getAttribute('layer'));

        block.style.zIndex = layerValue * 5;
    }
}

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;

    fakeCursor.style.top = `${clientY - 15}px`;
    fakeCursor.style.left = `${clientX - 15}px`;
});

addZindexForLayers();

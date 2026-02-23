const tiles = document.querySelector('.tiles');

const rowsCount = window.innerHeight / 23;
const tilesInRowCount = window.innerWidth / 23;

const allTiles = [];

for (let y = 0; y < rowsCount; y++) {
    const row = document.createElement('div');
    row.classList.add('tilesRow');
    tiles.appendChild(row);

    allTiles.push([]);

    for (let x = 0; x < tilesInRowCount; x++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        allTiles[y].push(tile);

        tile.addEventListener('mouseenter', () => {
            tile.classList.add('pulledFirst');
            allTiles[y + 1][x].classList.add('pulledSecond');
            allTiles[y - 1][x].classList.add('pulledSecond');
            allTiles[y][x + 1].classList.add('pulledSecond');
            allTiles[y][x - 1].classList.add('pulledSecond');
        });

        tile.addEventListener('mouseleave', () => {
            const timeout = setTimeout(() => {
                tile.classList.remove('pulledFirst');
                allTiles[y + 1][x].classList.remove('pulledSecond');
                allTiles[y - 1][x].classList.remove('pulledSecond');
                allTiles[y][x + 1].classList.remove('pulledSecond');
                allTiles[y][x - 1].classList.remove('pulledSecond');
            }, 500)
        });

        row.appendChild(tile);
    }
}

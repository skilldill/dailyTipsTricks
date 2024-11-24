const bricks = document.getElementById('bricks');

const BRICKS_IN_ROW = window.innerWidth / 70;
const ROWS_COUNT = window.innerHeight / 30;

const lighter = document.createElement('div');
bricks.appendChild(lighter);
lighter.classList.add('lighter');

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    lighter.style.left = `${clientX - 100}px`;
    lighter.style.top = `${clientY - 100}px`;
});

function renderBricks() {
    for (let y = 0; y < ROWS_COUNT; y++) {
        let bricksCount = BRICKS_IN_ROW;

        const row = document.createElement('div');
        row.classList.add('bricksRow');

        if (y % 2 === 0) {
            bricksCount += 1;
            row.classList.add('translated');
        }

        for (let x = 0; x < bricksCount; x++) {
            const brick = document.createElement('div');
            brick.classList.add('brick');
            row.appendChild(brick);
        }

        bricks.appendChild(row);
    }
}

renderBricks();
const segments = document.getElementById('segments');

const cursor = document.createElement('div');
cursor.classList.add('cursor');
segments.appendChild(cursor);
const cursorUl = document.createElement('ul');
cursor.appendChild(cursorUl);

const items = segments.querySelectorAll('li');
const segmentsItems = [];

for (let item of items) {
    segmentsItems.push(item.innerText);
}

for (let value of segmentsItems) {
    const li = document.createElement('li');
    li.innerText = value;
    cursorUl.appendChild(li);
}

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        cursor.style.transform = `translateX(${ i * 85 }px)`;
        cursorUl.style.transform = `translateX(${ i * -85 }px)`;
    });
}

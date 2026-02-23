const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.item');

function showMenu() {
    setTimeout(() => {
        menu.classList.add('menuShown');
    }, 1000)

    for (let i = 0; i < menuItems.length; i++) {
        setTimeout(() => {
            menuItems[i].classList.add('itemShown');
        }, 1300 + i * 150)
    }
}

showMenu();

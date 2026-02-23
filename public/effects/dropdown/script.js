const dropdown = document.querySelector('.dropdown');
const dropdownBtn = document.querySelector('button');

dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('opened');
});

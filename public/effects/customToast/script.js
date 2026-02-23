const buttonToast = document.querySelector('button');

buttonToast.addEventListener('click', () => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = 'Hi there!';
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hideToast');
    }, 2000)

    setTimeout(() => {
        document.body.removeChild(toast);
    }, 3000)
});

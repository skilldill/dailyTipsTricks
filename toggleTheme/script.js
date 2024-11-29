const toggleTheme = document.getElementById('toggleTheme');

toggleTheme.addEventListener('click', () => {
    const theme = document.body.getAttribute('theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('theme', newTheme);
});


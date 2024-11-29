// Check for dark mode
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
// load theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    modeToggle.textContent = savedTheme === 'dark-mode' ? '🌞' : '🌙';
}
// Toggle btwn modes
modeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
        modeToggle.textContent = '🌙';
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        modeToggle.textContent = '🌞';
    }
});

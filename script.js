document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved user preference
    const currentMode = localStorage.getItem('dark-mode');
    if (currentMode === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

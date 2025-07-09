const themeSwitcher = document.getElementById('theme-switcher');
document.documentElement.setAttribute('dark-theme', 'dark')


// Event Listener
themeSwitcher.addEventListener('click', SwitchTheme);

// Switch Theme
function SwitchTheme() {
    const currentTheme = themeSwitcher.children[1].className.includes('fa-sun') ? 'light' : 'dark';
    if (currentTheme === 'light') {
        console.log('running dark')
        darkMode();
    } else {
        console.log('running light')
        lightmode();
    }
}


// Dark Mode Styles
function darkMode() {
    themeSwitcher.children[0].textContent = 'Dark mode';
    document.documentElement.setAttribute('dark-theme', 'dark') // html
    themeSwitcher.children[1].className = 'fas fa-moon';
}

// light mode
function lightmode() {
    document.documentElement.setAttribute('dark-theme', 'light')
    themeSwitcher.children[0].textContent = 'Light mode';
    themeSwitcher.children[1].className = 'fas fa-sun';
}
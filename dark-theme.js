const createDarkThemeBtn = () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = "Dark Theme OFF";
    const toggleTheme = () => {
        document.querySelector('body').classList.toggle('dark-theme');
        if (toggleBtn.textContent = "Dark Theme OFF") {
            toggleBtn.textContent = "Dark Theme ON";
        } else {
            toggleBtn.textContent = "Dark Theme ON";
        }
    };
    toggleBtn.addEventListener('click', toggleTheme);
    return toggleBtn;
}

document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector('#palette-container');
    const button = createDarkThemeBtn();
    parent.insertAdjacentElement('beforebegin', button);
})
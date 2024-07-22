function createDarkThemeBtn() {
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
    const button = createDarkThemeBtn();
    document.body.appendChild(button)
})
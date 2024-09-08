export const createDarkThemeBtn = () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = "Dark Theme ON";

    const toggleTheme = () => {
        document.querySelector('body').classList.toggle('dark-theme');
        
        if (toggleBtn.textContent === "Dark Theme OFF") {
            toggleBtn.textContent = "Dark Theme ON";
        } else {
            toggleBtn.textContent = "Dark Theme OFF";
        }
    };

    toggleBtn.addEventListener('click', toggleTheme);
    return toggleBtn;
};
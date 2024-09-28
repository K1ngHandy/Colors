export const spinner = () => {
    const button = document.getElementById('fetch');
    const spinner = document.getElementById('spin');

    function longFetch() {
        return new Promise((resolve) => {
            setTimeout(resolve, 750);
        });
    }

    // Handler will change the button's text & style, add class to spinner div, then call async fetch
    function handleFetch() {
        button.innerText = "Fetching...";
        button.style.backgroundColor = 'gold';
        spinner.classList.add('spinner');
        longFetch()
            .then(() => console.log("This will manipulate fetched data"))
            .catch(() => console.log("This will handle errors"))
            // Spinner is removed from screen by removing class from div
            .finally(() => {
                spinner.classList.remove('spinner');
                button.innerText = "Ready!";
                button.style.backgroundColor = 'lime';
            });
    }
    button.addEventListener('click', handleFetch);
}
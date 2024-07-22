const palette = [
    {
        name: "Charcoal",
        hex: "264653",
        cmyk: "(22, 5, 122, 43)",
        rgb: "(120, 34, 65)",
        family: "Dark Minerals",
    },
    {
        name: "Persian green", 
        hex: "2a9d8f",
    },
    {
        name: "Saffron",
        hex: "e9c46a",
        cmyk: "(23, 121, 43, 45)",
        rgb: "(12, 223, 67)",
        family: "Pale Yellows",
    },
    {
        name: "Sandy brown",
        hex: "f4a261",
    },
    {
        name: "Burnt sienna",
        hex: "e76f51",
    },
];

// const containerNode = document.querySelector('.container');
// const paletteBtn = document.querySelector('#paletteBtn');
// const colorBars = document.querySelectorAll('.rectangle');
const welcomeMsg = document.createElement('h2');

// properties
welcomeMsg.textContent = 'Welcome, we are excited to help you choose the perfect palette!';
welcomeMsg.style.border = "1px solid grey";
welcomeMsg.style.padding = "0.5em";

// handlers
// const changePalette = () => {
    
// };

// event listeners
// paletteBtn.addEventListener('click', changePalette);

document.querySelector('h1').insertAdjacentElement('afterend', welcomeMsg);
// const toggleBtn = createDarkThemeBtn();
// document.querySelector('#paletteBtn').insertAdjacentElement('beforebegin', toggleBtn);
// changePalette();
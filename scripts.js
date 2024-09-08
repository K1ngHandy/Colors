import { createPalette, changePalette } from './palette.js';
import { createDarkThemeBtn } from './dark-theme.js';

let currentPaletteIndex = 0;
let palettes = [];

const welcomeMsg = document.createElement('h2');
welcomeMsg.textContent = 'Welcome, we are excited to help you choose the perfect palette!';
welcomeMsg.style.border = "1px solid grey";
welcomeMsg.style.padding = "0.5em";

async function fetchPalettes(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        palettes = await response.json();
    } catch (error) {
        console.error(`Error fetching data:`, error);
    }
    console.log('Palettes', palettes);
    return palettes;
}

const handleChange = () => {
    if (palettes.length > 0) {
        const palette = palettes[currentPaletteIndex];
        changePalette[palette];

        currentPaletteIndex = (currentPaletteIndex + 1) % palettes.length;
    } else {
        console.error('No palettes available for change.');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('h1').insertAdjacentElement('afterend', welcomeMsg);
    const paletteContainer = document.querySelector('#palette-container');

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
    
    const changePaletteBtn = document.createElement('button');
    changePaletteBtn.textContent = "Change Palette";
    changePaletteBtn.addEventListener('click', handleChange);
    paletteContainer.insertAdjacentElement('beforebegin', changePaletteBtn);
    
	const darkThemeBtn = createDarkThemeBtn();
    paletteContainer.insertAdjacentElement('beforebegin', darkThemeBtn);

    const paletteDiv = createPalette(palette);
	paletteContainer.appendChild(paletteDiv);

    fetchPalettes('https://webapis.bloomtechdev.com/palettes');
})
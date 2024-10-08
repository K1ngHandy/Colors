import { createPalette, changePalette } from './palette.js';
import { createDarkThemeBtn } from './dark-theme.js';
import { spinner } from './spinner.js';

let currentPaletteIndex = 0;
let palettes = [];

const welcomeMsg = document.createElement('h2');
welcomeMsg.textContent = 'Welcome, we are excited to help you choose the perfect palette!';
welcomeMsg.style.border = "1px solid grey";
welcomeMsg.style.padding = "0.5em";

async function fetchPalettes(url) {
    spinner();
    // axios
    axios.get(url)
        .then(response => palettes = response.data)
        .catch(response => response.error)
        .finally(() => {
            spinner.classList.remove('spinner');
            console.log('Finally');
        })

    return palettes;
};

const handleChange = () => {
    if (palettes.length > 0) {
        const palette = palettes[currentPaletteIndex];
        changePalette(palette);

        currentPaletteIndex = (currentPaletteIndex + 1) % palettes.length;
    } else {
        console.error('No palettes available for change.');
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    document.querySelector('h1').insertAdjacentElement('afterend', welcomeMsg);
    const paletteContainer = document.querySelector('#palette-container');

    const defaultPalette = [
		{
			name: "Charcoal",
			hex: "#264653",
		},
		{
			name: "Persian green", 
			hex: "#2a9d8f",
		},
		{
			name: "Saffron",
			hex: "#e9c46a",
		},
		{
			name: "Sandy brown",
			hex: "#f4a261",
		},
		{
			name: "Burnt sienna",
			hex: "#e76f51",
		},
	];
    
    const changePaletteBtn = document.createElement('button');
    changePaletteBtn.textContent = "Change Palette";
    changePaletteBtn.id = 'fetch';
    changePaletteBtn.addEventListener('click', handleChange);
    paletteContainer.insertAdjacentElement('beforebegin', changePaletteBtn);
    
	const darkThemeBtn = createDarkThemeBtn();
    paletteContainer.insertAdjacentElement('beforebegin', darkThemeBtn);

    createPalette(defaultPalette);
    changePalette(defaultPalette);

    await fetchPalettes('https://webapis.bloomtechdev.com/palettes');
})
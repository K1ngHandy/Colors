const changePalette = (palette) => {
	const colorBars = document.querySelectorAll(`.rectangle`);

	colorBars.forEach((bar, index) => {
		const color = palette[index];
		if (color) {
			bar.textContent = color.name;
			bar.title = `${color.family || ''} - HEX: #${color.hex} - CMYK: ${color.cmyk || ''} - RGB: ${color.rgb || ''}`;
			bar.style.backgroundColor = `#${color.hex}`;
			bar.id = color.id;
		} else {
			bar.textContent = '';
			bar.title = '';
			bar.style.backgroundColor = 'none';
			bar.id = '';
		}
    });
}

const createPalette = (palette) => {
	const paletteContainer = document.querySelector('#palette-container');
	paletteContainer.innerHTML = '';

	const colors = palette.length;
	for (let i = 1; i < colors; i++) {
		const rectangle = document.createElement('div');
		rectangle.classList.add('rectangle');
		paletteContainer.appendChild(rectangle);
	}
	return paletteContainer;
}

export { createPalette, changePalette };

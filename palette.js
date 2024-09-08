const changePalette = (palette) => {
	const colorBars = document.querySelectorAll(`.rectangle`);

	colorBars.forEach((bar, index) => {
		const color = palette[index];

		if (color && color.hex) {
			bar.textContent = color.name;
			bar.title = `${color.name || 'Unknown'} - ${color.hex || ''}`;
			bar.style.backgroundColor = `${color.hex}`;
			bar.id = color.id || `color-${index}`;
		} else {
			bar.textContent = 'No color';
			bar.title = '';
			bar.style.backgroundColor = '';
			bar.id = '';
		}
    });
}

const createPalette = (palette) => {
	const paletteContainer = document.querySelector('#palette-container');
	paletteContainer.innerHTML = '';

	palette.forEach(() => {
		const rectangle = document.createElement('div');
		rectangle.classList.add('rectangle');
		paletteContainer.appendChild(rectangle);
	});
};

export { createPalette, changePalette };

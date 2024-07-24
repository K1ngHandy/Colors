const changePalette = (id_number) => {
	colorBars.forEach((bar, index) => {
        bar.textContent = palette[index.name];
        bar.title = palette[index].family + 
        " - HEX: 0x" + palette[index].hex + 
        " - CMYK: " + palette[index].cmyk + 
        " - RGB: " + palette[index].rgb;
        bar.style.backgroundColor = "#" + palette[index].hex;
        bar.id = palette[index * 1];
    });
}

function createPalette (id_number) {
	const palette = document.createElement('div');
	palette.id = "palette" + id_number;
	palette.classList.add('palette');

	const paletteBtn = document.createElement('button');
	paletteBtn.id = "paletteBtn" + id_number;
	paletteBtn.classList.add('paletteBtn');
	paletteBtn.innerText = "Change Palette";
	paletteBtn.addEventListener('click', () => {
		changePalette(id_number);
	})
	paletteBtn.appendChild(paletteBtn);

	const container = document.createElement('div');
	container.id = "container" + id_number;
	container.classList.add('container');
	palette.appendChild(container);

	for (let i = 1; i <= 5; i++) {
		const rectangle = document.createElement('div');
		rectangle.id = id_number + "rectangle" + i;
		rectangle.classList.add('rectangle');
		palette.appendChild(rectangle);
	}
	return palette;
}

createPalette();
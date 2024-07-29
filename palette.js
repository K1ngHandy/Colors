const changePalette = (id_number, palette) => {
	const colorBars = document.querySelectorAll('#palette${id_number} .rectangle');
	colorBars.forEach((bar, index) => {
        bar.textContent = palette[index.name];
        bar.title = palette[index].family + 
        " - HEX: 0x" + palette[index].hex + 
        " - CMYK: " + palette[index].cmyk + 
        " - RGB: " + palette[index].rgb;
        bar.style.backgroundColor = "#" + palette[index].hex;
        bar.id = palette[index].id;
    });
}

function createPalette (id_number, palette) {
	const paletteElem = document.createElement('div');
	paletteElem.id = "palette" + id_number;
	paletteElem.classList.add('palette');

	const paletteBtn = document.createElement('button');
	paletteBtn.id = "paletteBtn" + id_number;
	paletteBtn.classList.add('paletteBtn');
	paletteBtn.innerText = "Change Palette";
	paletteBtn.addEventListener('click', () => {
		changePalette(id_number, palette);
	})
	paletteElem.appendChild(paletteBtn);

	const container = document.createElement('div');
	container.id = "container" + id_number;
	container.classList.add('container');
	paletteElem.appendChild(container);

	for (let i = 1; i <= 5; i++) {
		const rectangle = document.createElement('div');
		rectangle.id = id_number + "rectangle" + i;
		rectangle.classList.add('rectangle');
		paletteElem.appendChild(rectangle);
	}
	return paletteElem;
}

document.addEventListener('DOMContentLoaded', () => {
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
	const paletteElem = createPalette(1, palette);
	paletteContainer.appendChild(paletteElem);
})
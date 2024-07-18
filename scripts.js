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

        const containerNode = document.querySelector('.container');
        const paletteBtn = document.querySelector('#paletteBtn');
        const toggleBtn = document.querySelector('#toggleBtn');
        const colorBars = document.querySelectorAll('.rectangle');
        const welcomeMsg = document.createElement('h2');

        // properties
        welcomeMsg.textContent = 'Welcome, we are excited to help you choose the perfect palette!';
        welcomeMsg.style.border = "1px solid grey";
        welcomeMsg.style.padding = "0.5em";

        // functions
        const toggleTheme = () => {
            document.querySelector('body').classList.toggle('dark-theme');
            toggleBtn.textContent == "Dark Theme OFF" ? toggleBtn.textContent = 'Dark Theme ON' : toggleBtn.textContent = 'Dark Theme OFF';
        }
        const changePalette = () => {
            colorBars.forEach((bar, index) => {
                bar.textContent = palette[index.name];
                bar.title = palette[index].family + 
                " - HEX: 0x" + palette[index].hex + 
                " - CMYK: " + palette[index].cmyk + 
                " - RGB: " + palette[index].rgb;
                bar.style.backgroundColor = "#" + palette[index].hex;
                bar.id = palette[index * 1];
            });
        };

        // event listeners
        paletteBtn.addEventListener('click', changePalette);
        toggleBtn.addEventListener('click', toggleTheme);

        document.querySelector('h1').insertAdjacentElement('afterend', welcomeMsg);
        document.querySelector('#paletteBtn').insertAdjacentElement('beforebegin', toggleBtn);
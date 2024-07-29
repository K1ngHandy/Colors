const colorsJSON = '[{"family":[{"name":"Dark Minerals","mood":"Relaxing","color":[{"name":"Charcoal","hex":"26EAC3","cmyk":"(22,5,122,43)","rgb":"(120,34,65)"},{"name":"Graphine","hex":"FFC653","cmyk":"(12,54,12,143)","rgb":"(10,234,165)"},{"name":"Clay","hex":"262DE3","cmyk":"(12,15,12,245)","rgb":"(127,134,65)"}]},{"name":"Pale Yellows","mood":"Creativity","color":[{"name":"Saffron","hex":"e9c46a","cmyk":"(13,11,143,25)","rgb":"(123,23,167)"},{"name":"Eggnog","hex":"ccc46a","cmyk":"(3,21,243,145)","rgb":"(2,23,267)"},{"name":"Sunset","hex":"ef3ba5","cmyk":"(200,221,13,15)","rgb":"(2,123,88)"}]}]}]'

const welcomeMsg = document.createElement('h2');
welcomeMsg.textContent = 'Welcome, we are excited to help you choose the perfect palette!';
welcomeMsg.style.border = "1px solid grey";
welcomeMsg.style.padding = "0.5em";

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('h1').insertAdjacentElement('afterend', welcomeMsg);
})
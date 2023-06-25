let color1 = document.getElementsByName('color1')[0];
let color2 = document.getElementsByName('color2')[0];
let h3 = document.querySelector('h3');
let btn = document.querySelector('.random');

function changeColor() {
	document.body.style.background = 
		"linear-gradient(to right, " + color1.value
	+ ", " + color2.value + ")";
	h3.textContent = document.body.style.background + ";";
}

function randomizeColors() {
	color1.value = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	color2.value = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	changeColor();
}

color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);
btn.addEventListener('click', randomizeColors);
changeColor();
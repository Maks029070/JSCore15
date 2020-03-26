function show(data) {
	console.log(data);
}

function task1() {
	let uselessText = document.getElementById('text');
	uselessText.style.display = 'none';
}

function task2() {
	let uselessBtn = document.getElementById('useless-btn');
	uselessBtn.style.display = 'none';
}

let menu = document.querySelector('.menu');
let title = document.getElementById('title');

title.onclick = function() {
	menu.classList.toggle('open');
}
copyCreate();

function copyCreate()	 {
	let copy1 = document.querySelectorAll('h1');
	let copy2 = document.querySelectorAll('h2');
	let copy3 = document.querySelectorAll('h3');
	let copy4 = document.querySelectorAll('.cName');

	for (var iC = 0; iC < copy1.length; iC++) {
		copy1[iC].addEventListener('click', copyClick);
	}
	for (var iC = 0; iC < copy2.length; iC++) {
		copy2[iC].addEventListener('click', copyClick);
	}
	for (var iC = 0; iC < copy3.length; iC++) {
		copy3[iC].addEventListener('click', copyClick);
	}
	for (var iC = 0; iC < copy4.length; iC++) {
		copy4[iC].addEventListener('click', copyClick);
	}
}

const toastStyle = document.querySelector('.toast');
document.querySelector('#toastClose').addEventListener('click', toastClose)
let toastTime;

function copyClick() {
	navigator.clipboard.writeText(this.textContent);
	document.querySelector('#toastCopy').textContent = this.textContent;
	toastShow();
}
function toastShow() {
	clearTimeout(toastTime)
	toastStyle.style.transform = 'translateX(0)';
	toastTime = setTimeout(toastClose, 3000);
}
function toastClose() {
	toastStyle.style.transform = 'translateX(300px)';
}
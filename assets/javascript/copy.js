function copyCreate()	 {
	let copy = document.querySelectorAll('.copyable');

	copy.forEach(e => {
		e.addEventListener('click', copyClick);
	});
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
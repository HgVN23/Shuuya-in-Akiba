dropdownCreate();

function dropdownCreate() {
	var toggler = document.getElementsByClassName("dropdown");
	for (var i = 0; i < toggler.length; i++) {
		toggler[i].addEventListener("click", dropdownActive);
	}
}
function dropdownActive() {
	this.classList.toggle("dropdownActive");
	this.parentElement.querySelector(".dropdownThis").classList.toggle("dropdownHide");
}
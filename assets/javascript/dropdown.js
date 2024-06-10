dropdownCreate();

function dropdownCreate() {
	var toggler = document.querySelectorAll(".dropdown");
	toggler.forEach(e => {
		e.addEventListener("click", dropdownActive);
	});
}
function dropdownActive() {
	this.classList.toggle("dropdownActive");
	this.parentElement.querySelector(".dropdownThis").classList.toggle("dropdownHide");
}
const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener("keydown", (k) => {
	if(k.keyCode === 13)
		search(searchInput.value);
});

document.querySelector('.searchIcon').addEventListener("click", () => {
	search(searchInput.value);
});

function search(value) {
	var temp = [];
	anime.forEach(e => {
		e.name.every(n => {
			if(n.toLowerCase().includes(value.toLowerCase())) {
				temp.push(e);
				return false;
			}
			return true;
		});
	});

	page = 0;
	getMax(temp);
	run(temp);
}
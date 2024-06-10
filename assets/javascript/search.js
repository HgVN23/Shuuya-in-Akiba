const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener("keydown", (e) => {
	if(e.keyCode === 13) {
		const searchValue = e.target.value.toLowerCase();

		var temp = [];
		anime.forEach(e => {
			e.name.every(n => {
				if(n.toLowerCase().includes(searchValue)) {
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
});
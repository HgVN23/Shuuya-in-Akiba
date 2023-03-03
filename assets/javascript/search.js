const searchInput = document.querySelector('.searchInput');

const enter = document.querySelector(".searchInput");
enter.addEventListener("keydown", (e)=>{
	if(e.keyCode === 13) {
		const searchValue = event.target.value.toLowerCase();
		let searchByName = [];
		let k = 1;
		for(var i = 1; i < anime.length; i++)
			for(var j = 0; j < anime[i].name.length; j++)
				if(anime[i].name[j].toLowerCase().includes(searchValue)) {
					searchByName[k] = anime[i];
					k++;
					break;
				}
		page = 0;
		getMax(searchByName);
		run(searchByName);
	}
});
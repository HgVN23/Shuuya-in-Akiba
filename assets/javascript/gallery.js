document.querySelector('.left').addEventListener('click', left);
document.querySelector('.right').addEventListener('click', right);
let page = 0;
let max = 0;
let listPresent = anime;
getMax(listPresent);
setTimeout(function delay() {
	run(listPresent);
}, 100);

const numberInput = document.querySelector('.numberInput');
function numberOnly(e) {
	if(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode === 13)
		return true;
	else
		return false;
}
numberInput.addEventListener('keydown', (e)=>{
	// if((e.keyCode === 8 || e.keyCode === 46) && numberInput.value === NaN)
	// 	numberInput.value = page + 1;
	if(e.keyCode === 13) {
		if(numberInput.value >= max)
			page = max - 1;
		else if(numberInput.value == 0)
			page = 0;
		else
			page = numberInput.value - 1;
		run(listPresent);
		numberInput.value = page + 1;
	}
});

function getMax(list) {
	max = 0;
	do{
		max++;
	} while(max * 25 < list.length);
	document.querySelector('.numberMax').textContent = `/${max}`;
}

function left() {
	if(page > 0) {
		page--;
		run(listPresent);
		numberInput.value = page + 1;
	}
}
function right() {
	if(page + 1 < max) {
		page++;
		run(listPresent);
		numberInput.value = page + 1;
	}
}

function run(list) {
	listPresent = list;
	setLimit();
	removeAnime();
	addAnime(list);
	moreInfoCreate();
	copyCreate();
}

function setLimit() {
	if(page == 0)
		document.querySelector('.left').classList.add('turnOff');
	else
		document.querySelector('.left').classList.remove('turnOff');
	if(page + 1 == max)
		document.querySelector('.right').classList.add('turnOff');
	else
		document.querySelector('.right').classList.remove('turnOff');
}

function removeAnime() {
	if(document.querySelector('.gallery').children) {
		document.querySelector('.gallery').remove();
		const galleryCreate = document.createElement('div');
		galleryCreate.classList.add('gallery')
		document.querySelector('body').appendChild(galleryCreate);
	}
}

function addAnime(list) {
	for(var i = page * 25 + 1; i <= (page + 1) * 25; i++) {
		if(i > list.length - 1)
			break;
		var temp = list[i];
		let img = temp.img;
		let name = temp.name[0];
		let altName = ``;
		for(var j = 1; j < temp.name.length; j++) {
			altName += `<h${j+1}>${temp.name[j]}</h${j+1}>\n`
		}
		let studio = ``;
		for(var j = 0; j < temp.studio.length; j++) {
			studio += `<img class="sImg" src="https://cdn.myanimelist.net/images/company/${temp.studio[j].id}.png" alt="${temp.studio[j].name}">\n`
		}
		let type = temp.type;
		let season = temp.season;
		let aired = temp.aired;
		let rating = temp.rating;
		let synopsis = temp.synopsis;
		let tag = ``;
		for(var j = 0; j < temp.tag.length; j++) {
			tag += `<div class="tag ${temp.tag[j]}"></div>\n`
		}
		// let character = ``;
		// for(var j = 0; j < temp.character.main.length; j++) {
		// 	character += `
		// 		<div class="cContainer">
		// 			<img class="character" src="https://cdn.myanimelist.net/images/characters/${temp.character.main[j].img}.jpg" alt="${temp.character.main[j].name}">
		// 			<div class="cName cRoleM">${temp.character.main[j].name}</div>
		// 		</div>\n
		// 	`
		// }
		// for(var j = 0; j < temp.character.support.length; j++) {
		// 	character += `
		// 		<div class="cContainer">
		// 			<img class="character" src="https://cdn.myanimelist.net/images/characters/${temp.character.support[j].img}.jpg" alt="${temp.character.support[j].name}">
		// 			<div class="cName cRoleS">${temp.character.support[j].name}</div>
		// 		</div>\n
		// 	`
		// }

		const format = `
			<div class="anime">
				<img class="min" src="https://cdn.myanimelist.net/images/anime/${img}.jpg" alt="${name}">
				<div class="name">${name}</div>
			</div>
			<div class="moreInfo hideInfo">
				<div class="split">
					<img class="max" src="https://cdn.myanimelist.net/images/anime/${img}.jpg" alt="${name}">
					<div class="limited">
						<h1>${name}</h1>
						${altName}
						<div class="split2">
							<div class="studios">
								${studio}
							</div>
							<div class="smallInfo">
								<p class="type">${type}</p>
								<p class="season">${season}</p>
								<p class="rating">${rating}</p>
							</div>
						</div>
						<div class="tagBox">
							${tag}
						</div>
						<div class="relatedBox">
							<a class="rImg rAnimeVietsub" href="https://animevietsub.im/tim-kiem/${name}/" target="_blank" alt="Anime Vietsub"></a>
							<a class="rImg rAnimeNana" href="https://animenana.com/search/?key=${name}" target="_blank" alt="Anime Nana"></a>
							<a class="rImg rMangaQQ" href="https://truyenqqq.vn/tim-kiem.html?q=${name}" target="_blank" alt="TruyenQQ"></a>
							<a class="rImg rMangaNelo" href="https://ww5.manganelo.tv/search/${name}" target="_blank" alt="Manga Nelo"></a>
							<a class="rImg rMangaDex" href="https://mangadex.org/search?q=${name}" target="_blank" alt="Manga Dex"></a>
							<a class="rImg rMAL" href="https://myanimelist.net/search/all?q=${name}&cat=anime" target="_blank" alt="My Anime List"></a>
						</div>
					</div>
				</div>
			</div>\n
		`;

		const animeCreate = document.createElement('section');
		animeCreate.innerHTML = format;
		document.querySelector('.gallery').appendChild(animeCreate);
	}
}
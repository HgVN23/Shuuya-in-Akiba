let i = 0;
check();
addAnime();

let max = 0;
do{
	max++;
} while(max * 25 < anime.length);
document.querySelector('.numberMax').textContent = `/${max}`

const numberInput = document.querySelector('.numberInput');
function numberOnly(e) {
	if(e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode === 13)
		return true;
	else
		return false;
}
numberInput.addEventListener('keydown', (e)=>{
	// if((e.keyCode === 8 || e.keyCode === 46) && numberInput.value === NaN)
	// 	numberInput.value = i + 1;
	if(e.keyCode === 13) {
		if(numberInput.value >= max)
			i = max - 1;
		else if(numberInput.value == 0)
			i = 0;
		else
			i = numberInput.value - 1;
		run();
	}
});

document.querySelector('.left').addEventListener('click', left);
document.querySelector('.right').addEventListener('click', right);
function left() {
	if(i > 0) {
		i--;
		run();
	}
}
function right() {
	if((i + 1) * 25 < anime.length) {
		i++;
		run();
	}
}

function run() {
	check();
	removeAnime();
	addAnime();
	moreInfoCreate();
	numberInput.value = i + 1;
}

function check() {
	if(i == 0)
		document.querySelector('.left').classList.add('turnOff');
	else
		document.querySelector('.left').classList.remove('turnOff');
	if((i + 1) * 25 >= anime.length)
		document.querySelector('.right').classList.add('turnOff');
	else
		document.querySelector('.right').classList.remove('turnOff');
}

function removeAnime() {
	document.querySelector('.gallery').remove();
	const galleryCreate = document.createElement('div');
	galleryCreate.classList.add('gallery')
	document.querySelector('body').appendChild(galleryCreate);
}

function addAnime() {
	for(var page = i * 25 + 1; page <= (i + 1) * 25; page++) {
		if(page > anime.length - 1)
			break;
		var temp = anime[page];
		let img = temp.img;
		let name = temp.name[0];
		let altName = ``;
		for(var j = 1; j < temp.name.length; j++) {
			altName += `<h${j+1}>${temp.name[j]}</h${j+1}>\n`
		}
		let studio = ``;
		for(var j = 0; j < temp.studio.length; j++) {
			studio += `<div class="sImg ${temp.studio[j]}"></div>\n`
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
		let character = ``;
		for(var j = 0; j < temp.character.main.length; j++) {
			character += `
				<div class="cContainer">
					<img class="character" src="https://cdn.myanimelist.net/images/characters/${temp.character.main[j].img}.jpg">
					<div class="cName cRoleM">${temp.character.main[j].name}</div>
				</div>\n
			`
		}
		for(var j = 0; j < temp.character.support.length; j++) {
			character += `
				<div class="cContainer">
					<img class="character" src="https://cdn.myanimelist.net/images/characters/${temp.character.support[j].img}.jpg">
					<div class="cName cRoleS">${temp.character.support[j].name}</div>
				</div>\n
			`
		}

		const format = `
			<div class="anime">
				<img class="min" src="https://cdn.myanimelist.net/images/anime/${img}.jpg">
				<div class="name">${name}</div>
			</div>
			<div class="moreInfo hideInfo">
				<div class="split">
					<img class="max" src="https://cdn.myanimelist.net/images/anime/${img}.jpg">
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
								<p class="aired">${aired}</p>
								<p class="rating">${rating}</p>
							</div>
						</div>
						<p class="synopsis">
							${synopsis}
						</p>
						<div class="tagBox">
							${tag}
						</div>
						<div class="characterBox">
							${character}
						</div>
						<div class="relatedBox">
							<a class="rImg rAnimeVietsub" href="" target="_blank"></a>
							<a class="rImg rAnimeNana" href="" target="_blank"></a>
							<a class="rImg rMangaQQ" href="" target="_blank"></a>
							<a class="rImg rMangaNetTruyen" href="" target="_blank"></a>
							<a class="rImg rMangaNelo" href="" target="_blank"></a>
							<a class="rImg rLNHako" href="" target="_blank"></a>
							<a class="rImg rMAL" href="" target="_blank"></a>
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
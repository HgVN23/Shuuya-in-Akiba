const goLeft = document.querySelector('.left');
const goRight = document.querySelector('.right');
goLeft.addEventListener('click', left);
goRight.addEventListener('click', right);

var page = 0;
var max = 0;
var listPresent = anime;

getMax(listPresent);
setTimeout(function delay() {
	run(listPresent);
}, 100);

const numberInput = document.querySelector('.numberInput');
function numberOnly(e) {
	return (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode === 13);
}
numberInput.addEventListener('keydown', (e)=>{
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
	do {
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
	const leftClass = goLeft.classList;
	const rightClass = goRight.classList;

	page == 0 ? leftClass.add('turnOff') :
				leftClass.remove('turnOff');
	page + 1 == max ? rightClass.add('turnOff') :
					rightClass.remove('turnOff');
}

function removeAnime() {
	if(document.querySelector('.gallery').children) {
		document.querySelector('.gallery').remove();
		const galleryCreate = document.createElement('div');
		galleryCreate.classList.add('gallery');
		document.querySelector('body').appendChild(galleryCreate);
	}
}

function addAnime(list) {
	for(var i = page * 25; i < (page + 1) * 25; i++) {
		if(i > list.length - 1)
			break;

		const temp = list[i];

		const {
			img, name, studio, type,
			season, year, source,
			rating, status, tag
		} = temp;

		const keyName = name[0];

		var altName = ``;
		name.forEach((e, j) => {
			altName += `<h${j+1} class="copyable">${e}</h${j+1}>`;
		});

		var tempStudio = ``;
		sortList(studio).forEach(e => {
			const result = studioList.find(x => x.id === e);
			tempStudio += `<a href="https://myanimelist.net/anime/producer/${result.id}" target="_blank">
				<img class="sImg" src="https://cdn.myanimelist.net/${result.img === '' ? 'images/company_no_picture.png' : `s/common/company_logos/${result.img}`}" alt="${result.name}">
			</a>`;
		});

		var tempTag = ``;
		sortList(tag).forEach(e => {
			const result = tagList.find(x => x.id === tagGroup1(e));

			if(result != null) {
				tempTag += `<div class="tag ${result.id}">${result.name}${tagGroup2(e)}</div>`
			} else {
				console.log(temp);
			}
		});
		
		const song = name.length > 1 ? name[1] : keyName;

		const searchKey = keyName.slice(0, 100);

		/*const fSeason = year > 2017 ?
			`&seasons=${seasonList[season]}%20${year}` :
			`&seasons=${year}`;*/
		const fSeason = "";

		const format = `
			<div class="anime">
				<div class="status sMin s${statusList[status]}">
					<img class="min" src="https://cdn.myanimelist.net/images/anime/${img}l.jpg" alt="${keyName}">
					<div class="name">${keyName}</div>
				</div>
			</div>
			<div class="moreInfo hideInfo">
				<div class="split">
					<div class="status sMax s${statusList[status]}">
						<img class="max" src="https://cdn.myanimelist.net/images/anime/${img}l.jpg" alt="${keyName}">
					</div>
					<div class="limited">
						${altName}
						<div class="split2">
							<div class="studio">
								${tempStudio}
							</div>
							<div class="smallInfo">
								<p class="type">${type}</p>
								<p class="season">
									<a class="textLink" href="https://myanimelist.net/anime/season/${year}/${seasonList[season].toLowerCase()}" target="_blank">${seasonList[season]} ${year}</a>
								</p>
								<p class="source">${source}</p>
								<p class="rating">${ratingList[rating]}</p>
							</div>
						</div>
						<div class="tagBox">
							${tempTag}
						</div>
						<div class="relatedBox">
							<a class="rImg rAnimeVietsub" href='https://animevietsub.run/tim-kiem/${searchKey}/' target="_blank" alt="Anime Vietsub"></a>
							<a class="rImg rMangaDex" href='https://mangadex.org/search?q=${searchKey}' target="_blank" alt="MangaDex"></a>
							<a class="rImg rMAL" href='https://myanimelist.net/anime.php?q=${searchKey}&cat=anime' target="_blank" alt="MyAnimeList"></a>
							<a class="rImg rAniPlayList" href='https://aniplaylist.com/${searchKey}?types=Opening~Ending${fSeason}&platforms=Spotify' target="_blank" alt="AniPlayList"></a>
							<a class="rImg rAnimeThemes" href='https://animethemes.moe/search/anime?q=${searchKey}' target="_blank" alt="AnimeThemes"></a>
							<a class="rImg rOP" href='https://www.youtube.com/results?search_query=${song}+OP' target="_blank" alt="Visual Opening"></a>
							<a class="rImg rED" href='https://www.youtube.com/results?search_query=${song}+ED' target="_blank" alt="Visual Ending"></a>
							<a class="rImg rAnimeNana" href='https://animenana.com/search/?key=${searchKey}' target="_blank" alt="Anime Nana"></a>
							<a class="rImg rMangaFire" href='https://mangafire.to/filter?keyword=${searchKey}' target="_blank" alt="MangaFire"></a>
							<a class="rImg rMangaReader" href='https://mangareader.to/search?keyword=${searchKey}' target="_blank" alt="MangaReader"></a>
							<a class="rImg rMangaNelo" href='https://ww5.manganelo.tv/search/${searchKey}' target="_blank" alt="MangaNelo"></a>
						</div>
					</div>
				</div>
			</div>
		`;

		const animeCreate = document.createElement('section');
		animeCreate.innerHTML = format;
		document.querySelector('.gallery').appendChild(animeCreate);
	}
}
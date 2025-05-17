// === Constants & DOM References ===
const webTitle      = 'Shuuya in Akiba';
const animeListSel  = document.querySelector('.anime-list');
const searchInput   = document.querySelector('.search-input');
const searchIcon    = document.querySelector('.search-icon');
const searchReset   = document.querySelector('.search-reset');
const pageInput     = document.querySelector('.number-input');
const leftBtn       = document.querySelector('.left');
const rightBtn      = document.querySelector('.right');
const maxDisplay    = document.querySelector('.number-max');
const slider        = document.querySelector('.slider');
const content       = document.querySelector('.content');

// === URL Params ===
const params     = new URLSearchParams(location.search);
const searchTerm = params.get('search')?.toLowerCase() || '';
const page       = parseInt(params.get('page')) || 0;
const animeId    = params.get('anime');

// === Main logic ===
if (animeId) {
	const anime = animeList.find(a => a.img === animeId);
	if (anime) renderInfo(anime);
	else location.href = location.pathname;
} else {
	if (searchTerm) {
		document.title = `Tìm kiếm: ${searchTerm} | ${webTitle}`;
		searchInput.value = searchTerm;
	}

	const filtered = searchTerm
		? animeList.filter(a => a.title.some(t => t.toLowerCase().includes(searchTerm)))
		: animeList;

	renderAnime(filtered);
	setupPagination(filtered.length);
}

// === Render Anime List ===
function renderAnime(list) {
	const PER_PAGE = 25;
	const start    = page * PER_PAGE;
	const items    = list.slice(start, start + PER_PAGE);

	items.forEach(({ img, title }) => {
		animeListSel.insertAdjacentHTML('beforeend', `
			<a class="anime position-relative" href="?anime=${img}">
				<img class="img-inherit" src="https://cdn.myanimelist.net/images/anime/${img}l.jpg" alt="${title[0]}">
				<div class="title position-absolute bottom-0 left-0 right-0 fs-14 overflow-y-hidden">
					${title[0]}
				</div>
			</a>
		`);
	});
}

// === Render Anime Info ===
function renderInfo(anime) {
	if (!content) return;

	content.innerHTML = '';
	slider?.remove();
	animeListSel?.remove();

	const titleHTML = anime.title.map(t => `<div class="fs-16">${t}</div>`).join('');
	const mainTitle = anime.title[0];
	const studioHTML = anime.studio
		.map(studioId => {
			const studio = studioList.find(s => s.id === studioId);
			if (!studio) return '';

			const imgSrc = studio.img
				? `https://cdn.myanimelist.net/s/common/company_logos/${studio.img}`
				: 'https://cdn.myanimelist.net/images/company_no_picture.png';

			return `
				<a class="studio" href="https://myanimelist.net/anime/producer/${studio.id}" target="_blank">
					<div class=fs-14>${studio.name}</div>
					<img class="img-inherit" src="${imgSrc}" alt="${studio.name}">
				</a>
			`;
		})
		.join('');
	const tagHTML = anime.tag
		.map(tag => {
			const group = tagList.find(item => item.id === tagGroup1(tag));
			if (!group) return ''; // Không tìm thấy -> bỏ qua

			return `
				<div class="tag position-relative fs-12 ${group.id}">
					${group.name}${tagGroup2(tag)}
				</div>
			`.trim();
		})
		.join('');


	const searchTitle = mainTitle.slice(0, 100);
	const song = anime.title.length > 1 ? anime.title[1] : mainTitle;
	/*const fSeason = year > 2017 ?
		`&seasons=${seasonList[season]}%20${year}` :
		`&seasons=${year}`;*/
	const fSeason = "";

	content.insertAdjacentHTML('beforeend', `
		<div class="anime-info d-flex">
			<div class="key-visual">
				<img class="img-inherit" src="https://cdn.myanimelist.net/images/anime/${anime.img}l.jpg" alt="${mainTitle}">
			</div>
			<div class="info d-flex flex-column gap-1r overflow-y-auto">
				<div class="box glass">
					<div class="division">Titles:</div>
					${titleHTML}
				</div>
				<div class="flex-column-respon d-flex gap-1r">
					<div class="box glass col">
						<div class="division">Studios:</div>
						<div>${studioHTML}</div>
					</div>
					<div class="box glass col">
						<table>
							<tr>
								<td class="division">Type:</td>
								<td class="fs-14">${typeList[anime.type]}</td>
							</tr>
							<tr>
								<td class="division">Season:</td>
								<td class="fs-14"><a class="fs-14" href="https://myanimelist.net/anime/season/${anime.year}/${seasonList[anime.season]}" target="_blank">${seasonList[anime.season]} ${anime.year}</a></td>
							</tr>
							<tr>
								<td class="division">Source:</td>
								<td class="fs-14">${sourceList[anime.source]}</td>
							</tr>
							<tr>
								<td class="division">Rating:</td>
								<td class="fs-14">${ratingList[anime.rating]}</td>
							</tr>
							<tr>
								<td class="division">Status:</td>
								<td class="fs-14">${statusList[anime.status]}</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="box glass">
					<div class="division">Tags:</div>
					<div class="d-flex flex-wrap gap-05r">${tagHTML}</div>
				</div>
				<div class="box glass mb-1r">
					<div class="division">Related:</div>
					<div class="d-flex flex-wrap gap-05r">
						<a class="rImg rAnimeVietsub" href='https://animevietsub.run/tim-kiem/${searchTitle.replaceAll(" ", "+")}/' target="_blank" alt="Anime Vietsub"></a>
						<a class="rImg rMangaDex" href='https://mangadex.org/search?q=${searchTitle.replaceAll(" ", "+")}' target="_blank" alt="MangaDex"></a>
						<a class="rImg rMAL" href='https://myanimelist.net/anime.php?q=${searchTitle}&cat=anime' target="_blank" alt="MyAnimeList"></a>
						<a class="rImg rAniPlayList" href='https://aniplaylist.com/${searchTitle}?types=Opening~Ending${fSeason}&platforms=Spotify' target="_blank" alt="AniPlayList"></a>
						<a class="rImg rAnimeThemes" href='https://animethemes.moe/search/anime?q=${searchTitle}' target="_blank" alt="AnimeThemes"></a>
						<a class="rImg rOP" href='https://www.youtube.com/results?search_query=${song}+OP' target="_blank" alt="Visual Opening"></a>
						<a class="rImg rED" href='https://www.youtube.com/results?search_query=${song}+ED' target="_blank" alt="Visual Ending"></a>
						<a class="rImg rAnimeNana" href='https://animenana.com/search/?key=${searchTitle}' target="_blank" alt="Anime Nana"></a>
						<a class="rImg rMangaFire" href='https://mangafire.to/filter?keyword=${searchTitle}' target="_blank" alt="MangaFire"></a>
						<a class="rImg rMangaReader" href='https://mangareader.to/search?keyword=${searchTitle}' target="_blank" alt="MangaReader"></a>
					</div>
				</div>
			</div>
		</div>
	`);
}


// === Search Handlers ===
searchInput?.addEventListener('keydown', e => e.key === 'Enter' && goSearch());
searchIcon ?.addEventListener('click', goSearch);
searchReset?.addEventListener('click', () => { searchInput.value = ''; goSearch(); });

function goSearch() {
	const q = searchInput.value.trim();
	location.href = q ? `?search=${encodeURIComponent(q)}` : location.pathname;
}

// === Pagination ===
function setupPagination(total) {
	const PER_PAGE  = 25;
	const maxPage   = Math.ceil(total / PER_PAGE);
	pageInput.value = page + 1;
	maxDisplay.textContent = `/ ${maxPage}`;

	const clamp = v => Math.min(Math.max(parseInt(v) || 1, 1), maxPage);

	const update = p => {
		const q = new URLSearchParams(location.search);
		q.set('page', p - 1);
		if (searchTerm) q.set('search', searchTerm);
		location.href = `?${q}`;
	};

	leftBtn ?.addEventListener('click', () => { const v = clamp(pageInput.value); if (v > 1) update(v - 1); });
	rightBtn?.addEventListener('click', () => { const v = clamp(pageInput.value); if (v < maxPage) update(v + 1); });
	pageInput?.addEventListener('keydown', e => { if (e.key === 'Enter') update(clamp(pageInput.value)); });
}

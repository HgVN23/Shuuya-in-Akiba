function renderAnime(list) {
	const PER_PAGE = 25;
	const start    = page * PER_PAGE;
	const items    = list.slice(start, start + PER_PAGE);

	if (items.length === 0) {
		content.insertAdjacentHTML('beforeend', `
			<div class="fs-16 text-center">Không có kết quả</div>
		`);
		return;
	}

	const allVideos = items.flatMap(item => item.video);
	videoBg(allVideos);

	items.forEach(({ img, title, status }) => {
		animeListSel.insertAdjacentHTML('beforeend', `
			<a class="anime position-relative" href="?anime=${img}">
				<img class="img-inherit" src="https://cdn.myanimelist.net/images/anime/${img}l.jpg" alt="${title[0]}">
				<div class="title position-absolute bottom-0 left-0 right-0 fs-14 overflow-y-hidden">${title[0]}</div>
				<div class="status position-absolute top-0 right-0 s${statusList[status]}"></div>
			</a>
		`);
	});
}

function renderInfo(anime) {
	if (!content) return;

	content.innerHTML = '';
	slider?.remove();
	animeListSel?.remove();

	const {
		img, title, studio, type,
		season, year, source,
		rating, status, tag, video
	} = anime;

	videoBg(video);

	const titleHTML = title.map(t => `<div class="title fs-16">${t}</div>`).join('');
	const mainTitle = title[0];
	const studioHTML = studio
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
	const tagHTML = tag
		.sort((a, b) => a.localeCompare(b))
		.map(tag => {
			const group = tagList.find(item => item.id === tagGroup1(tag));
			if (!group) return '';

			return `
				<div class="tag position-relative fs-12 ${group.id}">
					${group.name}${tagGroup2(tag)}
				</div>
			`.trim();
		})
		.join('');
	const videoHTML = video
		.map(v => {
			if (!v) return 'Không có';

			const match = v.match(/-(OP\d.*|ED\d.*)/);
			const label = match ? match[1] : v;

			return `<a href="https://v.animethemes.moe/${v}.webm" target="_blank">${label}</a>`;
		})
		.join('');

	const searchTitle = mainTitle.slice(0, 100);
	const song = title.length > 1 ? title[1] : mainTitle;
	/*const fSeason = year > 2017 ?
		`&seasons=${seasonList[season]}%20${year}` :
		`&seasons=${year}`;*/
	const fSeason = "";

	document.title = `${mainTitle} | ${webTitle}`;

	content.insertAdjacentHTML('beforeend', `
		<div class="anime-info d-flex">
			<div class="key-visual">
				<img class="img-inherit" src="https://cdn.myanimelist.net/images/anime/${img}l.jpg" alt="${mainTitle}">
			</div>
			<div class="info d-flex flex-column gap-1r">
				<div class="box glass">
					<div class="division">Titles:</div>
					${titleHTML}
				</div>
				<div class="flex-column-respon d-flex gap-1r">
					<div class="box glass col">
						<div class="division">Studios:</div>
						${studioHTML}
					</div>
					<div class="box glass col">
						<table>
							<tr>
								<td class="division">Type:</td>
								<td class="fs-14">${typeList[type]}</td>
							</tr>
							<tr>
								<td class="division">Season:</td>
								<td class="fs-14"><a class="link fs-14" href="https://myanimelist.net/anime/season/${year}/${seasonList[season]}" target="_blank">${seasonList[season]} ${year}</a></td>
							</tr>
							<tr>
								<td class="division">Source:</td>
								<td class="fs-14">${sourceList[source]}</td>
							</tr>
							<tr>
								<td class="division">Rating:</td>
								<td class="fs-14">${ratingList[rating]}</td>
							</tr>
							<tr>
								<td class="division">Status:</td>
								<td class="fs-14">${statusList[status]}</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="box glass">
					<div class="division">Tags:</div>
					<div class="d-flex flex-wrap gap-05r">${tagHTML}</div>
				</div>
				<div class="box glass">
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
				<div class="box glass">
					<div class="division">OPs/EDs:</div>
					<div class="d-flex flex-wrap gap-05r">${videoHTML}</div>
				</div>
			</div>
		</div>
	`);

	document.querySelectorAll('.title').forEach(t => {
		t.addEventListener('click', () => {
			const text = t.textContent.trim();
			navigator.clipboard.writeText(text).then(() => {
				showToast(`Đã copy: "${text}"`);
			});
		});
	});
}

function showToast(message, duration = 3000) {
	let container = document.querySelector('.toast-container');

	if (!container) {
		container = document.createElement('div');
		container.className = 'toast-container';
		content.appendChild(container);
	}

	const toast = document.createElement('div');
	toast.className = 'toast';
	toast.textContent = message;
	container.appendChild(toast);

	setTimeout(() => {
		toast.classList.add('hide');
		setTimeout(() => toast.remove(), 500);
	}, duration);
}

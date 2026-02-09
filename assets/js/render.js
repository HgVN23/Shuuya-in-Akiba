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
				<div class="title position-absolute bottom-0 left-0 right-0 fs-14 overflow-hidden">${title[0]}</div>
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
	const vidOpEd = video
		.map(v => {
			if (!v) return 'Không có';

			const match = v.match(/-(OP\d.*|ED\d.*)/);
			const label = match ? match[1] : v;

			return `<div id="${v}" class="vid-btn fs-12">${label}</div>`;
		})
		.join('');

	const searchTitle = mainTitle.slice(0, 100);
	const searchType1 = encodeURIComponent(searchTitle);
	const searchType2 = searchTitle.replace(/ /g, '+');
	const searchType3 = searchTitle.replace(/ /g, '-');
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
								<td class="fs-14"><a class="link fs-14" href="https://myanimelist.net/anime/season/${year}/${seasonList[season].toLowerCase()}" target="_blank">${seasonList[season]} ${year}</a></td>
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
						${related('rAnimeVietsub', `animevietsub.run/tim-kiem/${searchType2}/`, 'Anime Vietsub')}
						${related('rMangaDex', `mangadex.org/search?q=${searchType2}&tab=titles`, 'MangaDex')}
						${related('rMAL', `myanimelist.net/anime.php?q=${searchType1}&sy=${year}`, 'MyAnimeList')}
						${related('rAniPlayList', `aniplaylist.com/${searchType3}?types=Opening~Ending${fSeason}&platforms=Spotify`, 'AniPlayList')}
						${related('rAnimeThemes', `animethemes.moe/search/anime?q=${searchType2}`, 'AnimeThemes')}
						${related('rAniList', `anilist.co/search/anime?year=${year}&season=${seasonList[season].toUpperCase()}&search=${searchType1}`, 'AniList')}
						${related('rOP', `youtube.com/results?search_query=${song}+OP`, 'Visual Opening')}
						${related('rED', `youtube.com/results?search_query=${song}+ED`, 'Visual Ending')}
						${related('rAnimeNana', `animenana.com/search/?key=${searchType2}`, 'Anime Nana')}
						${related('rMangaFire', `mangafire.to/filter?keyword=${searchType2}`, 'MangaFire')}
						${related('rMangaReader', `mangareader.to/search?keyword=${searchType2}`, 'MangaReader')}
						${related('rNinoyo', `ninoyo.com/search?s=${searchType1}`, 'Ninoyo')}
					</div>
				</div>
				<div class="box glass">
					<div class="division">OPs/EDs:</div>
					<div class="mb-1r d-flex flex-wrap gap-05r">${vidOpEd}</div>
					<div class="mb-1r"><a id="vidOpEd" target="_blank"></a></div>
					<video class="oped w-100" controls></video>
				</div>
			</div>
		</div>
	`);

	['.title', '.tag'].forEach(selector => {
		document.querySelectorAll(selector).forEach(e => {
			e.addEventListener('click', () => {
				const text = e.textContent.trim();
				navigator.clipboard.writeText(text).then(() => {
					showToast(`Đã copy: "${text}"`);
				});
			});
		});
	});

	document.querySelectorAll('.vid-btn').forEach(btn =>
		btn.addEventListener('click', () => {
			const oped = document.querySelector('.oped');
			const link = document.querySelector('#vidOpEd');
			const src = id => `https://v.animethemes.moe/${id}.webm`;
			
			link.href = src(btn.id);
			link.textContent = btn.id;

			document.querySelector('.vid-btn-pressed')?.classList.remove('vid-btn-pressed');
			btn.classList.add('vid-btn-pressed');

			removeVideoBg();
			Object.assign(oped, { src: src(btn.id), volume: 0.05 });
		})
	);
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

function related(rClass, web, alt) {
	return `
		<a class="rImg ${rClass}" href='https://${web}' target="_blank" alt="${alt}"></a>
	`;
}
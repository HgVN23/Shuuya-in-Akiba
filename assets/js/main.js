// === Constants & DOM References ===
const webTitle      = 'Shuuya in Akiba';
const video         = document.querySelector('video');
const source        = video.querySelector('source');
const animeListSel  = document.querySelector('.anime-list');
const searchInput   = document.querySelector('.search-input');
const searchIcon    = document.querySelector('.search-icon');
const searchReset   = document.querySelector('.search-reset');
const slider        = document.querySelector('.slider');
const leftBtn       = slider?.querySelector('.left');
const rightBtn      = slider?.querySelector('.right');
const pageInput     = slider?.querySelector('input');
const maxDisplay    = slider?.querySelector('.number-max');
const content       = document.querySelector('.content');
const filterGrid    = document.querySelector('.filter-grid');
const filterBtn     = document.querySelector('.filter-btn');
const resetBtn      = document.querySelector('.reset-btn');
const searchBtn     = document.querySelector('.search-btn');
const filterSection = document.querySelector('.filter');
let countdownInterval;

// === URL Params ===
const params     = new URLSearchParams(location.search);
const searchTerm = params.get('search')?.toLowerCase() || '';
const page       = parseInt(params.get('page')) || 0;
const animeId    = params.get('anime');
const sortId     = params.get('sort');


// === Filter Init ===
const filterDataMap = {
	status: statusList,
	type: typeList,
	season: seasonList,
	year: yearList,
	source: sourceList,
	rating: ratingList,
	tag: tagList,
	studio: studioList,
	sort: sortList,
};

Object.entries(filterDataMap).forEach(([key]) => {
	const isSingleSelect = key === 'sort';
	const selectClass = isSingleSelect ? 'single-select' : 'multi-select';
	const label = key.charAt(0).toUpperCase() + key.slice(1);

	filterGrid.insertAdjacentHTML('beforeend', `
		<div class="filter-cate ${key}">
			<div class="division">${label}:</div>
			<div class="filter-holder fs-14">None</div>
			<div class="filter-expand ${selectClass} d-flex flex-column hide"></div>
		</div>
	`);
});

document.querySelectorAll('.filter-cate').forEach(cate => {
	const key = [...cate.classList].find(cls => filterDataMap.hasOwnProperty(cls));
	if (!key) return;

	const dataList = filterDataMap[key];
	const expand = cate.querySelector('.filter-expand');
	const holder = cate.querySelector('.filter-holder');
	const isSingle = expand.classList.contains('single-select');

	const createItemHTML = (text, id, type) =>
		`<div class="filter-item fs-12" data-id="${id}" data-type="${type}">${text}</div>`;

	const itemsHTML = dataList.map((item, idx) => {
		if (key === 'tag' || key === 'studio') return createItemHTML(item.name, item.id, key);
		if (key === 'year') return createItemHTML(item, item, key);
		return createItemHTML(item, idx, key);
	}).join('');


	expand.innerHTML = itemsHTML;

	const items = expand.querySelectorAll('.filter-item');

	holder.addEventListener('click', e => {
		e.stopPropagation();
		const isHidden = expand.classList.contains('hide');
		document.querySelectorAll('.filter-expand').forEach(el => el.classList.add('hide'));
		if (isHidden) expand.classList.remove('hide');
	});

	items.forEach(item => {
		item.addEventListener('click', e => {
			e.stopPropagation();
			const selected = item.classList.contains('selected');

			if (isSingle) {
				items.forEach(i => i.classList.remove('selected'));
				holder.textContent = 'None';
				if (!selected) {
					item.classList.add('selected');
					holder.textContent = item.textContent;
				}
			} else {
				item.classList.toggle('selected');
				const selectedItems = [...items]
					.filter(i => i.classList.contains('selected'))
					.map(i => i.textContent);
				holder.textContent = selectedItems.length ? selectedItems.join(', ') : 'None';
			}
		});
	});
});

document.addEventListener('click', () => {
	document.querySelectorAll('.filter-expand').forEach(el => el.classList.add('hide'));
});

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

	let sorted = [...filtered];

	const urlParams = new URLSearchParams(location.search);

	const selectedStatus = urlParams.getAll('status').map(Number);
	if (selectedStatus.length > 0) {
		sorted = sorted.filter(a => selectedStatus.includes(a.status));
	}

	const selectedTypes = urlParams.getAll('type').map(Number);
	if (selectedTypes.length > 0) {
		sorted = sorted.filter(a => selectedTypes.includes(a.type));
	}

	const selectedSources = urlParams.getAll('source').map(Number);
	if (selectedSources.length > 0) {
		sorted = sorted.filter(a => selectedSources.includes(a.source));
	}

	const selectedRatings = urlParams.getAll('rating').map(Number);
	if (selectedRatings.length > 0) {
		sorted = sorted.filter(a => selectedRatings.includes(a.rating));
	}

	const selectedSeasons = urlParams.getAll('season').map(Number);
	if (selectedSeasons.length > 0) {
		sorted = sorted.filter(a => selectedSeasons.includes(a.season));
	}

	const selectedYears = urlParams.getAll('year').map(Number).filter(y => !isNaN(y));
	if (selectedYears.length > 0) {
		sorted = sorted.filter(a => selectedYears.includes(a.year));
	}

	const selectedTags = urlParams.getAll('tag');
	if (selectedTags.length > 0) {
		sorted = sorted.filter(a => {
			return a.tag.some(t => selectedTags.includes(t));
		});
	}

	const selectedStudios = urlParams.getAll('studio').map(Number);
	if (selectedStudios.length > 0) {
		sorted = sorted.filter(a => 
			a.studio.some(studioId => selectedStudios.includes(studioId))
		);
	}


	// === Gắn lại selected từ URL cho tất cả filters ===
	Object.keys(filterDataMap).forEach(type => {
		const selectedIds = urlParams.getAll(type);
		if (selectedIds.length === 0) return;

		const filterCate = document.querySelector(`.filter-cate.${type}`);
		if (!filterCate) return;

		const holder = filterCate.querySelector('.filter-holder');
		const expand = filterCate.querySelector('.filter-expand');
		const selectedItems = [];

		selectedIds.forEach(id => {
			const item = expand.querySelector(`.filter-item[data-id="${id}"][data-type="${type}"]`);
			if (item) {
				item.classList.add('selected');
				selectedItems.push(item.textContent.trim());
			}
		});

		if (selectedItems.length > 0) {
			holder.textContent = selectedItems.join(', ');
		}
	});

	if (sortId !== null) {
		const sortOption = parseInt(sortId, 10);
		if (!isNaN(sortOption) && sortList[sortOption]) {
			switch (sortOption) {
				case 0:
					sorted.sort((a, b) => {
						const yearDiff = b.year - a.year;
						if (yearDiff !== 0) return yearDiff;
						return b.season - a.season;
					});
					break;
				case 1:
					sorted.sort((a, b) => {
						const yearDiff = a.year - b.year;
						if (yearDiff !== 0) return yearDiff;
						return a.season - b.season;
					});
					break;
				case 2:
					sorted.sort((a, b) => a.title[0].localeCompare(b.title[0]));
					break;
				case 3:
					sorted.sort((a, b) => b.title[0].localeCompare(a.title[0]));
					break;
			}
		}
	}

	renderAnime(sorted);
	setupPagination(sorted.length);
}

// === Event Listeners ===
searchInput?.addEventListener('keydown', e => e.key === 'Enter' && applyFilters());
searchIcon ?.addEventListener('click', applyFilters);
searchBtn  ?.addEventListener('click', applyFilters);

searchReset?.addEventListener('click', () => { searchInput.value = ''; });
filterBtn  ?.addEventListener('click', () => { filterSection?.classList.toggle('hide'); });
resetBtn   ?.addEventListener('click', () => { location.href = location.pathname; });

function applyFilters() {
	const q = searchInput.value.trim();
	const sortItem = document.querySelector('.filter-cate.sort .filter-item.selected');
	const sortId = sortItem?.dataset.id;

	const params = new URLSearchParams();
	if (q) params.set('search', q);
	if (sortId) params.set('sort', sortId);

	const filters = getSelectedFilters();
	for (const [type, values] of Object.entries(filters)) {
		if (type === 'sort') continue;
		values.forEach(v => params.append(type, v));
	}

	location.href = `?${params.toString()}`;
}

function getSelectedFilters() {
	const selectedItems = document.querySelectorAll('.filter-item.selected');
	const filters = {};

	selectedItems.forEach(item => {
		const type = item.dataset.type;
		const id = item.dataset.id;

		if (!filters[type]) filters[type] = [];
		filters[type].push(id);
	});

	return filters;
}

// === Render Anime List ===
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

// === Render Anime Info ===
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

	// === Copy Title ===
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

// === Pagination ===
function setupPagination(total) {
	const PER_PAGE = 25;
	const maxPage = Math.ceil(total / PER_PAGE);
	const clamp = v => Math.min(Math.max(parseInt(v) || 1, 1), maxPage);

	const currentPage = clamp(page + 1);
	pageInput.value = currentPage;
	maxDisplay.textContent = `/ ${maxPage}`;

	const updateButtonState = pageNum => {
		leftBtn?.classList.toggle('turn-off', pageNum <= 1);
		rightBtn?.classList.toggle('turn-off', pageNum >= maxPage);
	};

	const goToPage = pageNum => {
		const q = new URLSearchParams(location.search);
		q.set('page', pageNum - 1);
		if (searchTerm) q.set('search', searchTerm);
		location.href = `?${q}`;
	};

	leftBtn?.addEventListener('click', () => {
		const v = clamp(pageInput.value);
		if (v > 1) goToPage(v - 1);
	});

	rightBtn?.addEventListener('click', () => {
		const v = clamp(pageInput.value);
		if (v < maxPage) goToPage(v + 1);
	});

	pageInput?.addEventListener('keydown', e => {
		if (e.key === 'Enter') goToPage(clamp(pageInput.value));
	});

	updateButtonState(currentPage);
}

// === Video Bg ===
function videoBg(videos) {
	if(!videos) return;

	const selectedVideo = random(videos);
	const source = document.querySelector('video source');
	const video = document.querySelector('video');

	clearInterval(countdownInterval);

	source.src = `https://v.animethemes.moe/${selectedVideo}.webm`;
	video.load();

	video.onerror = () => {
		console.warn("Lỗi tải video, thử lại video khác...");
		videoBg(videos);
	};

	video.onloadedmetadata = () => {
		video.play();

		getVideoDuration(video, (duration) => {
			let remaining = Math.floor(duration);
			// console.log(`Video ${selectedVideo} có thời lượng: ${remaining}s`);

			countdownInterval = setInterval(() => {
				remaining--;
				// console.log(`Còn lại: ${remaining}s`);

				if (remaining <= 0) {
					clearInterval(countdownInterval);
					videoBg(videos);
				}
			}, 1000);
		});
	};
}

function getVideoDuration(videoElement, callback) {
	if (videoElement.readyState >= 1) {
		callback(videoElement.duration);
	} else {
		videoElement.onloadedmetadata = () => {
			callback(videoElement.duration);
		};
	}
}

function random(list) {
	if(!list) return;
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}
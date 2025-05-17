// === Constants & DOM References ===
const webTitle = 'Shuuya in Akiba';
const animeListSelec = document.querySelector('.anime-list');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const searchReset = document.querySelector('.search-reset');
const input = document.querySelector('.number-input');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const maxDisplay = document.querySelector('.number-max');

// === URL Params ===
const params = new URLSearchParams(location.search);
const searchTerm = params.get('search')?.toLowerCase() || "";
const page = parseInt(params.get('page')) || 0;

// === Search & Filter ===
if (searchTerm) {
	document.title = `Tìm kiếm: ${searchTerm} | ${webTitle}`;
	searchInput.value = searchTerm;
}

const filteredList = searchTerm
	? animeList.filter(anime =>
		anime.title.some(t => t.toLowerCase().includes(searchTerm))
	)
	: animeList;

// === Render Anime List ===
renderAnime(filteredList);

function renderAnime(list) {
	const start = page * 25;
	const end = start + 25;
	const items = list.slice(start, end);

	items.forEach(({ img, title }) => {
		const html = `
			<div class="anime position-relative">
				<img src="https://cdn.myanimelist.net/images/anime/${img}l.jpg">
				<div class="title position-absolute bottom-0 fs-14 overflow-y-hidden">${title[0]}</div>
			</div>
		`;
		animeListSelec.innerHTML += html;
	});
}

// === Search Handlers ===
searchInput.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') search(searchInput.value);
});

searchIcon.addEventListener('click', () => {
	search(searchInput.value);
});

searchReset.addEventListener('click', () => {
	searchInput.value = null;
});

function search(query) {
	const trimmed = query.trim();
	const encoded = encodeURIComponent(trimmed);
	location.href = trimmed ? `?search=${encoded}` : location.pathname;
}

const maxNumber = Math.ceil(filteredList.length / 25);
input.value = page + 1;
maxDisplay.textContent = `/ ${maxNumber}`;

leftBtn.addEventListener('click', () => {
	const val = clampValue(input.value);
	if (val > 1) updatePage(val - 1);
});

rightBtn.addEventListener('click', () => {
	const val = clampValue(input.value);
	if (val < maxNumber) updatePage(val + 1);
});

input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		const val = clampValue(input.value);
		updatePage(val);
	}
});

function clampValue(value) {
	const num = parseInt(value) || 1;
	return Math.min(Math.max(num, 1), maxNumber);
}

function updatePage(newPage) {
	const query = new URLSearchParams(location.search);
	query.set('page', newPage - 1);
	if (searchTerm) query.set('search', searchTerm);
	location.href = `?${query}`;
}

const suggestBox = document.querySelector('.search-suggest');

// Hàm debounce
function debounce(func, delay) {
	let timeout;
	return function (...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), delay);
	};
}

// Hàm xử lý tìm kiếm
function handleSearch() {
	const keyword = searchInput.value.trim().toLowerCase();
	if (!keyword) {
		suggestBox.innerHTML = '';
		suggestBox.classList.add('hide');
		return;
	}

	const totalMatched = animeList
		.filter(anime => anime.title.some(title => title.toLowerCase().includes(keyword)))
		.sort((a, b) => b.year - a.year);

	const matched = totalMatched.slice(0, 3);

	suggestBox.innerHTML = '';
	if (matched.length === 0) {
		suggestBox.classList.add('hide');
		return;
	}

	matched.forEach(anime => {
		const {
			img, title, studio, type,
			season, year, status
		} = anime;

		const matchedTitle = title.find(title => title.toLowerCase().includes(keyword));
		const highlighted = matchedTitle.replace(
			new RegExp(`(${keyword})`, 'gi'),
			'<span>$1</span>'
		);

		const imgSrc = `https://cdn.myanimelist.net/images/anime/${img}l.jpg`;

		const studios = studio
			.map(studioId => studioList.find(s => s.id === studioId)?.name)
			.filter(Boolean)
			.join(', ');

		suggestBox.innerHTML += `
			<a class="suggest d-flex overflow-hidden" href="?anime=${img}">
				<div class="kv-suggest">
					<img class="img-inherit" src="${imgSrc}">
				</div>
				<div>
					<div class="title-suggest fs-16">${highlighted} (${typeList[type]})</div>
					<div class="fs-12">Studios: ${studios}</div>
					<div class="fs-12">${seasonList[season]} ${year} | ${statusList[status]}</div>
				</div>
			</a>
		`;
	});

	if (matched.length < totalMatched.length) {
		suggestBox.innerHTML += `
			<div class="suggest d-flex justify-content-center overflow-hidden">
				<div class="text-center fs-16">Có ${totalMatched.length} kết quả, nhấn Enter để hiện thêm</div>
			</div>
		`;
	}

	suggestBox.classList.remove('hide');
}

// Gắn debounce vào input
const debouncedSearch = debounce(handleSearch, 300);
searchInput?.addEventListener('input', debouncedSearch);

// Hiện gợi ý khi focus
searchInput?.addEventListener('focus', () => {
	if (searchInput.value.trim()) {
		handleSearch();
		suggestBox.classList.remove('hide');
		}
});

// Ẩn gợi ý khi mất focus
searchInput?.addEventListener('blur', () => {
	setTimeout(() => suggestBox.classList.add('hide'), 200);
});

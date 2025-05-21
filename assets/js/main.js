const params = new URLSearchParams(location.search);
const searchTerm = params.get('search')?.toLowerCase() || '';
const page = parseInt(params.get('page')) || 0;
const animeId = params.get('anime');
const sortId = params.get('sort');

if (animeId) {
	const anime = animeList.find(a => a.img === animeId);
	if (anime) {
		renderInfo(anime);
	} else {
		location.href = location.pathname;
	}
} else {
	if (searchTerm) {
		document.title = `Tìm kiếm: ${searchTerm} | ${webTitle}`;
		searchInput.value = searchTerm;
	}

	const filteredList = searchTerm
		? animeList.filter(a => a.title.some(t => t.toLowerCase().includes(searchTerm)))
		: animeList;

	let resultList = [...filteredList];
	const params = new URLSearchParams(location.search);

	const applyFilter = (paramName, getValue, filterFn) => {
		const values = params.getAll(paramName).map(getValue).filter(v => v !== undefined);
		if (values.length > 0) {
			resultList = resultList.filter(item => filterFn(item, values));
		}
	};

	applyFilter('status', Number, (a, v) => v.includes(a.status));
	applyFilter('type', Number, (a, v) => v.includes(a.type));
	applyFilter('source', Number, (a, v) => v.includes(a.source));
	applyFilter('rating', Number, (a, v) => v.includes(a.rating));
	applyFilter('season', Number, (a, v) => v.includes(a.season));
	applyFilter('year', y => {
		const n = Number(y);
		return isNaN(n) ? undefined : n;
	}, (a, v) => v.includes(a.year));
	applyFilter('tag', v => v, (a, v) => a.tag.some(t => v.includes(t)));
	applyFilter('studio', Number, (a, v) => a.studio.some(s => v.includes(s)));

	applySelectionFromURL();

	if (sortId !== null) {
		const sortIndex = parseInt(sortId, 10);
		if (!isNaN(sortIndex) && sortList[sortIndex]) {
			const sortFuncs = [
				(a, b) => b.year - a.year || b.season - a.season,
				(a, b) => a.year - b.year || a.season - b.season,
				(a, b) => a.title[0].localeCompare(b.title[0]),
				(a, b) => b.title[0].localeCompare(a.title[0])
			];
			resultList.sort(sortFuncs[sortIndex]);
		}
	}

	renderAnime(resultList);
	setupPagination(resultList.length);
}

searchInput?.addEventListener('keydown', e => e.key === 'Enter' && applyFilters());
searchIcon ?.addEventListener('click', applyFilters);
searchBtn  ?.addEventListener('click', applyFilters);
searchReset?.addEventListener('click', () => { searchInput.value = ''; });
filterBtn  ?.addEventListener('click', () => { filterSection?.classList.toggle('hide'); });
resetBtn   ?.addEventListener('click', () => { location.href = location.pathname; });

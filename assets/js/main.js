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

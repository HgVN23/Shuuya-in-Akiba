searchInput?.addEventListener('keydown', e => e.key === 'Enter' && goSearch());
searchIcon ?.addEventListener('click', goSearch);
searchReset?.addEventListener('click', () => { searchInput.value = ''; goSearch(); });

function goSearch() {
	const q = searchInput.value.trim();
	location.href = q ? `?search=${encodeURIComponent(q)}` : location.pathname;
}

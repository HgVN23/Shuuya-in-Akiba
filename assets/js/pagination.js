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

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

	expand.innerHTML = dataList.map((item, idx) => {
		if (key === 'tag' || key === 'studio') return createItemHTML(item.name, item.id, key);
		if (key === 'year') return createItemHTML(item, item, key);
		return createItemHTML(item, idx, key);
	}).join('');

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

function applySelectionFromURL() {
	Object.keys(filterDataMap).forEach(type => {
		const selectedIds = params.getAll(type);
		if (selectedIds.length === 0) return;

		const filterCate = document.querySelector(`.filter-cate.${type}`);
		if (!filterCate) return;

		const holder = filterCate.querySelector('.filter-holder');
		const expand = filterCate.querySelector('.filter-expand');
		const selectedLabels = [];

		selectedIds.forEach(id => {
			const item = expand.querySelector(`.filter-item[data-id="${id}"][data-type="${type}"]`);
			if (item) {
				item.classList.add('selected');
				selectedLabels.push(item.textContent.trim());
			}
		});

		if (selectedLabels.length > 0) {
			holder.textContent = selectedLabels.join(', ');
		}
	});
}

function applyFilters() {
	const query = searchInput.value.trim();
	const selectedSort = document.querySelector('.filter-cate.sort .filter-item.selected');

	const params = new URLSearchParams();

	if (query) params.set('search', query);

	const selectedFilters = getSelectedFilters();

	for (const [type, values] of Object.entries(selectedFilters)) {
		values.forEach(value => params.append(type, value));
	}

	location.href = `?${params.toString()}`;
}

function getSelectedFilters() {
	const filters = {};

	document.querySelectorAll('.filter-item.selected').forEach(item => {
		const type = item.dataset.type;
		const id = item.dataset.id;

		if (!filters[type]) {
			filters[type] = [];
		}
		filters[type].push(id);
	});

	return filters;
}

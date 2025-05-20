const filterBtn = document.querySelector('.filter-btn');
const filter = document.querySelector('.filter');
filterBtn?.addEventListener('click', () => { filter.classList.toggle('hide'); });

const filterDataMap = {
	sort: sortList,
	status: statusList,
	type: typeList,
	season: seasonList,
	year: yearList,
	source: sourceList,
	rating: ratingList,
	tag: tagList,
	studio: studioList,
};

document.querySelectorAll('.filter-cate').forEach(cate => {
	const expand = cate.querySelector('.filter-expand');
	const holder = cate.querySelector('.filter-holder');

	Object.keys(filterDataMap).forEach(key => {
		if (cate.classList.contains(key)) {
			const dataList = filterDataMap[key];
			expand.innerHTML = '';

      if (key === 'tag' || key === 'studio') {
				dataList.forEach(item => {
					expand.insertAdjacentHTML('beforeend', `<div class="filter-item fs-12" data-id="${item.id}">${item.name}</div>`);
				});
			} else if (key === 'year') {
				dataList.forEach(year => {
					expand.insertAdjacentHTML('beforeend', `<div class="filter-item fs-12" data-id="${year}">${year}</div>`);
				});
			} else {
				dataList.forEach((item, idx) => {
					expand.insertAdjacentHTML('beforeend', `<div class="filter-item fs-12" data-id="${idx}">${item}</div>`);
				});
			}
		}
	});

	const items = expand.querySelectorAll('.filter-item');
	const isSingle = expand.classList.contains('single-select');

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
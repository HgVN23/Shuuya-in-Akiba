// === DOM Selections ===
const keyVisual = document.querySelector('.key-visual');
const inputKV = keyVisual.querySelector('input');
const imgKV = keyVisual.querySelector('img');

const inputTitle = document.querySelectorAll('.input-title');
const selType = document.querySelector('.sel-type');
const selSeason = document.querySelector('.sel-season');
const selYear = document.querySelector('.sel-year');
const selSource = document.querySelector('.sel-source');
const selRating = document.querySelector('.sel-rating');
const selStatus = document.querySelector('.sel-status');

const inputTag = document.querySelector('.input-tag');
const inputStudio = document.querySelector('.input-studio');

const dataArea = document.querySelector('.data-area');
const dataBtn = document.querySelector('.data-btn');
const copyBtn = document.querySelector('.copy-btn');

// === Preview Key Visual on Input Change ===
inputKV.addEventListener('change', () => {
	imgKV.src = inputKV.value;
});

// === Populate Select Options ===
selType.innerHTML = typeList.map((e, i) => `<option value="${i}">${e}</option>`).join('');
selSeason.innerHTML = seasonList.map((e, i) => `<option value="${i}">${e}</option>`).join('');
selYear.innerHTML = yearList.map(e => `<option value="${e}">${e}</option>`).join('');
selSource.innerHTML = sourceList.map((e, i) => `<option value="${i}">${e}</option>`).join('');
selRating.innerHTML = ratingList.map((e, i) => `<option value="${i}">${e}</option>`).join('');
selStatus.innerHTML = statusList.map((e, i) => `<option value="${i}">${e}</option>`).join('');

// === Render Tag Checkboxes ===
inputTag.innerHTML = tagList.map(tag => `
	<div class="tag-list d-flex gap-05r">
		<input type="checkbox" id="${tag.id}" value="${tag.id}">
		<label for="${tag.id}" class="fs-12">${tag.name}</label>
	</div>
`).join('');

// === Render Studio Checkboxes ===
inputStudio.innerHTML += studioList.map(studio => `
	<div class="studio-list d-flex gap-05r">
		<input type="checkbox" id="${studio.id}" value="${studio.id}">
		<label for="${studio.id}" class="fs-12">${studio.name}</label>
	</div>
`).join('');

// === Generate Data Output ===
dataBtn.addEventListener('click', () => {
	const selectedTags = inputTag.querySelectorAll('input:checked');
	const selectedStudios = inputStudio.querySelectorAll('input:checked');
	const imageIdMatch = inputKV.value.match(/\/anime\/(.*?)l?\.jpg/);

	if (!imageIdMatch) {
		alert("Invalid image URL format!");
		return;
	}

	const imageId = imageIdMatch[1];
	const titles = Array.from(inputTitle)
		.filter(e => e.value !== '')
		.map(e => `'${e.value}'`)
		.join(',\n\t\t\t');

	const studios = Array.from(selectedStudios)
		.map(e => e.value)
		.join(', ');

	const tags = Array.from(selectedTags)
		.map(e => `'${e.value}'`)
		.join(',\n\t\t\t');

	dataArea.innerHTML = `
	new Anime(
		'${imageId}',
		[
			${titles}
		],
		[ ${studios} ],
		${selType.value}, ${selSeason.value}, ${selYear.value}, ${selSource.value}, ${selRating.value}, ${selStatus.value},
		[
			${tags}
		]
	),`;
});

// === Copy to Clipboard ===
copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(dataArea.innerHTML).then(() => {
		alert("Copied!");
	});
});

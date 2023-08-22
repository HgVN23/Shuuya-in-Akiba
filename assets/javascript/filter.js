let studiosTemp = ``;
const studioListTemp = sortList(studioList);
for(var i = 0; i < studioListTemp.length; i++){
	studiosTemp += `<div class="fOption" id="${studioListTemp[i].id}">${studioListTemp[i].name}</div>`
}

const typeList = [
	'TV',
	'OVA',
	'Special',
	'ONA',
	'Movie'
]
let typeTemp = ``;
for(var i = 0; i < typeList.length; i++){
	typeTemp += `<div class="fOption" id="${typeList[i]}">${typeList[i]}</div>`
}

const seasonList = [
	'Winter',
	'Spring',
	'Summer',
	'Fall'
]
let seasonTemp = ``;
for(var i = 0; i < seasonList.length; i++){
	seasonTemp += `<div class="fOption" id="${seasonList[i]}">${seasonList[i]}</div>`
}

const ratingList = [
	'PG-13',
	'R-17+',
	'R+'
]
let ratingTemp = ``;
for(var i = 0; i < ratingList.length; i++){
	ratingTemp += `<div class="fOption" id="${ratingList[i]}">${ratingList[i]}</div>`
}

const yearNow = new Date().getFullYear()
let yearTemp = ``;
for(var i = yearNow; i >= 2006; i--){
	yearTemp += `<div class="fOption" id="${i}">${i}</div>`
}

let tagTemp = ``;
const tagListTemp = sortList(tagList);
for(var i = 0; i < tagListTemp.length; i++){
	tagTemp += `<div class="fOption" id="${tagListTemp[i].id}">${tagListTemp[i].name}</div>`
}

filter();
function filter() {
	document.querySelector('.fStudios').innerHTML = studiosTemp;
	document.querySelector('.fType').innerHTML = typeTemp;
	document.querySelector('.fSeason').innerHTML = seasonTemp;
	document.querySelector('.fRating').innerHTML = ratingTemp;
	document.querySelector('.fYear').innerHTML = yearTemp;
	document.querySelector('.fTag').innerHTML = tagTemp;
	const fOption = document.querySelectorAll('.fOption');
	for(var i = 0; i < fOption.length; i++)
		fOption[i].addEventListener('click', fSelected);
}
function fSelected() {
	this.classList.toggle('fSelected');
}

function apply() {
	let studiosGet = document.querySelector('.fStudios').querySelectorAll('.fOption');
	let filterByStudios = [];
	let fN = 1;
	let checkBreak = false;
	let check = false;
	for(var i = 1; i < anime.length; i++)
		for(var j = 0; j < anime[i].studio.length; j++) {
			for(var k = 0; k < studiosGet.length; k++)
				if(studiosGet[k].classList.contains('fSelected')) {
					if(anime[i].studio[j].id == studiosGet[k].id) {
						filterByStudios[fN] = anime[i];
						fN++;
						checkBreak = true;
						break;
					}
					check = true;
				}
			if(checkBreak) {
				checkBreak = false
				break;
			}
		}
	if(!check)
		for(var i = 1; i < anime.length; i++)
			filterByStudios[i] = anime[i];

	let typeGet = document.querySelector('.fType').querySelectorAll('.fOption');
	let filterByType = [];
	fN = 1;
	check = false;
	for(var i = 1; i < filterByStudios.length; i++)
		for(var j = 0; j < typeGet.length; j++)
			if(typeGet[j].classList.contains('fSelected')) {
				if(filterByStudios[i].type.includes(typeGet[j].id)) {
					filterByType[fN] = filterByStudios[i];
					fN++;
					break;
				}
				check = true;
			}
	if(!check)
		for(var i = 1; i < filterByStudios.length; i++)
			filterByType[i] = filterByStudios[i];

	let seasonGet = document.querySelector('.fSeason').querySelectorAll('.fOption');
	let filterBySeason = [];
	fN = 1;
	check = false;
	for(var i = 1; i < filterByType.length; i++)
		for(var j = 0; j < seasonGet.length; j++)
			if(seasonGet[j].classList.contains('fSelected')) {
				if(filterByType[i].season.includes(seasonGet[j].id)) {
					filterBySeason[fN] = filterByType[i];
					fN++;
					break;
				}
				check = true;
			}
	if(!check)
		for(var i = 1; i < filterByType.length; i++)
			filterBySeason[i] = filterByType[i];

	let ratingGet = document.querySelector('.fRating').querySelectorAll('.fOption');
	let filterByRating = [];
	fN = 1;
	check = false;
	for(var i = 1; i < filterBySeason.length; i++)
		for(var j = 0; j < ratingGet.length; j++)
			if(ratingGet[j].classList.contains('fSelected')) {
				if(filterBySeason[i].rating.includes(ratingGet[j].id)) {
					filterByRating[fN] = filterBySeason[i];
					fN++;
					break;
				}
				check = true;
			}
	if(!check)
		for(var i = 1; i < filterBySeason.length; i++)
			filterByRating[i] = filterBySeason[i];

	let yearGet = document.querySelector('.fYear').querySelectorAll('.fOption');
	let filterByYear = [];
	fN = 1;
	check = false;
	for(var i = 1; i < filterByRating.length; i++)
		for(var j = 0; j < yearGet.length; j++)
			if(yearGet[j].classList.contains('fSelected')) {
				if(filterByRating[i].season.includes(yearGet[j].id)) {
					filterByYear[fN] = filterByRating[i];
					fN++;
					break;
				}
				check = true;
			}
	if(!check)
		for(var i = 1; i < filterByRating.length; i++)
			filterByYear[i] = filterByRating[i];

	let tagGet = document.querySelector('.fTag').querySelectorAll('.fOption');
	let filterByTag = [];
	fN = 1;
	checkBreak = false;
	check = false;
	for(var i = 1; i < filterByYear.length; i++)
		for(var j = 0; j < filterByYear[i].tag.length; j++) {
			for(var k = 0; k < tagGet.length; k++)
				if(tagGet[k].classList.contains('fSelected')) {
					if(filterByYear[i].tag[j].includes(tagGet[k].id)) {
						filterByTag[fN] = filterByYear[i];
						fN++;
						checkBreak = true;
						break;
					}
					check = true;
				}
			if(checkBreak) {
				checkBreak = false
				break;
			}
		}
	if(!check)
		for(var i = 1; i < filterByYear.length; i++)
			filterByTag[i] = filterByYear[i];


	page = 0;
	getMax(filterByTag);
	run(filterByTag);
	numberInput.value = 1;
}

// function checked(get) {
// 	let n = get.length;
// 	for(var i = 0; i < n; i++)
// 		while(!get[i].checked && n != 0) {
// 			for(var j = i; j < n; j++)
// 				get[j] = get[j+1];
// 			n--;
// 		}
// 	return get;
// }

function sortList(list) {
	var sort = [];
	for(var i = 0; i < list.length; i++){
		sort[i] = list[i]
	}
	for(var i = 0; i < sort.length - 1; i++)
		for(var j = i + 1; j < sort.length; j++)
			if(sort[i].name > sort[j].name) {
				var temp = sort[i]
				sort[i] = sort[j];
				sort[j] = temp;
			}
	return sort;
}
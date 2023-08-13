let studiosTemp = ``;
for(var i = 0; i < studioList.length; i++){
	studiosTemp += `<div><input type="checkbox" id="studio${i}" value="${studioList[i].id}"><label for="studio${i}">${studioList[i].name}</label></div>`
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
	typeTemp += `<div><input type="checkbox" id="type${i}" value="${typeList[i]}"><label for="type${i}">${typeList[i]}</label></div>`
}

const seasonList = [
	'Winter',
	'Spring',
	'Summer',
	'Fall'
]
let seasonTemp = ``;
for(var i = 0; i < seasonList.length; i++){
	seasonTemp += `<div><input type="checkbox" id="season${i}" value="${seasonList[i]}"><label for="season${i}">${seasonList[i]}</label></div>`
}

const ratingList = [
	'PG-13',
	'R-17+',
	'R+'
]
let ratingTemp = ``;
for(var i = 0; i < ratingList.length; i++){
	ratingTemp += `<div><input type="checkbox" id="rating${i}" value="${ratingList[i]}"><label for="rating${i}">${ratingList[i]}</label></div>`
}

const yearNow = new Date().getFullYear()
let yearTemp = ``;
for(var i = yearNow; i >= 2007; i--){
	yearTemp += `<div><input type="checkbox" id="year${i}" value="${i}"><label for="year${i}">${i}</label></div>`
}

let tagTemp = ``;
for(var i = 0; i < tagList.length; i++){
	tagTemp += `<div><input type="checkbox" id="tag${i}" value="${tagList[i].id}"><label for="tag${i}">${tagList[i].name}</label></div>`
}

filter();

function filter() {
	document.querySelector('.fStudios').innerHTML = studiosTemp;
	document.querySelector('.fType').innerHTML = typeTemp;
	document.querySelector('.fSeason').innerHTML = seasonTemp;
	document.querySelector('.fRating').innerHTML = ratingTemp;
	document.querySelector('.fYear').innerHTML = yearTemp;
	document.querySelector('.fTag').innerHTML = tagTemp;
}

function apply() {
	let studiosGet = document.querySelector('.fStudios').querySelectorAll('input');
	let filterByStudios = [];
	let fN = 1;
	let checkBreak = false;
	let check = false;
	for(var i = 1; i < anime.length; i++)
		for(var j = 0; j < anime[i].studio.length; j++) {
			for(var k = 0; k < studiosGet.length; k++)
				if(studiosGet[k].checked) {
					if(anime[i].studio[j].id == studiosGet[k].value) {
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

	let typeGet = document.querySelector('.fType').querySelectorAll('input');
	let filterByType = [];
	fN = 1;
	check = false;
	for(var i = 1; i < filterByStudios.length; i++)
		for(var j = 0; j < typeGet.length; j++)
			if(typeGet[j].checked) {
				if(filterByStudios[i].type.includes(typeGet[j].value)) {
					filterByType[fN] = filterByStudios[i];
					fN++;
					break;
				}
				check = true;
			}
	if(!check)
		for(var i = 1; i < filterByStudios.length; i++)
			filterByType[i] = filterByStudios[i];

	let seasonGet = document.querySelector('.fSeason').querySelectorAll('input');
	let filterBySeason = [];
	fN = 1;
	check = false;
	for(var i = 1; i < filterByType.length; i++)
		for(var j = 0; j < seasonGet.length; j++)
			if(seasonGet[j].checked) {
				if(filterByType[i].season.includes(seasonGet[j].value)) {
					filterBySeason[fN] = filterByType[i];
					fN++;
					break;
				}
				check = true;
			}
	if(!check)
		for(var i = 1; i < filterByType.length; i++)
			filterBySeason[i] = filterByType[i];

	let ratingGet = document.querySelector('.fRating').querySelectorAll('input');
	let filterByRating = [];
	fN = 1;
	check = false;
	for(var i = 1; i < filterBySeason.length; i++)
		for(var j = 0; j < ratingGet.length; j++)
			if(ratingGet[j].checked) {
				if(filterBySeason[i].rating.includes(ratingGet[j].value)) {
					filterByRating[fN] = filterBySeason[i];
					fN++;
					break;
				}
				check = true;
			}
	if(!check)
		for(var i = 1; i < filterBySeason.length; i++)
			filterByRating[i] = filterBySeason[i];

	let yearGet = document.querySelector('.fYear').querySelectorAll('input');
	let filterByYear = [];
	fN = 1;
	check = false;
	for(var i = 1; i < filterByRating.length; i++)
		for(var j = 0; j < yearGet.length; j++)
			if(yearGet[j].checked) {
				if(filterByRating[i].season.includes(yearGet[j].value)) {
					filterByYear[fN] = filterByRating[i];
					fN++;
					break;
				}
				check = true;
			}
	if(!check)
		for(var i = 1; i < filterByRating.length; i++)
			filterByYear[i] = filterByRating[i];

	let tagGet = document.querySelector('.fTag').querySelectorAll('input');
	let filterByTag = [];
	fN = 1;
	checkBreak = false;
	check = false;
	for(var i = 1; i < filterByYear.length; i++)
		for(var j = 0; j < filterByYear[i].tag.length; j++) {
			for(var k = 0; k < tagGet.length; k++)
				if(tagGet[k].checked) {
					if(filterByYear[i].tag[j].includes(tagGet[k].value)) {
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
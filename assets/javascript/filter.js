let studioTemp = ``;
const studioListTemp = sortList(studioList);
for(var i = 0; i < studioListTemp.length; i++){
	studioTemp += `
		<div class="tag" id="${studioListTemp[i].id}">
			<div>${studioListTemp[i].name}</div>
			<img class="fImgStudio" src="https://cdn.myanimelist.net/s/common/company_logos/${studioListTemp[i].img}.png" alt="${studioListTemp[i].name}">
		</div>
	`
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
	typeTemp += `<div class="tag" id="${typeList[i]}">${typeList[i]}</div>`
}

const seasonList = [
	'Winter',
	'Spring',
	'Summer',
	'Fall'
]

let seasonTemp = ``;
for(var i = 0; i < seasonList.length; i++){
	seasonTemp += `<div class="tag" id="${seasonList.indexOf(seasonList[i])}">${seasonList[i]}</div>`
}

const ratingList = [
	'PG-13',
	'R-17+',
	'R+'
]
let ratingTemp = ``;
for(var i = 0; i < ratingList.length; i++){
	ratingTemp += `<div class="tag" id="${ratingList.indexOf(ratingList[i])}">${ratingList[i]}</div>`
}

const yearNow = new Date().getFullYear()
let yearTemp = ``;
for(var i = yearNow; i >= 2006; i--){
	yearTemp += `<div class="tag" id="${i}">${i}</div>`
}

let tagTemp = ``;
const tagListTemp = sortList(tagList);
for(var i = 0; i < tagListTemp.length; i++){
	tagTemp += `<div class="tag ${tagListTemp[i].id}" id="${tagListTemp[i].id}"></div>`
}

const sourceList = [
	'Manga',
	'4-koma manga',
	'Web manga',
	'Novel',
	'Light novel',
	'Web novel',
	'Visual novel',
	'Original',
	'Game',
	'Music',
	'Mixed media'
]
let sourceTemp = ``;
for(var i = 0; i < sourceList.length; i++){
	sourceTemp += `<div class="tag" id="${sourceList[i]}">${sourceList[i]}</div>`
}

const statusList = [
	'Ongoing',
	'Completed'
]
let statusTemp = ``;
for(var i = 0; i < statusList.length; i++){
	statusTemp += `<div class="tag" id="${ratingList.indexOf(statusList[i])}">${statusList[i]}</div>`
}

filter();
function filter() {
	document.querySelector('.fType').innerHTML = typeTemp;
	document.querySelector('.fSeason').innerHTML = seasonTemp;
	document.querySelector('.fYear').innerHTML = yearTemp;
	document.querySelector('.fSource').innerHTML = sourceTemp;
	document.querySelector('.fRating').innerHTML = ratingTemp;
	document.querySelector('.fStatus').innerHTML = statusTemp;
	document.querySelector('.fTag').innerHTML = tagTemp;
	document.querySelector('.fStudio').innerHTML = studioTemp;
	const tag = document.querySelectorAll('.tag');
	for(var i = 0; i < tag.length; i++)
		tag[i].addEventListener('click', fSelected);
}
function fSelected() {
	this.classList.toggle('fSelected');
}

function apply() {
	let temp = anime;
	temp = filterSingle('Type', temp);
	temp = filterSingle('Season', temp);
	temp = filterSingle('Year', temp);
	temp = filterSingle('Source', temp);
	temp = filterSingle('Rating', temp);
	temp = filterSingle('Status', temp);
	temp = filterMulti('Tag', temp);
	temp = filterMulti('Studio', temp);

	page = 0;
	getMax(temp);
	run(temp);
	numberInput.value = 1;
}
function filterSingle(get, from) {
	let tagGet = document.querySelector(`.f${get}`).querySelectorAll('.tag');
	const data = get.toLowerCase();
	let temp = [];
	let fN = 0;
	let check = false;
	for(var i = 0; i < from.length; i++)
		for(var j = 0; j < tagGet.length; j++)
			if(tagGet[j].classList.contains('fSelected')) {
				if(String(from[i][data]).match(tagGet[j].id)) {
					temp[fN] = from[i];
					fN++;
					break;
				}
				check = true;
			}
	if(!check)
		for(var i = 0; i < from.length; i++)
			temp[i] = from[i];
	return temp;
}
function filterMulti(get, from) {
	let tagGet = document.querySelector(`.f${get}`).querySelectorAll('.tag');
	const data = get.toLowerCase();
	let temp = [];
	let fN = 0;
	let checkBreak = false;
	let check = false;
	for(var i = 0; i < from.length; i++)
		for(var j = 0; j < from[i][data].length; j++) {
			for(var k = 0; k < tagGet.length; k++)
				if(tagGet[k].classList.contains('fSelected')) {
					if(from[i][data][j].id == tagGet[k].id) {
						temp[fN] = from[i];
						fN++;
						checkBreak = true; 
						break;
					}
					check = true;
				}
			if(checkBreak) {
				checkBreak = false;
				break;
			}
		}
	if(!check)
		for(var i = 0; i < from.length; i++)
			temp[i] = from[i];
	return temp;
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
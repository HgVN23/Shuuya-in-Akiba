const typeList = [
	'TV',
	'OVA',
	'Special',
	'ONA',
	'Movie'
]
var typeTemp = ``;
typeList.forEach((e, i) => {
	typeTemp += `<div class="tag" id="${e}">${e} ${countTag('str', 'type', typeList, i)}</div>`
});

const seasonList = [
	'Winter',
	'Spring',
	'Summer',
	'Fall'
]
var seasonTemp = ``;
seasonList.forEach((e, i) => {
	seasonTemp += `<div class="tag" id="${seasonList.indexOf(e)}">${e} ${countTag('int', 'season', seasonList, i)}</div>`
});

const yearNow = new Date().getFullYear()
var yearTemp = ``;
for(var i = yearNow; i >= 2006; i--){
	yearTemp += `<div class="tag" id="${i}">${i} ${countTag('int', 'year', '', i)}</div>`
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
	'Mixed media',
	'Other'
]
var sourceTemp = ``;
sourceList.forEach((e, i) => {
	sourceTemp += `<div class="tag" id="${e}">${e} ${countTag('str', 'source', sourceList, i)}</div>`
});

const ratingList = [
	'PG-13 (Teens 13+)',
	'R-17+ (Violence & Profanity)',
	'R+ (Mild Nudity)'
]
var ratingTemp = ``;
ratingList.forEach((e, i) => {
	ratingTemp += `<div class="tag" id="${ratingList.indexOf(e)}">${e} ${countTag('int', 'rating', ratingList, i)}</div>`
});

const statusList = [
	'Ongoing',
	'Completed'
]
var statusTemp = ``;
statusList.forEach((e, i) => {
	statusTemp += `<div class="tag" id="${statusList.indexOf(e)}">${e} ${countTag('int', 'status', statusList, i)}</div>`
});

var tagTemp = ``;
const tagListTemp = sortList(tagList);
tagListTemp.forEach((e, i) => {
	tagTemp += `<div class="tag ${e.id}" id="${e.id}">${e.name} ${countTag('arr', 'tag', tagListTemp, i)}</div>`
});

var studioTemp = ``;
const studioListTemp = sortList(studioList);
studioListTemp.forEach((e, i) => {
	studioTemp += `
		<div class="tag" id="${e.id}">
			<div>${e.name}</div>${countTag('arr', 'studio', studioListTemp, i)}
			<img class="fImgStudio" src="https://cdn.myanimelist.net/${e.img === '' ? 'images/company_no_picture.png' : `s/common/company_logos/${e.img}`}" alt="${e.name}">
		</div>
	`
});

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

	document.querySelectorAll('.tag').forEach(e => {
		e.addEventListener('click', fSelected);
	});
}
function fSelected() {
	this.classList.toggle('fSelected');
}

function apply() {
	var temp = anime;
	temp = filterSingle('Type', temp);
	temp = filterSingle('Season', temp);
	temp = filterSingle('Year', temp);
	temp = filterSingle('Source', temp);
	temp = filterSingle('Rating', temp);
	temp = filterSingle('Status', temp);
	temp = filterMulti('Tag', temp);
	temp = filterMulti('Studio', temp);

	if(document.querySelector('#sortSeason').classList.contains('fSelected'))
		temp = sortSeason(temp)
	page = 0;
	getMax(temp);
	run(temp);
	numberInput.value = 1;
}
function filterSingle(get, from) {
	var tagGet = document.querySelector(`.f${get}`).querySelectorAll('.tag');
	const data = get.toLowerCase();
	var temp = [];
	var fN = 0;
	var check = false;
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
	var tagGet = document.querySelector(`.f${get}`).querySelectorAll('.tag');
	const data = get.toLowerCase();
	var temp = [];
	var fN = 0;
	var checkBreak = false;
	var check = false;
	for(var i = 0; i < from.length; i++)
		for(var j = 0; j < from[i][data].length; j++) {
			for(var k = 0; k < tagGet.length; k++)
				if(tagGet[k].classList.contains('fSelected')) {
					if(from[i][data][j] == tagGet[k].id) {
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
function sortSeason(from) {
	var temp = [];
	var fN = 0;
	for(var yN = yearNow; yN >= 2006; yN--)
		for(var sN = 3; sN >= 0; sN--)
			for(var i = 0; i < from.length; i++)
				if(from[i].year == yN && from[i].season == sN) {
					temp[fN] = from[i];
					fN++;
				}
	return temp;
}
// function checked(get) {
// 	var n = get.length;
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

function countTag(type, key, list, index) {
	var tag = 0;

	switch(type) {
		case 'str':
			anime.forEach(e => {
				if(e[key] == list[index])
					tag++;
			});
			break;
		case 'int':
			anime.forEach(e => {
				if(e[key] == index)
					tag++;
			});
			break;
		case 'arr':
			anime.forEach(e => {
				if(e[key].find(e => e === list[index].id))
					tag++;
			});
			break;
		default:
			break;
	}

	return `<span class="countTag">${tag}</span>`;
}
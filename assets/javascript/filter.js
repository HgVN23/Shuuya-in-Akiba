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
		temp = sortSeason(temp);

	page = 0;
	getMax(temp);
	run(temp);
	numberInput.value = 1;
}

function filterSingle(get, from) {
	const tagGet = document.querySelector(`.f${get}`).querySelectorAll('.tag');
	const data = get.toLowerCase();
	var temp = [], tagSelected = [];

	tagGet.forEach(tag => {
		if(tag.classList.contains('fSelected'))
			tagSelected.push(tag.id);
	})

	if(tagSelected.length > 0) {
		from.forEach(anime => {
			if(tagSelected.includes(String(anime[data])))
				temp.push(anime);
		});
		return temp;
	} else {
		return from;
	}
}

function filterMulti(get, from) {
	const tagGet = document.querySelector(`.f${get}`).querySelectorAll('.tag');
	const data = get.toLowerCase();
	var temp = [], tagSelected = [];

	tagGet.forEach(tag => {
		if(tag.classList.contains('fSelected'))
			tagSelected.push(tag.id);
	})

	if(tagSelected.length > 0) {
		from.forEach(anime => {
			var count = 0;
			var previousTag = "";
			anime[data].forEach(e => {
				const match = tagGroup1(e);
				console.log(typeof match);

				if(tagSelected.includes(String(match)) && !previousTag.match(match)) {
					count++;
					previousTag = match;
				}
			});
			if(count == tagSelected.length)
				temp.push(anime);
		});
		return temp;
	} else {
		return from;
	}
}

function sortSeason(from) {
	var temp = [];

	for(var year = yearNow; year >= 2006; year--)
		for(var season = 3; season >= 0; season--)
			from.forEach(anime => {
				if(anime.year == year && anime.season == season)
					temp.push(anime);
			});

	return temp;
}

function sortList(list) {
	var sort = [];
	/*for(var i = 0; i < list.length; i++){
		sort[i] = list[i]
	}*/
	list.forEach(e => {
		sort.push(e);
	})
	for(var i = 0; i < sort.length - 1; i++)
		for(var j = i + 1; j < sort.length; j++)
			if(sort[i] > sort[j]) {
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
			anime.forEach(item => {
				if(item[key].find(e => tagGroup1(e) === list[index].id))
					tag++;
			});
			break;
		default:
			break;
	}

	return `<span class="countTag">${tag}</span>`;
}
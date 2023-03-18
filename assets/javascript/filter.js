let studiosTemp = ``;
for(var i = 0; i < studioList.length; i++){
	studiosTemp += `<div><input type="checkbox" id="studio${i}" value="${studioList[i].id}"><label for="studio${i}">${studioList[i].name}</label></div>`
}

const typeList = [
	'TV',
	'OVA',
	'Special',
	'ONA'
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
for(var i = 2007; i <= yearNow; i++){
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
	page = 0;
	getMax(anime);
	run(anime);
}

function apply() {
	let studiosGet = document.querySelector('.fStudios').querySelectorAll('input');
	let filterByStudios = [];
	let fBS = 1;
	let checkBreak = false;
	for(var j = 1; j < anime.length; j++)
		for(var k = 0; k < anime[j].studio.length; k++) {
			for(var i = 0; i < studiosGet.length; i++)
				if(studiosGet[i].checked)
					if(anime[j].studio[k].id == studiosGet[i].value) {
						filterByStudios[fBS] = anime[j];
						fBS++;
						checkBreak = true;
						break;
					}
			if(checkBreak) {
				checkBreak = false
				break;
			}
		}
	// for(var i = 0; i < studiosGet.length; i++)
	// 	if(studiosGet[i].checked) {
	// 		for(var j = 1; j < anime.length; j++)
	// 			for(var k = 0; k < anime[j].studio.length; k++)
	// 				if(anime[j].studio[k].id == studiosGet[i].value) {
	// 					filterByStudios[fBS] = anime[j];
	// 					fBS++;
	// 					break;
	// 				}
	// 	}
	page = 0;
	getMax(filterByStudios);
	run(filterByStudios);
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
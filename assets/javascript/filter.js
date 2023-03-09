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

filter();

function filter() {
	document.querySelector('.fStudios').innerHTML = studiosTemp;
	document.querySelector('.fType').innerHTML = typeTemp;
	document.querySelector('.fSeason').innerHTML = seasonTemp;
	document.querySelector('.fRating').innerHTML = ratingTemp;
	document.querySelector('.fYear').innerHTML = yearTemp;
}
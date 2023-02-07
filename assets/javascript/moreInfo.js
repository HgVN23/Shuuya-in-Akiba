window.onload = moreInfoCreate();

const stopScroll = document.querySelector('body').classList

function moreInfoCreate() {
	var anime = document.getElementsByClassName('anime');
	for(let i = 0; i < anime.length; i++) {
		anime[i].addEventListener('click', showInfo);
		if(anime[i].parentElement.querySelector('.moreInfo'))
			clickHide(anime[i].parentElement.querySelector('.moreInfo'));

	}
}
function clickHide(thiss) {
	const clickHideCreate = document.createElement('div');
	clickHideCreate.classList.add('clickHide');
	thiss.appendChild(clickHideCreate);
	thiss.querySelector('.clickHide').addEventListener('click', hideInfo);
}
function showInfo() {
	this.parentElement.querySelector('.moreInfo').classList.remove('hideInfo');
	stopScroll.add('stopScroll');
}
function hideInfo() {
	this.parentElement.classList.add('hideInfo');
	stopScroll.remove('stopScroll');
}
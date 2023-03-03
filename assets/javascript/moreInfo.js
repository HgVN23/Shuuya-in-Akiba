const stopScroll = document.querySelector('body').classList

function moreInfoCreate() {
	var animeInfo = document.getElementsByClassName('anime');
	for(let i = 0; i < animeInfo.length; i++) {
		animeInfo[i].addEventListener('click', showInfo);
		clickHide(animeInfo[i].parentElement.querySelector('.moreInfo'));
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
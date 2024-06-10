const stopScroll = document.querySelector('body').classList
document.querySelector('.filterButton').addEventListener('click', showInfo);
document.querySelector('.filter .clickHide').addEventListener('click', hideInfo);

function moreInfoCreate() {
	var animeInfo = document.querySelectorAll('.anime');
	animeInfo.forEach(e => {
		e.addEventListener('click', showInfo);
		clickHide(e.parentElement.querySelector('.moreInfo'));
	});
}
function clickHide(self) {
	const clickHideCreate = document.createElement('div');
	clickHideCreate.classList.add('clickHide');
	self.appendChild(clickHideCreate);
	self.querySelector('.clickHide').addEventListener('click', hideInfo);
}
function showInfo() {
	this.parentElement.querySelector('.moreInfo').classList.remove('hideInfo');
	stopScroll.add('stopScroll');
}
function hideInfo() {
	this.parentElement.classList.add('hideInfo');
	stopScroll.remove('stopScroll');
}
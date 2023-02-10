const searchInput = document.querySelector('.searchInput');
const sections = document.querySelectorAll('.gallery section');

const enter = document.querySelector(".searchInput");
enter.addEventListener("keydown", (e)=>{
	if(e.keyCode === 13) {
		const searchValue = event.target.value.toLowerCase();
		sections.forEach((s) => {
			s.querySelector('.name').textContent.toLowerCase().includes(searchValue)
			? (s.style.display = 'block')
			: (s.style.display = 'none');
		});
	}
});

// searchInput.onkeyup = (e) => {
// 	const searchValue = event.target.value.toLowerCase();
// 	sections.forEach((s) => {
// 		s.querySelector('.name').textContent.toLowerCase().includes(searchValue)
// 		? (s.style.display = 'block')
// 		: (s.style.display = 'none');
// 	});
// };
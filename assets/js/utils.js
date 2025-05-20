function random(list) {
	if (!list) return;
	return list[Math.floor(Math.random() * list.length)];
}

function getVideoDuration(videoElement, callback) {
	if (videoElement.readyState >= 1) {
		callback(videoElement.duration);
	} else {
		videoElement.onloadedmetadata = () => {
			callback(videoElement.duration);
		};
	}
}

function showToast(message, duration = 3000) {
	let container = document.querySelector('.toast-container');
	if (!container) {
		container = document.createElement('div');
		container.className = 'toast-container';
		content.appendChild(container);
	}
	const toast = document.createElement('div');
	toast.className = 'toast';
	toast.textContent = message;
	container.appendChild(toast);
	setTimeout(() => {
		toast.classList.add('hide');
		setTimeout(() => toast.remove(), 500);
	}, duration);
}

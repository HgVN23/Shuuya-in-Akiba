function videoBg(videos) {
	// console.log(videos);
	videos = videos.filter(video => video != null && video.trim?.() !== '');
	if(!videos) return;

	const selectedVideo = random(videos);
	const video = document.querySelector('.video-bg');

	clearTimer();

	video.src = `https://v.animethemes.moe/${selectedVideo}.webm`;
	video.load();

	video.onerror = () => {
		console.warn("Lỗi tải video, thử lại video khác...");
		videoBg(videos);
	};

	video.onloadedmetadata = () => {
		video.play();

		getVideoDuration(video, (duration) => {
			let remaining = Math.floor(duration);
			// console.log(`Video ${selectedVideo} có thời lượng: ${remaining}s`);

			countdownInterval = setInterval(() => {
				remaining--;
				// console.log(`Còn lại: ${remaining}s`);

				if (remaining <= 0) {
					clearTimer();
					videoBg(videos);
				}
			}, 1000);
		});
	};
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

function random(list) {
	if(!list) return;
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}

function clearTimer() {
	if (typeof countdownInterval !== 'undefined') {
		clearInterval(countdownInterval);
		countdownInterval = null;
	}
}

function stopVideoBg() {
	const video = document.querySelector('.video-bg');
	if (video) {
		video.pause();
		video.currentTime = 0;
	}
	clearTimer();
}

function removeVideoBg() {
	const video = document.querySelector('.video-bg');
	if (video) {
		video.remove();
	}
	clearTimer();
}

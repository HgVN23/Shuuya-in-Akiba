function videoBg(videos) {
	if(!videos) return;

	const selectedVideo = random(videos);
	const source = document.querySelector('video source');
	const video = document.querySelector('video');

	clearInterval(countdownInterval);

	source.src = `https://v.animethemes.moe/${selectedVideo}.webm`;
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
					clearInterval(countdownInterval);
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

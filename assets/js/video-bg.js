function videoBg(videos) {
	if (!videos) return;
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
			countdownInterval = setInterval(() => {
				remaining--;
				if (remaining <= 0) {
					clearInterval(countdownInterval);
					videoBg(videos);
				}
			}, 1000);
		});
	};
}

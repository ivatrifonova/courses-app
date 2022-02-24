export const formatDuration = (time) => {
	if (!time) {
		return '';
	}
	const hours = Math.floor(time / 60);
	const minutes = time % 60;

	return `${hours < 10 ? 0 : ''}${hours}:${
		minutes < 10 ? 0 : ''
	}${minutes} hours`;
};

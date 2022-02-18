export const formatAuthors = (authorsId, allAuthors) => {
	const filteredAuthors = authorsId.map((authorId) => {
		const author = allAuthors.find((author) => authorId === author.id);
		return author.name;
	});

	const authorsText = filteredAuthors.join(', ');

	if (authorsText.length > 27) {
		return authorsText.slice(0, 27) + '...';
	}

	return authorsText;
};

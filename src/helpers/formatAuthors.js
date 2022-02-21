export const formatAuthors = (authorsId, allAuthors) => {
	const filteredAuthors = authorsId.map((authorId) => {
		const author = allAuthors.find((author) => authorId === author.id);
		return author.name;
	});

	const authorsText = filteredAuthors.join(', ');

	return authorsText;
};

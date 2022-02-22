export const GET_ALL_AUTHORS = 'GET_ALL_AUTHORS';

export const getAllAuthors = (authors) => ({
	type: GET_ALL_AUTHORS,
	payload: authors,
});

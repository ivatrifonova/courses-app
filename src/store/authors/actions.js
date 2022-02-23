export const GET_ALL_AUTHORS = 'GET_ALL_AUTHORS';

export const getAllAuthors = (authors) => ({
	type: GET_ALL_AUTHORS,
	payload: authors,
});

export const ADD_AUTHOR = 'ADD_AUTHOR';

export const addAuthor = (author) => ({
	type: ADD_AUTHOR,
	payload: author,
});

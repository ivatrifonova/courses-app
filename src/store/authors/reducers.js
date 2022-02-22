import { GET_ALL_AUTHORS } from './actions';

const authorsInitialState = [];

export const authorsReducer = (authors = authorsInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_AUTHORS: {
			return payload;
		}
		default: {
			return authors;
		}
	}
};

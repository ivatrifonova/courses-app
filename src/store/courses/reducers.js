import { GET_ALL_COURSES } from './actions';

const coursesInitialState = [];

export const courseReducer = (courses = coursesInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_COURSES: {
			return payload;
		}
		default: {
			return courses;
		}
	}
};

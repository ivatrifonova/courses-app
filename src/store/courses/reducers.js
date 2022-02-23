import { GET_ALL_COURSES, ADD_COURSE } from './actions';

const coursesInitialState = [];

export const courseReducer = (courses = coursesInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_ALL_COURSES: {
			return payload;
		}
		case ADD_COURSE: {
			return [...courses, payload];
		}
		default: {
			return courses;
		}
	}
};

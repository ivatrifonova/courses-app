export const GET_ALL_COURSES = 'GET_ALL_COURSES';

export const getAllCourses = (courses) => ({
	type: GET_ALL_COURSES,
	payload: courses,
});

export const ADD_COURSE = 'ADD_COURSE';

export const addCourse = (course) => ({
	type: ADD_COURSE,
	payload: course,
});

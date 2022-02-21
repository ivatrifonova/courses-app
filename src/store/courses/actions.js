export const GET_ALL_COURSES = 'GET_ALL_COURSES';

export const getAllCourses = (courses) => ({
	type: GET_ALL_COURSES,
	payload: courses,
});

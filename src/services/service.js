export const getAllCoursesService = async () => {
	const response = await fetch('http://localhost:3000/courses/all');
	const parsedResponse = await response.json();
	const courses = parsedResponse.result;
	return courses;
};

export const getAllAuthorsService = async () => {
	const response = await fetch('http://localhost:3000/authors/all');
	const parsedResponse = await response.json();
	const authors = parsedResponse.result;
	return authors;
};

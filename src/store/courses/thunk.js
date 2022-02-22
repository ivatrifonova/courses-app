import { getAllCoursesService } from '../../services/service';
import { getAllCourses } from './actions';

const getCourses = () => async (dispatch) => {
	const courses = await getAllCoursesService();
	dispatch(getAllCourses(courses));
};

export { getCourses };

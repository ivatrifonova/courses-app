import { mockedCoursesList } from '../../../../constants';
import CourseCard from './components/CourseCard/CourseCard';
import styles from './Courses.module.css';
import Button from '../../../../common/Button/Button';
import { useSelector } from 'react-redux';
import { getCourses } from '../../../../store/courses/selectors';

const Courses = () => {
	const courses = useSelector(getCourses);
	return (
		<div className={styles.courses}>
			<div>
				<Button buttonText={'Add new course'} />
			</div>
			<div>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	);
};

export default Courses;

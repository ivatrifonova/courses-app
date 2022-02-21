import { mockedCoursesList } from '../../../../constants';
import CourseCard from './components/CourseCard/CourseCard';
import styles from './Courses.module.css';
import Button from '../../../../common/Button/Button';

const Courses = () => {
	return (
		<div className={styles.courses}>
			<div>
				<Button
					className={styles.createCourseButton}
					buttonText={'Add new course'}
				/>
			</div>
			<div>
				{mockedCoursesList.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	);
};

export default Courses;

import CourseCard from './components/CourseCard/CourseCard';
import styles from './Courses.module.css';
import Button from '../../../../common/Button/Button';
import { useSelector } from 'react-redux';
import { getCourses } from '../../../../store/courses/selectors';
import { getAuthors } from '../../../../store/authors/selectors';
const Courses = () => {
	const storeAuthors = useSelector(getAuthors);
	const courses = useSelector(getCourses);
	return (
		<div className={styles.courses}>
			<div>
				<Button
					className={styles.createCourseButton}
					buttonText={'Add new course'}
				/>
			</div>
			<div>
				{courses.map((course) => (
					<CourseCard
						key={course.id}
						course={course}
						storeAuthors={storeAuthors}
					/>
				))}
			</div>
		</div>
	);
};

export default Courses;

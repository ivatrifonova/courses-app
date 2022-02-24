import { getCourses } from '../../store/courses/selectors';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { formatDuration } from '../../helpers/formatDuration';
import { formatAuthors } from '../../helpers/formatAuthors';
import { getAuthors } from '../../store/authors/selectors';
import styles from './CourseInfo.module.css';
import Header from '../../common/Header/Header';

const CourseInfo = () => {
	const courses = useSelector(getCourses);
	const storeAuthors = useSelector(getAuthors);
	const [course, setCourse] = useState('');
	const [duration, setDuration] = useState('');
	const [authors, setAuthors] = useState('');
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const course = courses.find((course) => course.id === id);
		if (course) {
			setCourse(course);
			setDuration(formatDuration(course.duration));
			setAuthors(formatAuthors(course.authors, storeAuthors));
		}
	}, [courses, id, storeAuthors]);

	return (
		<>
			<Header />
			{course ? (
				<div className={styles.courseInfoWrapper}>
					<Button
						buttonText={'< Back to courses'}
						className={styles.backButton}
						callback={() => navigate('/')}
					/>
					<h3 className={styles.title}>{course.title && course.title}</h3>
					<div className={styles.innerWrapper}>
						<p className={styles.description}>
							{course.description ? course.description : 'No description'}
						</p>
						<div>
							<div>
								<span className={styles.subtitle}> ID: </span>
								<span> {course.id}</span>
							</div>
							<div>
								<span className={styles.subtitle}> Duration: </span>
								<span> {duration ? duration : 'No duration'}</span>
							</div>
							<div>
								<span className={styles.subtitle}> Created: </span>
								<span> {course.creationDate}</span>
							</div>
							<div>
								<span className={styles.subtitle}> Authors: </span>
								<span className={styles.authors}>
									{authors.length ? authors : 'No authors'}
								</span>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p> This course does not exist.</p>
			)}
		</>
	);
};

export default CourseInfo;

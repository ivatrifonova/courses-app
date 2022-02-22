import Button from '../../../../../../common/Button/Button';
import styles from './CourseCard.module.css';
import { useEffect, useState } from 'react';
import { formatAuthors } from '../../../../../../helpers/formatAuthors';
import { formatDuration } from '../../../../../../helpers/formatDuration';
import { mockedAuthorsList } from '../../../../../../constants';
import { useSelector } from 'react-redux';
import { getAuthors } from '../../../../../../store/authors/selectors';

const CourseCard = ({ course, storeAuthors }) => {
	const [duration, setDuration] = useState(0);
	const [authors, setAuthors] = useState([]);
	useEffect(() => {
		const formattedDuration = formatDuration(course.duration);
		setDuration(formattedDuration);
		setAuthors(formatAuthors(course.authors, storeAuthors));
	}, [storeAuthors]);

	return (
		<div className={styles.card}>
			<div className={styles.mainInformation}>
				<h2 className={styles.title}> {course.title}</h2>
				<p className={styles.description}> {course.description}</p>
			</div>
			<div className={styles.secondInformation}>
				<div>
					<span className={styles.subtitle}> Authors: </span>{' '}
					<span className={styles.authors}> {authors}</span>
				</div>
				<div>
					<span className={styles.subtitle}> Duration: </span>{' '}
					<span> {duration}</span>
				</div>
				<div>
					<span className={styles.subtitle}> Created: </span>{' '}
					<span> {course.creationDate}</span>
				</div>
				<Button className={styles.showButton} buttonText={'Show course'} />
			</div>
		</div>
	);
};

export default CourseCard;

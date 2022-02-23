import { Input } from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Header from '../../common/Header/Header';
import styles from './CreateCourse.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthors } from '../../store/authors/selectors';
import { Author } from './components/Author/Author';
import { addAuthor } from '../../store/authors/actions';
import { addCourse } from '../../store/courses/actions';
import { useNavigate } from 'react-router-dom';

export const CreateCourse = () => {
	const dispatch = useDispatch();
	const authors = useSelector(getAuthors);
	const [authorName, setAuthorName] = useState('');
	const [duration, setDuration] = useState(0);
	const [description, setDescription] = useState('');
	const [title, setTitle] = useState('');
	const [availableAuthors, setAvailableAuthors] = useState([]);
	const [addedAuthors, setAddedAuthors] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		setAvailableAuthors([...authors]);
	}, [authors]);

	const handleAddAuthor = (author) => {
		const indexOfAddedAuthor = availableAuthors.findIndex(
			(availableAuthor) => availableAuthor.id === author.id
		);
		const updatedAvailableAuthors = [...availableAuthors];
		updatedAvailableAuthors.splice(indexOfAddedAuthor, 1);

		const updatedAddedAuthors = [...addedAuthors, author];

		setAvailableAuthors(updatedAvailableAuthors);
		setAddedAuthors(updatedAddedAuthors);
	};

	const handleRemoveAuthor = (author) => {
		const indexOfAddedAuthor = addedAuthors.findIndex(
			(addedAuthor) => addedAuthor.id === author.id
		);

		const updatedAddedAuthors = [...addedAuthors];
		updatedAddedAuthors.splice(indexOfAddedAuthor, 1);

		const updatedAvailableAuthors = [...availableAuthors, author];

		setAvailableAuthors(updatedAvailableAuthors);
		setAddedAuthors(updatedAddedAuthors);
	};

	const addAuthorToStore = () => {
		const author = {
			name: authorName,
			id: authorName + new Date().toDateString(),
		};

		dispatch(addAuthor(author));
	};

	const handleCreateCourseClick = () => {
		const course = {
			title: title,
			description: description,
			creationDate: new Date().toDateString(),
			duration: duration,
			authors: addedAuthors.map((author) => author.id),
		};
		dispatch(addCourse(course));
		navigate('/');
	};

	return (
		<>
			<div>
				<Header />
				<div className={styles.createCourse}>
					<div className={styles.infoSection}>
						<Input
							value={title}
							changeCallback={setTitle}
							className={styles.titleInput}
							labelText={'Title'}
							placeholderText={'Title'}
						/>
						<Button
							callback={handleCreateCourseClick}
							className={styles.createCourseButton}
							buttonText={'Create Course'}
						/>
					</div>
					<textarea
						onChange={(event) => setDescription(event.target.value)}
						value={description}
						className={styles.descriptionInput}
						placeholder='Description'
					></textarea>
					<div className={styles.authorSection}>
						<div className={styles.authorSubsection}>
							<h3>Add Author</h3>
							<Input
								value={authorName}
								changeCallback={setAuthorName}
								divClassName={styles.inputDiv}
								className={styles.authorInput}
								labelText={'Author Name'}
								placeholderText={'Enter author name'}
							/>
							<Button
								callback={addAuthorToStore}
								className={styles.createAuthorButton}
								buttonText={'Create Author'}
							/>
							<h3>Duration</h3>
							<Input
								value={duration}
								changeCallback={setDuration}
								className={styles.durationInput}
								divClassName={styles.inputDiv}
								labelText={'Duration'}
								placeholderText={'Enter duration'}
							/>
							<h4>Duration</h4>
						</div>
						<div className={styles.authorSubsection}>
							<h3>Authors</h3>
							<div>
								{availableAuthors.length ? (
									availableAuthors.map((author) => (
										<Author
											text={'Add Author'}
											key={author.id}
											author={author}
											onClick={() => handleAddAuthor(author)}
										/>
									))
								) : (
									<p> No available authors</p>
								)}
							</div>
							<h3>Course Authors</h3>
							<div>
								{addedAuthors.length ? (
									addedAuthors.map((author) => (
										<Author
											text={'Remove Author'}
											key={author.id}
											author={author}
											onClick={() => handleRemoveAuthor(author)}
										/>
									))
								) : (
									<p> No authors added</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

import { Input } from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import Header from '../../common/Header/Header';
import styles from './CreateCourse.module.css';

export const CreateCourse = () => {
	return (
		<>
			<div>
				<Header />
				<div className={styles.createCourse}>
					<div className={styles.infoSection}>
						<Input
							className={styles.titleInput}
							labelText={'Title'}
							placeholderText={'Title'}
						/>
						<Button
							className={styles.createCourseButton}
							buttonText={'Create Course'}
						/>
					</div>
					<textarea
						className={styles.descriptionInput}
						placeholder='Description'
					></textarea>
					<div className={styles.authorSection}>
						<div className={styles.authorSubsection}>
							<h3>Add Author</h3>
							<Input
								divClassName={styles.inputDiv}
								className={styles.authorInput}
								labelText={'Author Name'}
								placeholderText={'Enter author name'}
							/>
							<Button
								className={styles.createAuthorButton}
								buttonText={'Create Author'}
							/>
							<h3>Duration</h3>
							<Input
								className={styles.durationInput}
								divClassName={styles.inputDiv}
								labelText={'Duration'}
								placeholderText={'Enter duration'}
							/>
							<h4>Duration</h4>
						</div>
						<div className={styles.authorSubsection}>
							<h3>Authors</h3>
							<div></div>
							<h3>Course Authors</h3>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

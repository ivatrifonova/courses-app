import Button from '../../../../common/Button/Button';
import styles from './Author.module.css';
export const Author = ({ author, onClick, text }) => {
	return (
		<div className={styles.authorDiv}>
			<span className={styles.name}> {author.name} </span>
			<Button
				callback={onClick}
				className={styles.addAuthorButton}
				buttonText={text}
			/>
		</div>
	);
};

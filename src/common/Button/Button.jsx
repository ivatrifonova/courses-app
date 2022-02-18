import styles from './Button.module.css';

const Button = ({ buttonText, callback }) => {
	return (
		<button className={styles.button} onClick={callback}>
			{' '}
			{buttonText}{' '}
		</button>
	);
};

export default Button;

import styles from './Button.module.css';

const Button = ({ buttonText, callback, className }) => {
	return (
		<button className={className} onClick={callback}>
			{' '}
			{buttonText}{' '}
		</button>
	);
};

export default Button;

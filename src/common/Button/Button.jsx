const Button = ({ buttonText, callback, className }) => {
	return (
		<button className={className} onClick={callback}>
			{' '}
			{buttonText}{' '}
		</button>
	);
};

export default Button;

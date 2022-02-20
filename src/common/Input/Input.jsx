export const Input = ({
	labelText,
	placeholderText,
	changeCallback,
	className,
	labelClassName,
	divClassName,
}) => {
	return (
		<div className={divClassName}>
			<label className={labelClassName}>
				{labelText}
				<input
					className={className}
					type={'text'}
					name={labelText}
					placeholder={placeholderText}
					onChange={(event) => changeCallback(event.target.value)}
				/>
			</label>
		</div>
	);
};

export const Input = ({
	labelText,
	placeholderText,
	changeCallback,
	className,
	labelClassName,
	divClassName,
	type,
}) => {
	return (
		<div className={divClassName}>
			<label className={labelClassName}>
				{labelText}
				<input
					className={className}
					type={type}
					name={labelText}
					placeholder={placeholderText}
					onChange={(event) => changeCallback(event.target.value)}
				/>
			</label>
		</div>
	);
};

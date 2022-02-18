export const Input = ({ labelText, placeholderText, changeCallback }) => {
	return (
		<>
			<label>
				{labelText}
				<input
					type='text'
					name={labelText}
					placeholder={placeholderText}
					onChange={(event) => changeCallback(event.target.value)}
				/>
			</label>
		</>
	);
};

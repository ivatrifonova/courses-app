import Button from '../../../../../../common/Button/Button';
import Input from '../../../../../../common/Input/Input';

export const SearchBar = () => {
	// const [search, setSearch] = useState('');

	return (
		<div>
			<Input
				placeholderText={'Enter course name...'}
				// changeCallback={(value) => setSearch(value)}
			/>
			<Button />
		</div>
	);
};

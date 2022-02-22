import { getAllAuthorsService } from '../../Service/service';
import { getAllAuthors } from './actions';

const getAuthors = () => async (dispatch) => {
	const authors = await getAllAuthorsService();
	dispatch(getAllAuthors(authors));
};

export { getAuthors };

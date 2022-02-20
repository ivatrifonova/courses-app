import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { CreateCourse } from './components/CreateCourse/CreateCourse';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route exact path='/createCourse' element={<CreateCourse />} />
			</Routes>
		</div>
	);
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Banner from './components/organisms/Banner';

// pages
import Home from './pages/Home';

// misc
import './theme.css';
import './normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Router>
			<Banner />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>
);

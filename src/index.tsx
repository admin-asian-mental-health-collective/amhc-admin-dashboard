import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navigation from './components/organisms/Navigation';

// pages
import Home from './pages/Home';

// misc
import './theme.css';
import './normalize.css';

const elem = document.getElementById('root')!;
const root = ReactDOM.createRoot(elem);

root.render(
	<React.StrictMode>
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>
);

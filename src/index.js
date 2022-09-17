import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import Banner from './components/organisms/Banner';

// pages
import Home from './pages/Home';

// misc
import './theme.css';
import './normalize.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Banner />
		<RouterProvider router={router} />
	</React.StrictMode>
);

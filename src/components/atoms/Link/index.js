import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './style.css';

const Link = ({ to, children, ...rest }) =>
	/(http(s?)):\/\//i.test(to) ? (
		<a to={to} className="link" {...rest}>
			{children}
		</a>
	) : (
		<ReactRouterLink to={to} className="link" {...rest}>
			{children}
		</ReactRouterLink>
	);

export default Link;

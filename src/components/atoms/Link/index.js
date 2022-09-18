import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import concatClassName from '../../../helpers/classNameConcat';
import './style.css';

const Link = ({ to, className, children, ...rest }) =>
	/(http(s?)):\/\//i.test(to) ? (
		<a
			href={to}
			className={concatClassName('link', className)}
			target="_blank"
			{...rest}
		>
			{children}
		</a>
	) : (
		<ReactRouterLink
			to={to}
			className={concatClassName('link', className)}
			{...rest}
		>
			{children}
		</ReactRouterLink>
	);

export default Link;

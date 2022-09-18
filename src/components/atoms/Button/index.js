import React from 'react';
import './style.css';
import concatClassName from '../../../helpers/classNameConcat';
import Link from '../Link';

const Button = ({ className, to, children, ...rest }) =>
	to ? (
		<Link
			to={to}
			className={concatClassName('button', className)}
			{...rest}
		>
			{children}
		</Link>
	) : (
		<button className={concatClassName('button', className)} {...rest}>
			{children}
		</button>
	);

export default Button;

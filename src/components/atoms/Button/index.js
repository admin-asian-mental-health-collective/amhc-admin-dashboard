import React from 'react';
import './style.css';
import concatClassName from '../../../helpers/classNameConcat';

const Button = ({ className, to, children, ...rest }) => (
	<button className={concatClassName('button', className)} {...rest}>
		{children}
	</button>
);

export default Button;

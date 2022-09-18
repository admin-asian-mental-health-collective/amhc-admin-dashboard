import React from 'react';
import './style.css';
import concatClassName from '../../../helpers/classNameConcat';

const Box = ({ id, className, children, ...rest }) => (
	<div className={concatClassName('box', className)} id={id} {...rest}>
		{children}
	</div>
);

export default Box;

import React from 'react';
import './style.css';

const Box = ({ id, className, children, ...rest }) => (
	<div className={`box ${className}`} id={id} {...rest}>
		{children}
	</div>
);

export default Box;

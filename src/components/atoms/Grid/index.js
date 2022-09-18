import React from 'react';
import './style.css';
import Box from '../Box';

const Grid = ({ className, children, ...rest }) => (
	<Box className={`grid ${className}`} {...rest}>
		{children}
	</Box>
);

export default Grid;

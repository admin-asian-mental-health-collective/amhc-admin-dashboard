import React from 'react';
import './style.css';
import Box from '../Box';
import concatClassName from '../../../helpers/classNameConcat';

const Grid = ({ className, children, ...rest }) => (
	<Box className={concatClassName('grid', className)} {...rest}>
		{children}
	</Box>
);

export default Grid;

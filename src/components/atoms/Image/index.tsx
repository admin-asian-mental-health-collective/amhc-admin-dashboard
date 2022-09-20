import React from 'react';
import './style.css';
import concatClassName from '../../../helpers/classNameConcat';

const Image = ({ src, className, ...rest }) => (
	<img src={src} className={concatClassName('image', className)} {...rest} />
);

export default Image;

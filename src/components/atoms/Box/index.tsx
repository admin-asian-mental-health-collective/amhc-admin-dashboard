import React from 'react';
import './style.css';
import concatClassName from '../../../helpers/classNameConcat';

interface Props {
	id?: string;
	className?: string;
	children?: JSX.Element;
}

const Box = ({ id, className, children, ...rest }: Props) => (
	<div className={concatClassName('box', className)} id={id} {...rest}>
		{children}
	</div>
);

export default Box;

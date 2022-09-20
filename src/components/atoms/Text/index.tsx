import React from 'react';
import './style.css';
import concatClassName from '../../../helpers/classNameConcat';

function Text({ as, className, children, ...rest }) {
	const Elem = as ? as : 'p';
	return (
		<Elem className={concatClassName('text', className)} {...rest}>
			{children}
		</Elem>
	);
}

export default Text;

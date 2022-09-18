import React from 'react';
import './style.css';

export default function Text({ as, children, ...rest }) {
	const Elem = as ? as : 'p';
	return (
		<Elem className="text" {...rest}>
			{children}
		</Elem>
	);
}

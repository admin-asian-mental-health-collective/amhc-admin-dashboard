import React from 'react';
import './style.css';

export default function Box({ id, className, children }) {
	return (
		<div className={`box ${className}`} id={id}>
			{children}
		</div>
	);
}

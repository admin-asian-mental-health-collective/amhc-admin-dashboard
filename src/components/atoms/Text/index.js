import React from 'react';
import './style.css';

export default function Text({ as, children }) {
	if (as === 'span') {
		return <span className="text">{children}</span>;
	}
	return <p className="text">{children}</p>;
}

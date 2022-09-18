import React from 'react';
import './style.css';

import Box from '../../atoms/Box';
import Link from '../../atoms/Link';

export default function Banner() {
	return (
		<Box className="banner">
			<Link to="/amazon-smile-setup/">
				Help AMHC and choose us as your Amazon Smile Charity! Click for
				instructions.
			</Link>
		</Box>
	);
}

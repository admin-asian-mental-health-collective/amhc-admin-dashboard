import React from 'react';
import './style.css';

import Box from '../../atoms/Box';
import Text from '../../atoms/Text';

export default function Banner() {
	return (
		<Box className="banner">
			<Text>
				Help AMHC and choose us as your Amazon Smile Charity! Click for
				instructions.
			</Text>
		</Box>
	);
}

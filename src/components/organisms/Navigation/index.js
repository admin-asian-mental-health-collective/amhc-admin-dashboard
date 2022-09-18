import React from 'react';
import './style.css';

import Grid from '../../atoms/Grid';
import Box from '../../atoms/Box';
import Image from '../../atoms/Image';
import Link from '../../atoms/Link';

import BannerLogo from '../../../assets/banner-logo.png';

export default function Navigation() {
	return (
		<nav>
			<Grid>
				<Box>
					<Link to="/">
						<Image className="logo" src={BannerLogo} />
					</Link>
				</Box>
				<Box></Box>
				<Box>Dropdown</Box>
			</Grid>
		</nav>
	);
}

import React from 'react';
import './style.css';

import Grid from '../../atoms/Grid';
import Box from '../../atoms/Box';
import Image from '../../atoms/Image';
import Link from '../../atoms/Link';
import Button from '../../atoms/Button';

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
				<Box>
					<Link to="/directory">directory</Link>
					<Link to="/resources">resources</Link>
					<Link to="/blog">blog</Link>
					<Link to="/about">about</Link>
					<Link to="/therapists">contact</Link>
				</Box>
				<Box>
					<Button to="/donate">donate</Button>
				</Box>
			</Grid>
		</nav>
	);
}

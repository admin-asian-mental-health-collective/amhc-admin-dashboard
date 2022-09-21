import Grid from '../../atoms/Grid';
import Box from '../../atoms/Box';
import Image from '../../atoms/Image';
import Link from '../../atoms/Link';
import Button from '../../atoms/Button';

import BannerLogo from '../../../assets/banner-logo.png';

import Base from '../../../interfaces/base';
import styled, { StyledComponent } from 'styled-components';
import style from './style';

interface Props extends Base {}

const Navigation: StyledComponent = styled(({ className }: Props) => {
	return (
		<nav className={className}>
			<Box>
				<Link to="/amazon-smile-setup/">
					Help AMHC and choose us as your Amazon Smile Charity! Click
					for instructions.
				</Link>
			</Box>
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
					<Link to="/donate">
						<Button>donate</Button>
					</Link>
				</Box>
			</Grid>
		</nav>
	);
})(style);

export default Navigation;

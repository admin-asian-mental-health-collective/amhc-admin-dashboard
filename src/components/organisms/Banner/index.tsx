import './style.ts';
import Grid from '../../atoms/Grid';
import Box from '../../atoms/Box';
import Image from '../../atoms/Image';
import Text from '../../atoms/Text';
import Button from '../../atoms/Button';
import StringIllustration from '../../../assets/string-illustration.png';
import Base from '../../../interfaces/base';

import styled, { StyledComponent } from 'styled-components';
import style from './style';

interface Props extends Base {}

const Banner: StyledComponent = styled(({ className }: Props) => (
	<header className={className}>
		<Grid>
			<Box>
				<Image src={StringIllustration} />
			</Box>
			<Box>
				<h1>Find a Therapist Nearby</h1>
				<Text>
					It is our hope that this resource will help to facilitate
					your search for a therapist.
				</Text>
				<Button to="/directory">find an asian therapist (us)</Button>
				<Button to="/directory">find an asian therapist (can)</Button>
			</Box>
		</Grid>
	</header>
))(style);

export default Banner;

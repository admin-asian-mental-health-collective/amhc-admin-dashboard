import { ComponentStory, ComponentMeta } from '@storybook/react';
import disabled from './constants/disabled';

import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';

export default {
	title: 'Atoms/Box',
	component: Box,
	argTypes: { ...disabled },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
	<Box {...args} style={{ textAlign: 'center' }}>
		<Box style={{ paddingBottom: '15px' }}>
			<Text>Hello World</Text>
		</Box>
		<Box>
			<Button>Hello World</Button>
			<Button secondary={true}>Hello World</Button>
		</Box>
	</Box>
);

export const Primary = Template.bind({});
Primary.args = {};

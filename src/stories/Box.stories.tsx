import { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from '../components/Box';
import Text from '../components/Text';
import Button from '../components/Button';

export default {
	title: 'Atoms/Box',
	component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
	<Box {...args}>
		<Box style={{ textAlign: 'center' }}>
			<Text>Hello World</Text>
		</Box>
		<Box>
			<Button onClick={() => console.log(true)}>Hello World</Button>
		</Box>
	</Box>
);

export const Primary = Template.bind({});
Primary.args = {};

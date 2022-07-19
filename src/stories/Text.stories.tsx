import { ComponentStory, ComponentMeta } from '@storybook/react';
import disabled from './constants/disabled';

import Text from '../components/Text';

export default {
	title: 'Atoms/Text',
	component: Text,
	argTypes: { ...disabled },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
	<Text {...args}>Hello World</Text>
);

export const Primary = Template.bind({});
Primary.args = {};

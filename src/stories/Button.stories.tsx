import { ComponentStory, ComponentMeta } from '@storybook/react';
import disabled from './constants/disabled';

import Button from '../components/Button';

export default {
	title: 'Atoms/Button',
	component: Button,
	argTypes: { ...disabled },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Hello World</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

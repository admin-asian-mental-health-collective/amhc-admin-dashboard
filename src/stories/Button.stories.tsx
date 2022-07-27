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
Primary.args = {
	secondary: false,
	outlined: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
	secondary: true,
	outlined: false,
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
	secondary: false,
	outlined: true,
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
	secondary: true,
	outlined: true,
};

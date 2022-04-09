import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@components/Button';

export default {
	title: 'Atoms/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Hello World</Button>
);

export const Primary = Template.bind({});
Primary.args = {};

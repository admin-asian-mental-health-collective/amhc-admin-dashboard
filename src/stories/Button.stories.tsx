import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '@/components/Button';

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button>Test 123</Button>;

export const Primary = Template.bind({});
Primary.args = {};

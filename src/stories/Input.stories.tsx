import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '@components/Input';

export default {
	title: 'Atoms/Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	placeholder: 'Hello World',
};

import { ReactChild } from 'react';
import styled from 'styled-components';

export interface TextProps {
	children: ReactChild;
	as?: 'p' | 'span';
}

export const Text = ({ children, as, ...args }: TextProps) => {
	const Element = styled[as || 'span']`
		padding: 0;
		margin: 0;
		font-family: ${({ theme }) => theme.fonts.family};
		font-size: ${({ theme }) => theme.fonts.size};
	`;
	return <Element {...args}>{children}</Element>;
};

export default Text;

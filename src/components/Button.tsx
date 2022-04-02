import { ReactChild } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
	children: ReactChild;
}

export const Button = ({ children, ...args }: ButtonProps) => {
	const Element = styled.button`
		background: ${({ theme }) => theme.colors.blue};
		border-radius: 100px;
		cursor: pointer;
		border: none;
		color: ${({ theme }) => theme.colors.white};
		padding: ${({ theme }) => theme.spacings.md}
			${({ theme }) => theme.spacings.lg};
		font-size: ${({ theme }) => theme.fonts.size};
		font-family: ${({ theme }) => theme.fonts.family};
	`;
	return <Element {...args}>{children}</Element>;
};

export default Button;

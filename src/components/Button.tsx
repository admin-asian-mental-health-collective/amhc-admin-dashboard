import { MouseEventHandler, ReactChild } from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps {
	children: ReactChild;
	secondary?: Boolean;
	onClick: MouseEventHandler;
	outlined?: Boolean;
}

const sharedStyle = css`
	border-radius: 100px;
	cursor: pointer;
	border: none;
	color: ${({ theme }) => theme.colors.white};
	padding: ${({ theme }) => theme.spacings.md}
		${({ theme }) => theme.spacings.lg};
	font-size: ${({ theme }) => theme.fonts.size};
	font-family: ${({ theme }) => theme.fonts.family};
`;

const PrimaryButton = styled.button`
	background: ${({ theme }) => theme.colors.blue};
	${sharedStyle}
`;

const SecondaryButton = styled.button`
	background: ${({ theme }) => theme.colors.pink};
	${sharedStyle}
`;

const OutlinedButton = styled.button`
	background: ${({ theme }) => theme.colors.white};
	${sharedStyle}
	border: solid 2px ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.blue};
`;

const SecondaryOutlinedButton = styled.button`
	background: ${({ theme }) => theme.colors.white};
	${sharedStyle}
	border: solid 2px ${({ theme }) => theme.colors.pink};
	color: ${({ theme }) => theme.colors.pink};
`;

export const Button = ({
	children,
	secondary,
	outlined,
	onClick,
	...args
}: ButtonProps) => {
	const Element = !secondary
		? !outlined
			? PrimaryButton
			: OutlinedButton
		: !outlined
			? SecondaryButton
			: SecondaryOutlinedButton;
	return (
		<Element onClick={onClick} {...args}>
			{children}
		</Element>
	);
};

export default Button;

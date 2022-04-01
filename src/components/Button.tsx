import { ReactChild } from 'react';
import styled from 'styled-components';

interface Props {
	children: ReactChild;
}

const Button = ({ children }: Props) => {
	const Element = styled.button`
		background: ${({ theme }) => theme.colors.blue};
		border-radius: 100px;
		cursor: pointer;
		text-transform: lowercase;
		border: none;
		color: ${({ theme }) => theme.colors.white};
		margin: 0.5em 1em;
		padding: 0.25em 1em;
		font-size: 16px;
	`;
	return <Element>{children}</Element>;
};

export default Button;

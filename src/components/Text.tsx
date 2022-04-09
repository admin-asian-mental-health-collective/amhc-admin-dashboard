import { ReactChild } from 'react';
import styled from 'styled-components';

export interface TextProps {
	children: ReactChild;
	as?: 'p' | 'span';
}

const PrimaryText = styled.span`
	padding: 0;
	margin: 0;
	font-family: ${({ theme }) => theme?.fonts?.family};
	font-size: ${({ theme }) => theme?.fonts?.size};
`;

export const Text = ({ children, as, ...args }: TextProps) => {
	return (
		<PrimaryText {...args} as={as}>
			{children}
		</PrimaryText>
	);
};

export default Text;

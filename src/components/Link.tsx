import { ReactChild } from 'react';
import CSS from 'csstype';
import styled from 'styled-components';

export interface LinkProps {
	children: ReactChild;
	id?: string;
	style?: CSS.Properties;
	className?: string;
  href?: string;
	target?: string;
}

const PrimaryLink = styled.a`
font-family: ${({ theme }) => theme?.fonts?.family};
font-size: ${({ theme }) => theme?.fonts?.size};
`;

const Link = ({ className, children, target, ...args }: LinkProps) => {
	return (
		<PrimaryLink className={className} target={target} {...args}>
			{children}
		</PrimaryLink>
	);
};

export default Link;

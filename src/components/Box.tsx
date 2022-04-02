import { ReactChild } from 'react';
import CSS from 'csstype';
import styled from 'styled-components';

export interface BoxProps {
	children: ReactChild[] | ReactChild;
	as?: 'header' | 'footer' | 'div' | 'section' | 'article';
	id?: string;
	style?: CSS.Properties;
}

const PrimaryBox = styled.div`
	padding: 0;
	margin: 0;
	display: grid;
	box-sizing: border-box;
	font-family: ${({ theme }) => theme?.fonts?.family};
	font-size: ${({ theme }) => theme?.fonts?.size};
`;

export const Box = ({ children, as, style, ...args }: BoxProps) => {
	return (
		<PrimaryBox {...args} as={as} style={style}>
			{Array.isArray(children) ? [...children] : children}
		</PrimaryBox>
	);
};

export default Box;

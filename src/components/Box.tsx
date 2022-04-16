import { ReactChild } from 'react';
import CSS from 'csstype';
import styled from 'styled-components';

export interface BoxProps {
	children: ReactChild[] | ReactChild;
	as?: 'header' | 'footer' | 'div' | 'section' | 'article';
	id?: string;
	style?: CSS.Properties;
	className?: string;
}

const Box = styled(({ className, children, ...args }: BoxProps) => {
	return (
		<div className={className} {...args}>
			{Array.isArray(children) ? [...children] : children}
		</div>
	);
})(
	({ theme }) => `
	padding: 0;
	margin: 0;
	display: grid;
	box-sizing: border-box;
	font-family: ${theme?.fonts?.family};
	font-size: ${theme?.fonts?.size};
`
);

export default Box;

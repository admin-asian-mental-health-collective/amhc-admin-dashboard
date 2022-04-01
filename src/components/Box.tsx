import { ReactChild } from 'react';
import styled from 'styled-components';

export interface BoxProps {
	children: ReactChild[] | ReactChild;
	columns?: string;
	rows?: string;
	justifyContent?: 'center' | 'left' | 'right';
	textAlign?: 'center' | 'left' | 'right';
	gridGap?: string;
}

export const Box = ({
	children,
	columns,
	rows,
	justifyContent,
	textAlign,
	gridGap,
	...args
}: BoxProps) => {
	const Element = styled.div`
		padding: 0;
		margin: 0;
		grid-template-columns: ${columns || '1fr'};
		grid-template-rows: ${rows || '1fr'};
		display: grid;
		gridgap: ${gridGap || '0'};
		justify-content: ${justifyContent || 'left'};
		text-align: ${textAlign || 'left'};
		box-sizing: border-box;
		font-family: ${({ theme }) => theme.fonts.family};
		font-size: ${({ theme }) => theme.fonts.size};
	`;
	return (
		<Element {...args}>
			{Array.isArray(children) ? [...children] : children}
		</Element>
	);
};

export default Box;

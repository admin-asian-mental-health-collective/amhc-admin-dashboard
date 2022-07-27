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

const Box = styled(({ className, children, as, ...args }: BoxProps) => {
	let Elem = as || 'div';
	return (
		<Elem className={className} {...args}>
			{Array.isArray(children) ? [...children] : children}
		</Elem>
	);
})(
	({
		theme: {
			fonts: { family, size },
		},
	}) => `
		padding: 0;
		margin: 0;
		display: block;
		box-sizing: border-box;
		font-family: ${family};
		font-size: ${size};
	`
);

Box.defaultProps = {
	as: 'div'
}

export default Box;

import { MouseEventHandler, ReactChild } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
	children: ReactChild;
	secondary?: boolean;
	onClick?: MouseEventHandler;
	outlined?: boolean;
	className?: string;
	fullWidth?: boolean;
}

export const Button = styled(
	({ outlined, secondary, fullWidth, children, ...rest }: ButtonProps) => (
		<button {...rest}>{children}</button>
	)
)(
	({
		theme: {
			colors: { white, pink, blue },
			spacings: { md, lg },
			fonts: { family, size },
		},
		secondary,
		outlined,
		fullWidth,
	}) => `
		border-radius: 100px;
		cursor: pointer;
		border: solid thin ${!outlined ? 'transparent' : secondary ? pink : blue};
		color: ${!outlined ? white : secondary ? pink : blue};
		padding: ${md} ${lg};
		font-size: ${size};
		font-family: ${family};
		background: ${outlined ? 'transparent' : secondary ? pink : blue};
		width: ${fullWidth ? '100%' : '-webkit-fit-content'};
		display: ${fullWidth ? 'block' : 'inline-block'};
	`
);

Button.defaultProps = {
	secondary: false,
	outlined: false,
	fullWidth: false,
};

export default Button;

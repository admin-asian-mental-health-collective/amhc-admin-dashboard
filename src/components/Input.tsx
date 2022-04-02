import styled from 'styled-components';

export interface InputProps {}

export const Input = ({ ...args }: InputProps) => {
	const Element = styled.input`
		border: solid thin ${({ theme }) => theme.colors.gray};
		border-radius: 100px;
		font-size: ${({ theme }) => theme.fonts.size};
		padding: ${({ theme }) => theme.spacings.md}
			${({ theme }) => theme.spacings.lg};
		font-family: ${({ theme }) => theme.fonts.family};
		box-sizing: border-box;
	`;
	return <Element {...args} />;
};

export default Input;

import styled from 'styled-components';

export interface InputProps {}

const PrimaryInput = styled.input`
	border: solid thin ${({ theme }) => theme.colors.gray};
	border-radius: 100px;
	font-size: ${({ theme }) => theme.fonts.size};
	padding: ${({ theme }) => theme.spacings.md}
		${({ theme }) => theme.spacings.lg};
	font-family: ${({ theme }) => theme.fonts.family};
	box-sizing: border-box;
`;

export const Input = ({ ...args }: InputProps) => {
	return <PrimaryInput {...args} />;
};

export default Input;

import concatClassName from '../../../helpers/classNameConcat';
import styled, { StyledComponent } from 'styled-components';
import Base from '../../../interfaces/base';
import style from './style';

interface Props extends Base {
	to?: string;
}

const Button: StyledComponent = styled(
	({ className, children, ...rest }: Props) => (
		<button className={concatClassName('button', className)} {...rest}>
			{children}
		</button>
	)
)(style);

export default Button;

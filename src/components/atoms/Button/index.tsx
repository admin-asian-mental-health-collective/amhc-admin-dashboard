import concatClassName from '../../../helpers/classNameConcat';
import styled from 'styled-components';
import Base from '../../../interfaces/base';
import style from './style';

interface Props extends Base {
	to?: string;
}

const Button = styled(({ className, children, ...rest }: Props) => (
	<button className={concatClassName('button', className)} {...rest}>
		{children}
	</button>
))(style);

export default Button;

import concatClassName from '../../../helpers/classNameConcat';
import Base from '../../../interfaces/base';
import styled, { StyledComponent } from 'styled-components';
import style from './style';

interface Props extends Base {}

const Box: StyledComponent = styled(
	({ id, className, children, ...rest }: Props) => (
		<div className={concatClassName('box', className)} id={id} {...rest}>
			{children}
		</div>
	)
)(style);

export default Box;

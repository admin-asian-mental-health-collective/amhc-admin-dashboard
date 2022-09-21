import style from './style';
import styled, { StyledComponent } from 'styled-components';
import Box from '../Box';
import concatClassName from '../../../helpers/classNameConcat';
import Base from '../../../interfaces/base';

interface Props extends Base {}

const Grid: StyledComponent = styled(
	({ className, children, ...rest }: Props) => (
		<Box className={concatClassName('grid', className)} {...rest}>
			{children}
		</Box>
	)
)(style);

export default Grid;

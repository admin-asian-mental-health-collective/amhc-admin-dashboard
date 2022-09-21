import './style.css';
import Box from '../Box';
import concatClassName from '../../../helpers/classNameConcat';
import Base from '../../../interfaces/base';

interface Props extends Base {}

const Grid = ({ className, children, ...rest }: Props) => (
	<Box className={concatClassName('grid', className)} {...rest}>
		{children}
	</Box>
);

export default Grid;

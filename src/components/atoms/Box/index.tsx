import './style.css';
import concatClassName from '../../../helpers/classNameConcat';
import Base from '../../../interfaces/base';

interface Props extends Base {}

const Box = ({ id, className, children, ...rest }: Props) => (
	<div className={concatClassName('box', className)} id={id} {...rest}>
		{children}
	</div>
);

export default Box;
